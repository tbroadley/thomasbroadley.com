# SSH multiplexing gotchas

[_OpenSSH_ (the book) says this about SSH multiplexing:](https://en.wikibooks.org/wiki/OpenSSH/Cookbook/Multiplexing)

> Multiplexing is the ability to send more than one signal over a single line or connection.
> In OpenSSH, multiplexing can re-use an existing outgoing TCP connection for multiple concurrent SSH sessions to a remote SSH server,
> avoiding the overhead of creating a new TCP connection and reauthenticating each time.

For example, maybe you want to use the Docker CLI on `jump-host.example.org`, against a Docker daemon on `docker-host.example.org`.
You follow [the Docker docs' suggestion](https://docs.docker.com/engine/security/protect-access/#ssh-tips) for setting up Docker over SSH, including multiplexing:

```
Host docker-host.example.org
  ControlMaster     auto
  ControlPath       ~/.ssh/control-%C
  ControlPersist    yes
```

After using this setup for a while, you notice that SSHing into `docker-host` fails occasionally with an error message like "Session open refused by peer".
You Google and discover that, by default, OpenSSH has a limit of 10 multiplexed sessions per TCP connection. Beyond that, `sshd` on `docker-host` starts rejecting sessions.

You resolve this by increasing the `MaxSessions` setting in `/etc/ssh/sshd_config` on `docker-host`, to 100, 1,000, or 2,147,483,647 (the max value for a 32-bit signed integer,
to disable this limit entirely).

However, even after bumping `MaxSessions` and restarting the `sshd` service, you still see the error message. `sshd -T` shows that `sshd_config` is valid
and you set `MaxSessions` correctly. What's going on?

The problem is, restarting `sshd` doesn't kill existing SSH sessions.
On `docker-host`, those existing sessions are supported by existing `sshd` instances. And those existing processes use the old configuration from `sshd_config`...
including `MaxSessions 10`.

Fixing the immediate problem is easy. Just delete `~/.ssh/control-...` from `jump-host`. But how to avoid this next time you update `sshd_config`?

Part of the problem is `ControlPersist yes`. This means that the master SSH session between `jump-host` and `docker-host`, the one that all the
multiplexed sessions run on, stays open until you close it manually. Even between `sshd` service restarts.

So you change ControlPersist to a time, e.g. `60m`. That way, if the master session lives for more than 60 minutes, it'll close as soon as all its
multiplexed sessions also close. Which should happen... at some point? Probably? Fingers crossed.
