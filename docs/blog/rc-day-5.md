# RC day 5

Yesterday went so well I forgot to post about it! I started early, spending an hour trying to explain how [`quine-central`](https://github.com/dpiponi/quine-central) handles character escaping. Then I paired with a batchmate on [Narrated Diffs](https://github.com/tbroadley/narrated-diffs) (fka Literate Diffs), which was extremely helpful. Together we had a brainstorm for improvements to the project, selected the ones necessary for an MLP (minimum loveable product), then implemented a feature (the ability to build a narrated diff from a GitHub PR URL).

Without that session I don’t think Narrated Diffs would be where it is now: [a tool that you can actually use!](https://narrated-diffs.thomasbroadley.com) Paste a Git diff or a GitHub PR URL, then click “Narrate that diff!”. You can then reorder the diff’s chunks and add comments to them. When you’re done, copy the URL and send it to your reviewers. Tell a story with your PR and hopefully they’ll find it easier to review.

After that pairing session, I spent the rest of the day getting Narrated Diffs to an MLP. I created a Postgres database on my computer and got the backend to store diffs in it. Then I hosted the frontend and backend on a VPS, which took a while. I’ll post soon explaining in more depth the tech stack the project uses.

I wrapped up the day with technical talks. These are five-minute presentations by Recursers about projects they’ve been working on. First, a few RC staff members gave a presentation on [RC’s four social rules](https://www.recurse.com/manual#sub-sec-social-rules), complete with demonstrations and audience participation. Then I talked about what I’d learned about code review pain points this week and gave a demo of Narrative Diffs. I wish I’d spent more time preparing for my talk, oh well!

I really enjoyed the talks that others gave. One Recurser used Python’s `html.parser` module to solve FizzBuzz by scraping Answers.com for questions like, “Is 17 divisible by 5?” Another added tail recursion to a Python program by modifying its bytecode (as the presenter said, “Python has bytecode??”). The highlight was when an alumni used computer voice control software called [Talon](https://talonvoice.com/) to live-code FizzBuzz right in front of us!

It’s been a really good week. I’m quite put out that it’s over. I’ll publish a return statement (RC’s cute term for a reflection on your time there) in the next few days.
