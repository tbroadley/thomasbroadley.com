(this["webpackJsonpliterate-diffs"] =
  this["webpackJsonpliterate-diffs"] || []).push([
  [0],
  {
    193: function (e, n, t) {},
    194: function (e, n, t) {},
    195: function (e, n, t) {},
    196: function (e, n, t) {},
    197: function (e, n, t) {
      "use strict";
      t.r(n);
      var a = t(0),
        c = t.n(a),
        r = t(4),
        o = t.n(r),
        i = (t(73), t(35)),
        l = t(36),
        s = t(38),
        f = t(37),
        u = t(63),
        d = t.n(u),
        m = t(64),
        h = t.n(m),
        p = t(5),
        v = t(67),
        g = t(65),
        E = t.n(g),
        _ =
          (t(192),
          t(193),
          function (e) {
            var n = e.type,
              t = e.ln2,
              a = e.ln,
              r = e.content;
            return c.a.createElement(
              "div",
              {
                className: "change "
                  .concat("add" === n ? "change--added" : "", " ")
                  .concat("del" === n ? "change--deleted" : ""),
              },
              c.a.createElement(
                "div",
                { className: "change__addition-or-deletion" },
                "add" === n ? "+" : "",
                "del" === n ? "-" : ""
              ),
              c.a.createElement(
                "div",
                { className: "change__line-number" },
                "normal" === n ? t : a
              ),
              c.a.createElement(
                "div",
                { className: "change__content" },
                r.slice(1)
              )
            );
          }),
        b =
          (t(194),
          function (e) {
            var n = e.baseKey,
              t = e.content,
              a = e.changes;
            return c.a.createElement(
              "div",
              { className: "chunk" },
              c.a.createElement("p", { className: "chunk__content" }, t),
              a.map(function (e) {
                var t = e.type,
                  a = e.ln1,
                  r = e.ln2,
                  o = e.ln,
                  i = e.content,
                  l = ""
                    .concat(n, "-")
                    .concat(t, "-")
                    .concat("normal" === t ? "".concat(a, "-").concat(r) : o);
                return c.a.createElement(
                  _,
                  Object.assign(
                    { key: l, baseKey: l },
                    { type: t, ln1: a, ln2: r, ln: o, content: i }
                  )
                );
              })
            );
          }),
        k = (t(195), t(66)),
        w = t.n(k),
        y = Object(p.SortableHandle)(function () {
          return c.a.createElement("img", {
            className: "file__drag-handle",
            src: w.a,
            alt: "Drag and drop this file",
          });
        }),
        N = Object(p.SortableElement)(function (e) {
          e.index;
          var n,
            t = e.from,
            a = e.to,
            r = e.chunks,
            o = c.a.useState(""),
            i = Object(v.a)(o, 2),
            l = i[0],
            s = i[1];
          return (
            (n =
              t === a
                ? c.a.createElement(
                    "p",
                    { className: "file__description" },
                    c.a.createElement("span", { className: "file__name" }, t)
                  )
                : "/dev/null" === t
                ? c.a.createElement(
                    "p",
                    { className: "file__description" },
                    "File ",
                    c.a.createElement("span", { className: "file__name" }, a),
                    " created"
                  )
                : "/dev/null" === a
                ? c.a.createElement(
                    "p",
                    { className: "file__description" },
                    "File ",
                    c.a.createElement("span", { className: "file__name" }, t),
                    " deleted"
                  )
                : c.a.createElement(
                    "p",
                    { className: "file__description" },
                    "File",
                    c.a.createElement(
                      "span",
                      { className: "file__from-name" },
                      t
                    ),
                    "renamed to",
                    c.a.createElement("span", { className: "file__to-name" }, a)
                  )),
            c.a.createElement(
              "div",
              { className: "file" },
              c.a.createElement(y, null),
              c.a.createElement(
                "div",
                { className: "file__user-text" },
                c.a.createElement(E.a, {
                  value: l,
                  onChange: function (e) {
                    return s(e);
                  },
                })
              ),
              n,
              "/dev/null" === a
                ? null
                : r.map(function (e) {
                    var n = e.oldStart,
                      r = e.newStart,
                      o = e.content,
                      i = e.changes,
                      l = ""
                        .concat(t, "-")
                        .concat(a, "-")
                        .concat(n, "-")
                        .concat(r);
                    return c.a.createElement(b, {
                      key: l,
                      baseKey: l,
                      content: o,
                      changes: i,
                    });
                  })
            )
          );
        }),
        j = function (e) {
          var n = ["package-lock.json", "yarn.lock"];
          return n.includes(e.from) || n.includes(e.to)
            ? null
            : c.a.createElement(N, e);
        },
        O =
          (t(196),
          Object(p.SortableContainer)(function (e) {
            var n = e.diff,
              t = void 0 === n ? [] : n;
            return c.a.createElement(
              "div",
              { className: "app" },
              t.map(function (e, n) {
                var t = e.from,
                  a = e.to,
                  r = e.chunks,
                  o = e.chunkIndex;
                return c.a.createElement(
                  j,
                  Object.assign(
                    {
                      key: "".concat(t, "-").concat(a, "-").concat(o),
                      baseKey: "".concat(t, "-").concat(a, "-").concat(o),
                    },
                    { index: n, from: t, to: a, chunks: r }
                  )
                );
              }),
              c.a.createElement(
                "p",
                null,
                "Icons made by ",
                c.a.createElement(
                  "a",
                  {
                    href: "https://www.flaticon.com/authors/freepik",
                    title: "Freepik",
                  },
                  "Freepik"
                )
              )
            );
          })),
        S = (function (e) {
          Object(s.a)(t, e);
          var n = Object(f.a)(t);
          function t() {
            var e;
            Object(i.a)(this, t);
            for (var a = arguments.length, c = new Array(a), r = 0; r < a; r++)
              c[r] = arguments[r];
            return (
              ((e = n.call.apply(n, [this].concat(c))).state = { diff: "" }),
              (e.onChange = function (n) {
                e.setState({ diff: n.target.value });
              }),
              e
            );
          }
          return (
            Object(l.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return c.a.createElement(
                    "div",
                    { className: "app" },
                    c.a.createElement("p", null, "Paste in a Git diff:"),
                    c.a.createElement(
                      "p",
                      null,
                      c.a.createElement("textarea", {
                        value: this.state.diff,
                        onChange: this.onChange,
                      })
                    ),
                    c.a.createElement(
                      "button",
                      {
                        onClick: function () {
                          return e.props.setDiff(e.state.diff);
                        },
                      },
                      "Lit that diff!"
                    )
                  );
                },
              },
            ]),
            t
          );
        })(a.Component),
        x = (function (e) {
          Object(s.a)(t, e);
          var n = Object(f.a)(t);
          function t() {
            var e;
            Object(i.a)(this, t);
            for (var a = arguments.length, c = new Array(a), r = 0; r < a; r++)
              c[r] = arguments[r];
            return (
              ((e = n.call.apply(n, [this].concat(c))).state = {}),
              (e.onSortEnd = function (n) {
                var t = n.oldIndex,
                  a = n.newIndex;
                e.setState({ diff: Object(p.arrayMove)(e.state.diff, t, a) });
              }),
              (e.setDiff = function (n) {
                var t = h()(n),
                  a = d()(t, function (e) {
                    var n = e.from,
                      t = e.to;
                    return e.chunks.map(function (e, a) {
                      return { from: n, to: t, chunks: [e], chunkIndex: a };
                    });
                  });
                e.setState({ diff: a });
              }),
              e
            );
          }
          return (
            Object(l.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.state.diff;
                  return e
                    ? c.a.createElement(O, {
                        diff: e,
                        onSortEnd: this.onSortEnd,
                        useDragHandle: !0,
                      })
                    : c.a.createElement(S, { setDiff: this.setDiff });
                },
              },
            ]),
            t
          );
        })(a.Component),
        C = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function D(e) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var n = e.installing;
              n.onstatechange = function () {
                "installed" === n.state &&
                  (navigator.serviceWorker.controller
                    ? console.log("New content is available; please refresh.")
                    : console.log("Content is cached for offline use."));
              };
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      o.a.render(c.a.createElement(x, null), document.getElementById("root")),
        (function () {
          if ("serviceWorker" in navigator) {
            if (
              new URL("/literate-diffs", window.location).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function () {
              var e = "".concat("/literate-diffs", "/service-worker.js");
              C
                ? (function (e) {
                    fetch(e)
                      .then(function (n) {
                        404 === n.status ||
                        -1 ===
                          n.headers.get("content-type").indexOf("javascript")
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : D(e);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(e)
                : D(e);
            });
          }
        })();
    },
    66: function (e, n, t) {
      e.exports = t.p + "static/media/move.e49f23b6.svg";
    },
    68: function (e, n, t) {
      e.exports = t(197);
    },
    73: function (e, n, t) {},
  },
  [[68, 1, 2]],
]);
//# sourceMappingURL=main.f8b9a3db.chunk.js.map
