# Short Response Questions

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will each be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content per question.

---

## Question 1:

Why is it unsafe to make requests to a third-party API (like Giphy) directly from frontend JavaScript code? What specific risk does this create, and how can a malicious user exploit it?

**Your answer here**:

- It is unsafe to make requests to a third-party API in frontend code due to the possibility of **exposing an API key**.
- Since an API key acts as a password, having our key be accessible through frontend means the client will be able to access said key when the static assets are sent over and use it to make requests to the third-party API.
- As a result, that malicious user could use up our request resources for the third-party API.

## Question 2:

What is the proxy server strategy? How does it help avoid exposing API Keys in client-side code while still providing access to APIs that require keys?

**Your answer here**:

- The **proxy server strategy** describes the process of using our backend to handle our requests, and act as a middleman or **proxy server** between the frontend of our application and the third-party API.
- This helps avoid exposing API Keys in client-side code as backend code is not visible to the client.
- By making our requests in our server-side code, we can then send that data to our frontend. This means our frontend never holds our API key, and no client has access to our API key from our frontend.

## Question 3:

What is an environment variable, and why do we store API keys in a .env file instead of directly in source code? What role does .gitignore play in this setup, and what could go wrong if the .env file were accidentally committed to GitHub?

**Your answer here**:

- An **environment variable** describes values that are saved to the host's computer, and are declared in a separate `.env` file.
- They are saved to a `.env` file instead of directly in source code as this allows us to add our `.env` file to our `.gitignore` file, which makes the file not be pushed to the remote GitHub repository and effectively hides all environments variables.
- If the `.env` file were to be pushed to GitHub, all our environment variables would be exposed publicly, and anyone could look in the file and use any variables, such as an API Key.
