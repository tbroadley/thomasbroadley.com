# Creating an AI safety chatbot using LangChain and GPT-3

<img src="/blog/creating-an-ai-safety-chatbot-using-langchain-and-gpt-3/demo.png" alt="A demo of the AI safety chatbot. I ask it why I should care about AI alignment. It responds and I ask a follow-up question based on the response." style="max-width: 500px; display: block; margin: auto;">

Last week, I created a chatbot that answers questions about AI safety. You can try it out here: [https://ai-safety-conversational-agent.thomasbroadley.com/](https://ai-safety-conversational-agent.thomasbroadley.com/) The source code is [on GitHub](https://github.com/tbroadley/ai-safety-conversational-agent).

I made the chatbot because of a [bounty](https://www.lesswrong.com/posts/SLRLuiuDykfTdmesK/speed-running-everyone-through-the-bad-alignement-bingo) on LessWrong, a website about rationality, AI safety, and existential risk. The chatbot answers easy questions about AI safety, such as "what is AI safety?". It can also answer common objections like "I don't think AGI would want to kill humans".

To make the chatbot, I used [`chat-langchain`](https://github.com/hwchase17/chat-langchain), a starter kit for building chatbots with large language models (LLMs). First, `chat-langchain` uses [LangChain](https://github.com/hwchase17/langchain) (a toolset for making apps with LLMs) to turn a set of documents into an embedding. The embedding represents each document as a relatively small vector (for example, 768 dimensions). When someone sends a question to the bot, a FastAPI backend uses the embedding to quickly look up documents related to the question. Then, it uses the documents to build a GPT-3 prompt and generates an answer through the OpenAI API.

I made the bot in only a couple of hours. I forked `chat-langchain` and configured LangChain to ingest the FAQs from [aisafety.info](https://aisafety.info). Then, I generated an OpenAI API key. After that, the bot pretty much worked on my laptop.

The hardest part was making the bot work on my VPS. I’d forgotten how to use Apache and Systemd. Luckily, ChatGPT helped me set them up.

![Part of a ChatGPT chat log where I ask it about setting up Apache](/blog/creating-an-ai-safety-chatbot-using-langchain-and-gpt-3/chatgpt-chatlog.png)

This project is cheap to host so far. Testing the bot cost less than 1 USD. However, GPT-3 generation requests cost about 1 cent each. If many people use the bot, this could become more expensive.

Please try the bot and give me feedback!
