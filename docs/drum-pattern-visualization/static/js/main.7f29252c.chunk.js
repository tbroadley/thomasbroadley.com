(this["webpackJsonpdrum-pattern-visualization"] =
  this["webpackJsonpdrum-pattern-visualization"] || []).push([
  [0],
  {
    25: function (e, n, t) {
      e.exports = t(51);
    },
    30: function (e, n, t) {},
    48: function (e, n, t) {},
    51: function (e, n, t) {
      "use strict";
      t.r(n);
      var a = t(0),
        r = t.n(a),
        i = t(18),
        c = t.n(i),
        o = (t(30), t(19)),
        u = t(7),
        s = t(1),
        l = t(6),
        m = t(20),
        p = t.n(m),
        h = t(21),
        d = t.n(h),
        f = t(3),
        v = t.n(f),
        g = t(2);
      t(48);
      function b() {
        var e = Object(s.a)([
          "\n  height: 40px;\n  width: 8px;\n  border: 1px solid grey;\n  box-sizing: border-box;\n",
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = Object(s.a)([
          "\n  height: 40px;\n  width: 8px;\n  background-color: grey;\n",
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      var E = g.a.div(w()),
        k = g.a.div(b());
      function x(e) {
        var n = e.name,
          t = e.steps,
          a = e.stepsWithNotes;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement("div", null, n),
          v()(0, t).map(function (e) {
            return a.includes(e)
              ? r.a.createElement(E, null)
              : r.a.createElement(k, null);
          })
        );
      }
      function W() {
        var e = Object(s.a)(["\n  height: 32px;\n"]);
        return (
          (W = function () {
            return e;
          }),
          e
        );
      }
      function j() {
        var e = Object(s.a)([
          "\n  height: 40px;\n  width: 8px;\n  background-color: orange;\n\n  grid-column-start: ",
          ";\n  grid-column-end: ",
          ";\n",
        ]);
        return (
          (j = function () {
            return e;
          }),
          e
        );
      }
      function N() {
        var e = Object(s.a)([
          "\n  display: grid;\n  grid-template-columns: auto repeat(",
          ", 1fr);\n  grid-row-gap: 16px;\n  grid-column-gap: 80px;\n  align-items: center;\n",
        ]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = Object(s.a)([
          "\n  height: 100%;\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (O = function () {
            return e;
          }),
          e
        );
      }
      var y = [
          {
            name: "House",
            bpmRange: [120, 140],
            tracks: [
              { name: "Kick", stepsWithNotes: [0, 2, 4, 6] },
              { name: "Snare", stepsWithNotes: [2, 6] },
              { name: "Hi-hat", stepsWithNotes: v()(0, 8) },
            ],
          },
          {
            name: "Dubstep",
            bpmRange: [140, 160],
            tracks: [
              { name: "Kick", stepsWithNotes: [0, 4] },
              { name: "Snare", stepsWithNotes: [4] },
              { name: "Hi-hat", stepsWithNotes: v()(0, 8) },
            ],
          },
          {
            name: "Drum and bass",
            bpmRange: [160, 180],
            tracks: [
              { name: "Kick", stepsWithNotes: [0, 5] },
              { name: "Snare", stepsWithNotes: [2, 6] },
              { name: "Hi-hat", stepsWithNotes: v()(0, 8) },
            ],
          },
        ],
        S = {
          Kick: new l.Howl({ src: ["kick.wav"] }),
          Snare: new l.Howl({ src: ["snare.wav"] }),
          "Hi-hat": new l.Howl({ src: ["hi-hat.mp3"], volume: 0.5 }),
        },
        H = g.a.div(O()),
        R = g.a.div(N(), function (e) {
          return e.steps;
        }),
        I = g.a.div(
          j(),
          function (e) {
            return e.currentStep + 2;
          },
          function (e) {
            return e.steps + 2;
          }
        ),
        K = g.a.div(W());
      var z = function () {
        var e = Object(a.useState)(0),
          n = Object(u.a)(e, 2),
          t = n[0],
          i = n[1],
          c = Object(a.useState)(128),
          s = Object(u.a)(c, 2),
          l = s[0],
          m = s[1],
          h = y.find(function (e) {
            var n = Object(u.a)(e.bpmRange, 2),
              t = n[0],
              a = n[1];
            return l >= t && l <= a;
          });
        return (
          Object(a.useEffect)(function () {
            var e = setInterval(function () {
              var e = (t + 1) % 8;
              i(e);
              var n,
                a = Object(o.a)(h.tracks);
              try {
                for (a.s(); !(n = a.n()).done; ) {
                  var r = n.value;
                  r.stepsWithNotes.includes(e) && S[r.name].play();
                }
              } catch (c) {
                a.e(c);
              } finally {
                a.f();
              }
            }, 6e4 / l / 2);
            return function () {
              return clearInterval(e);
            };
          }),
          r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              H,
              null,
              r.a.createElement(
                R,
                { steps: 8 },
                r.a.createElement(I, { steps: 8, currentStep: t }),
                h.tracks.map(function (e) {
                  var n = e.name,
                    t = e.stepsWithNotes;
                  return r.a.createElement(x, {
                    name: n,
                    steps: 8,
                    stepsWithNotes: t,
                  });
                })
              ),
              r.a.createElement(K, null),
              r.a.createElement(
                "div",
                null,
                r.a.createElement("p", null, h.name),
                r.a.createElement("p", null, "BPM: ", l),
                r.a.createElement("input", {
                  type: "range",
                  min: d()(
                    y.map(function (e) {
                      return e.bpmRange[0];
                    })
                  ),
                  max: p()(
                    y.map(function (e) {
                      return e.bpmRange[1];
                    })
                  ),
                  value: l,
                  onChange: function (e) {
                    return m(Number.parseInt(e.target.value));
                  },
                })
              )
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(z, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[25, 1, 2]],
]);
//# sourceMappingURL=main.7f29252c.chunk.js.map
