# RC day 3

I started the day by (surprise, surprise) fiddling with my `.vimrc`. I decided to discard [`vim-workman`](https://github.com/nicwest/vim-workman) and try out a more minimal set of key remappings, but I ran into problems with those too. Eventually I realized I was spending too much time on this and decided to get rid of all rebindings. So far it’s going OK! I’m working much more slowly than usual and making lots of mistakes (although fewer by the end of the day). I’ll try this approach for the rest of the week, with the goal of switching to Workman on my work computer next week.

I then discussed code review pain points with another current Recurser. He told me about some of the processes his company’s put in place to make sure PRs get reviewed by the right person. He also encouraged me to share the knowledge I’ve gathered from my discussions this week, either in a blog post or in a technical talk on Friday. I’ll likely do both, so watch this space!

Afterward, I spent some time polishing my [Literate Diffs](https://github.com/tbroadley/literate-diffs) prototype, which you can now test out [here](https://thomasbroadley.com/literate-diffs/). Just paste in a Git diff (e.g. [this one](https://patch-diff.githubusercontent.com/raw/tbroadley/spellchecker-cli/pull/59.diff)), then annotate and rearrange the chunks to your heart’s content. I also got feedback on the prototype from those I’ve discussed code review with this week.

Later in the day, I had another coffee chat with a current Recurser. We talked about our lives before RC, swapped our favourite technical articles, and went back and forth over the benefits and disadvantages of type safety in certain contexts. (My coffee chat partner had written some SVG-generating Elixir code and found it clunky to have to wrap an opacity percentage like 0.5 in an `Opacity` type before passing the result to an `opacity` function. I think it’s clunky too, for little gain.)

Finally, I spent a good chunk of the day pairing on changes to [`cssc`](https://github.com/stephen/cssc), a CSS compiler written in Go, with its creator. Specifically, we refactored the code that simplifies `calc` expressions containing constants (e.g. `calc(2px + 2px)`) and discussed ways to fix a bug in that code.

Tomorrow I plan to pair more on `cssc`, have another coffee chat and a discussion about code review, and digest the notes I’ve taken from those discussions so far. After that I’m not sure! I could see myself working on Literate Diffs more, returning to Cryptopals, or picking up something new.
