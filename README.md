# 📓 Node.js Notes for beginners
                                                                              – My Personal Learning Journal

<div align="center">
  
![Node.js Logo](https://nodejs.org/static/images/logo.svg)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)

*A comprehensive guide to Node.js development for beginners and intermediate developers*

</div>

---

## 📚 Table of Contents

- [🌟 What is Node.js?](#-what-is-nodejs)
- [💻 Node.js REPL](#-nodejs-repl)
- [🔄 Working with the Process Object](#-working-with-the-process-object)
- [📦 Module System in Node.js](#-module-system-in-nodejs)
  - [Exporting from Files](#exporting-from-files)
  - [Exporting from Directories](#exporting-from-directories)
- [📋 NPM (Node Package Manager)](#-npm-node-package-manager)
  - [Installing Packages](#installing-packages)
  - [Understanding Package Files](#understanding-package-files)
  - [Local vs Global Installation](#local-vs-global-installation)
  - [Require vs Import](#require-vs-import)
- [🧩 Libraries vs Frameworks](#-libraries-vs-frameworks)
- [🌐 Express.js](#-expressjs)
  - [Creating a Web API with Express](#creating-a-web-api-with-express)
  - [Handling Requests](#handling-requests)
  - [Sending Responses](#sending-responses)
  - [Routing in Express](#routing-in-express)
- [🔄 Nodemon for Development](#-nodemon-for-development)
- [🔍 Working with Request Parameters](#-working-with-request-parameters)
  - [Path Parameters](#path-parameters)
  - [Query Strings](#query-strings)
- [🖌️ EJS Templating](#️-ejs-templating)
  - [Setting Up EJS](#setting-up-ejs)
  - [Interpolation Syntax](#interpolation-syntax)
  - [Passing Data to EJS Templates](#passing-data-to-ejs-templates)
  - [Conditional Statements in EJS](#conditional-statements-in-ejs)
  - [Loops in EJS](#loops-in-ejs)
  - [Working with JSON Data](#working-with-json-data)
  - [Includes in EJS](#includes-in-ejs)
- [📡 HTTP Request Methods](#-http-request-methods)
  - [GET vs POST](#get-vs-post)
  - [Handling POST Requests](#handling-post-requests)

---

## 🌟 What is Node.js?

<div align="center">
  
  ***"Node.js is JavaScript that runs outside the browser"***

</div>

Node.js is a <span style="color:#2E86C1">**JavaScript runtime environment**</span> that allows you to run JavaScript code outside of a web browser. It's important to understand that Node.js is:

- ✅ **NOT** a programming language (<span style="color:#E67E22">JavaScript is the language</span>)
- ✅ **NOT** a framework or library
- ✅ **Designed** for <span style="color:#27AE60">server-side programming</span>
- ✅ <span style="color:#8E44AD">**Event-driven**</span> and <span style="color:#8E44AD">**non-blocking**</span> (asynchronous)

> **Why is Node.js revolutionary?** Before Node.js, JavaScript was confined to web browsers. Node.js brought JavaScript to servers, allowing developers to use the same language for both <span style="color:#E74C3C">frontend</span> and <span style="color:#2ECC71">backend</span> development.

Node.js enables developers to use JavaScript for creating server-side applications, which was traditionally done with languages like PHP, Python, or Java.

---

## 💻 Node.js REPL

REPL stands for <span style="color:#3498DB">**Read, Evaluate, Print, Loop**</span>. It's an interactive programming environment that allows you to:

1. <span style="color:#E74C3C">**Read**</span>: Read user input
2. <span style="color:#9B59B6">**Evaluate**</span>: Evaluate the input
3. <span style="color:#2ECC71">**Print**</span>: Print the result
4. <span style="color:#F39C12">**Loop**</span>: Repeat the process

### Accessing the REPL

```bash
# Just type 'node' in your terminal to enter REPL
node
```

### Useful REPL Commands

| Command | Description |
|---------|-------------|
| `.help` | Shows all available commands |
| `.exit` | Exits the REPL |
| `global` | Displays the <span style="color:#E67E22">global object</span> (similar to `window` in browsers) |

### Creating and Running Node.js Files

```bash
# Create a new JavaScript file
touch app.js

# Run the file
node app.js
```

---

## 🔄 Working with the Process Object

The <span style="color:#3498DB">`process`</span> object is a <span style="color:#E74C3C">global object</span> in Node.js that provides information about the current Node.js process and control over it.

### process.argv

The <span style="color:#9B59B6">`process.argv`</span> property returns an array containing the command-line arguments passed when the Node.js process was launched:

```javascript
// In script.js
console.log(process.argv);

// Running: node script.js hello world
// Output: [ '/path/to/node', '/path/to/script.js', 'hello', 'world' ]
```

### 🔍 Breakdown:
- `process.argv[0]`: The path to the Node.js <span style="color:#F39C12">executable</span>
- `process.argv[1]`: The path to the JavaScript <span style="color:#F39C12">file being executed</span>
- Additional arguments start from <span style="color:#2ECC71">`process.argv[2]`</span>

### Working Directory

```javascript
console.log(process.cwd()); // Shows the current working directory
```

---

## 📦 Module System in Node.js

Node.js uses a <span style="color:#2ECC71">module system</span> to organize code into reusable pieces. This helps with code organization and maintenance.

### Exporting from Files

Two key concepts in the Node.js module system:

1. <span style="color:#E74C3C">`module.exports`</span> - An object used to export functions, objects, or values from a module
2. <span style="color:#3498DB">`require()`</span> - A function used to import modules

#### Method 1: Exporting an Object

```javascript
// In math.js
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const g = 9.8;
const PI = 3.1416;

let obj = {
    sum: sum,
    sub: sub,
    mul: mul,
    div: div,
    g: g,
    PI: PI
};

module.exports = obj;

// In script.js
const math = require("./math.js");
console.log(math.sum(102, 203)); // 305
console.log(math.PI); // 3.1416
```

#### Method 2: <span style="color:#9B59B6">Direct Object Export</span>

```javascript
// In math.js
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const g = 9.8;
const PI = 3.1416;

module.exports = {
    sum,   // Same as sum: sum (shorthand syntax)
    sub,
    mul,
    div,
    g,
    PI
};
```

#### Method 3: <span style="color:#F39C12">Individual Property Exports</span>

```javascript
// In math.js
module.exports.sum = (a, b) => a + b;
module.exports.sub = (a, b) => a - b;
module.exports.mul = (a, b) => a * b;
module.exports.div = (a, b) => a / b;
module.exports.g = 9.8;
module.exports.PI = 3.1416;

// You can also use the shorthand 'exports' (but be careful with direct assignment)
exports.sum = (a, b) => a + b; // This works
// exports = { sum } // This doesn't work - breaks the reference to module.exports
```

### Exporting from Directories

When organizing code in directories, you can use an `index.js` file as the entry point for that directory:

```
Fruits/
  ├── apple.js
  ├── orange.js
  ├── banana.js
  └── index.js
```

```javascript
// In apple.js
module.exports = {
    name: "apple",
    color: "red"
};

// In orange.js
module.exports = {
    name: "orange",
    color: "orange"
};

// In banana.js
module.exports = {
    name: "banana",
    color: "yellow"
};

// In index.js (entry point for the directory)
const apple = require("./apple.js");
const orange = require("./orange.js");
const banana = require("./banana.js");

module.exports = {
    apple,
    orange,
    banana
};

// In script.js (outside the Fruits directory)
const fruits = require("./Fruits"); // No need to specify index.js
console.log(fruits.banana); // { name: 'banana', color: 'yellow' }
```

---

## 📋 NPM (Node Package Manager)

<div align="center">
  
  ![NPM Logo](https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.svg)

</div>

<span style="color:#E74C3C">NPM</span> is the default package manager for Node.js. It allows you to:

- 📥 <span style="color:#3498DB">Install and manage</span> third-party packages
- 📤 <span style="color:#9B59B6">Share</span> your own packages
- 📊 <span style="color:#2ECC71">Manage</span> project dependencies

### Installing Packages

You can find packages at [npmjs.com](https://www.npmjs.com/).

```bash
# Standard installation
npm install <package-name>

# Or using the shorthand
npm i <package-name>

# Example with a popular package
npm install figlet
```

### Understanding Package Files

After installing a package, three important elements are created:

#### 1. <span style="color:#E67E22">**node_modules/**</span> directory:
- Contains all the installed packages and their dependencies
- Should <span style="color:#E74C3C">not be committed</span> to version control (add to .gitignore)

#### 2. <span style="color:#3498DB">**package-lock.json**</span> file:
- Records the <span style="color:#9B59B6">exact version</span> of each installed package
- Ensures <span style="color:#2ECC71">consistent installations</span> across environments
- <span style="color:#2ECC71">Should be committed</span> to version control

#### 3. <span style="color:#F39C12">**package.json**</span> file:
- Contains metadata about your project (name, version, dependencies)
- Allows others to install all dependencies with a single command
- Can be created manually or with `npm init`

> 💡 **Pro Tip**: If you delete `node_modules/`, you can restore all dependencies by running `npm install`

### Creating a package.json

```bash
# Interactive creation with prompts
npm init

# Quick creation with defaults
npm init -y
```

### Local vs Global Installation

**Local Installation** (default):
```bash
npm install <package-name>
```
- Installs the package in the current project directory
- Adds it to `package.json` dependencies
- Generally preferred for project dependencies

**Global Installation**:
```bash
npm install -g <package-name>
```
- Installs the package globally (accessible from any directory)
- Useful for command-line tools
- Often requires administrator privileges
- May need to run `npm link <package-name>` after installation

### Require vs Import

Node.js supports two ways to include modules:

#### <span style="color:#E74C3C">CommonJS</span> (Traditional method):

```javascript
const math = require('./math.js');
```

#### <span style="color:#2ECC71">ES Modules</span> (Modern method):

```javascript
import { sum, PI } from './math.js';
```

To use `import`, you need to:
1. Add <span style="color:#3498DB">`"type": "module"`</span> to your package.json, OR
2. Use the <span style="color:#9B59B6">`.mjs`</span> extension for your files

#### Benefits of `import`:
- Can <span style="color:#F39C12">selectively import</span> only what you need (better for memory)
- Supports <span style="color:#E67E22">asynchronous loading</span>
- <span style="color:#8E44AD">Statically analyzable</span> (better tooling support)
- Part of the <span style="color:#16A085">ECMAScript standard</span>

---

## 🧩 Libraries vs Frameworks

Understanding the difference helps in choosing the right tools:

### Library vs Framework Comparison

| Feature | Library | Framework |
|---------|---------|-----------|
| **Definition** | Collection of pre-written code for specific tasks | Comprehensive structure for developing applications |
| **Control Flow** | You call the library code when needed | The framework calls your code (inversion of control) |
| **Architecture** | Doesn't enforce specific architecture | Defines the architecture and flow of the application |
| **Learning Curve** | Generally easier to learn | Steeper learning curve |
| **Flexibility** | More flexible | Less flexible but more structured |
| **Examples** | Axios, Lodash, jQuery | Express.js, Angular, React Native |

> 🏠 **Analogy**: A library is like furniture you add to your house; a framework is like the foundation and structure of the house itself.

---

## 🌐 Express.js

<div align="center">
<div style="background-color: black; padding: 30px; text-align: center;">
  <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="Express.js Logo" width="400">
</div>


  
  *A minimal and flexible Node.js web application framework.*
</div>

<span style="color:#3498DB">Express</span> is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Creating a Web API with Express

Four main things Express helps with:
1. <span style="color:#E74C3C">Listening</span> for incoming requests
2. <span style="color:#9B59B6">Parsing</span> requests
3. <span style="color:#2ECC71">Matching</span> responses with routes
4. <span style="color:#F39C12">Sending</span> responses

### Basic setup:

```javascript
// Install Express first: npm install express
const express = require("express");
const app = express();
const port = 3000;

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
```

### Handling Requests

```javascript
app.use((req, res) => {
    console.log("New request received");
    // 'req' contains information about the request
    // 'res' is used to send back a response
});
```

### Sending Responses

Express provides several methods to send responses:

```javascript
// Sending text or HTML
app.use((req, res) => {
    res.send("Hello World!"); // Content-Type: text/html
});

// Sending JSON
app.use((req, res) => {
    res.send({
        name: "apple",
        color: "red"
    }); // Content-Type: application/json
});

// Sending HTML
app.use((req, res) => {
    res.send("<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>");
});
```

### <span style="color:#E67E22">Routing in Express</span>

Routing helps direct requests to specific handlers based on the URL path and HTTP method:

```javascript
// Handling requests to the root path
app.get("/", (req, res) => {
    res.send("This is the root path");
});

// Handling requests to /apple
app.get("/apple", (req, res) => {
    res.send({
        name: "apple",
        color: "red"
    });
});

// Handling requests to /orange
app.get("/orange", (req, res) => {
    res.send({
        name: "orange",
        color: "orange"
    });
});

// Handling 404 (route not found)
app.get("*", (req, res) => {
    res.send("This path is not available");
});

// Handling POST requests
app.post("/", (req, res) => {
    res.send("You sent a POST request to the root path");
});
```

---

## 🔄 Nodemon for Development

<div align="center">
  
  ![Nodemon](https://nodemon.io/nodemon.svg)
  
  *Monitor for any changes in your Node.js application and automatically restart the server.*
</div>

Nodemon is a utility that monitors for changes in your source code and automatically restarts your server:

```bash
# Install Nodemon (preferably globally)
npm install -g nodemon

# Start your app with Nodemon
nodemon index.js
```

> 💡 **Developer Tip**: With Nodemon, you don't need to manually restart the server after code changes, making development much faster.

### Adding Nodemon to package.json scripts

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

Then you can run:

```bash
npm run dev
```

---

## 🔍 Working with Request Parameters

### Path Parameters

Path parameters allow you to capture values from the URL path:

```javascript
// Route with path parameter
app.get("/user/:username", (req, res) => {
    let { username } = req.params;
    res.send(`This is the profile of ${username}`);
});

// Multiple path parameters
app.get("/user/:username/:postId", (req, res) => {
    let { username, postId } = req.params;
    res.send(`Viewing post ${postId} by ${username}`);
});
```

Example URLs:
- `/user/john` → "This is the profile of john"
- `/user/sarah/42` → "Viewing post 42 by sarah"

### Query Strings

Query strings are used to send additional data in the URL:

```javascript
app.get("/search", (req, res) => {
    let { q } = req.query;
    
    if (!q) {
        return res.send("Please provide a search query");
    }
    
    res.send(`Search results for: ${q}`);
});
```

Example URLs:
- `/search?q=nodejs` → "Search results for: nodejs"
- `/search?q=express&limit=10` → "Search results for: express" (can access limit with `req.query.limit`)

---

## 🖌️ EJS Templating

<div align="center">

  ![EJS](https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_ejs_icon_130626.png)
  
  *Embedded JavaScript templates*
</div>

<span style="color:#E74C3C">EJS</span> (<span style="color:#E67E22">Embedded JavaScript</span>) is a templating language that lets you generate HTML with plain JavaScript.

### Setting Up EJS

```bash
# Install EJS
npm install ejs
```

Configure Express to use EJS:

```javascript
const express = require("express");
const app = express();
const path = require("path");

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the directory for views (important if running server from different directory)
app.set("views", path.join(__dirname, "/views"));

// Render an EJS template
app.get("/", (req, res) => {
    res.render("home"); // Looks for home.ejs in the views folder
});
```

### Directory Structure
```
project/
  ├── views/
  │     ├── home.ejs
  │     └── about.ejs
  ├── index.js
  ├── package.json
  └── node_modules/
```

### <span style="color:#3498DB">Interpolation Syntax</span>

EJS uses tags for different operations:

| Tag | Purpose | Example |
|-----|---------|---------|
| <span style="color:#2ECC71">`<%= %>`</span> | Outputs the value (HTML escaped) | `<%= username %>` |
| <span style="color:#9B59B6">`<%- %>`</span> | Outputs the unescaped value (can include HTML) | `<%- htmlContent %>` |
| <span style="color:#F39C12">`<% %>`</span> | Scriptlet tag for control flow (no output) | `<% if(loggedIn) { %>` |

Examples:
```ejs
<h1>Hello, <%= username %></h1>
<p><%= 1 + 2 %></p> <!-- Outputs: 3 -->
<p><%= "Hello World".toUpperCase() %></p> <!-- Outputs: HELLO WORLD -->
```

### Passing Data to EJS Templates

```javascript
app.get("/dice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("dice", { diceValue });
});
```

In dice.ejs:
```ejs
<h2>You rolled: <%= diceValue %></h2>
```

### Conditional Statements in EJS

```ejs
<h2>You rolled: <%= diceValue %></h2>

<% if (diceValue === 6) { %>
    <h3>Congratulations! You rolled a 6!</h3>
<% } else { %>
    <p>Try again for a 6</p>
<% } %>
```

### Loops in EJS

```javascript
app.get("/users", (req, res) => {
    let users = ["Alice", "Bob", "Charlie", "David"];
    res.render("users", { users });
});
```

In users.ejs:
```ejs
<h1>User List</h1>
<ul>
    <% for (let user of users) { %>
        <li><%= user %></li>
    <% } %>
</ul>
```

### Working with JSON Data

```javascript
// In index.js
app.get("/profile/:username", (req, res) => {
    let { username } = req.params;
    // Load data from a JSON file
    let userData = require("./data.json");
    let user = userData[username];
    
    if (user) {
        res.render("profile", { user });
    } else {
        res.send("User not found");
    }
});
```

In data.json:
```json
{
    "john": {
        "username": "john",
        "followers": ["alice", "bob"],
        "posts": 25
    },
    "alice": {
        "username": "alice",
        "followers": ["john", "charlie"],
        "posts": 42
    }
}
```

In profile.ejs:
```ejs
<h1>Profile: <%= user.username %></h1>
<p>Posts: <%= user.posts %></p>
<h2>Followers:</h2>
<ul>
    <% for (let follower of user.followers) { %>
        <li><%= follower %></li>
    <% } %>
</ul>
```

### Includes in EJS

EJS includes allow you to reuse template parts:

```
views/
  ├── partials/
  │     ├── header.ejs
  │     ├── navbar.ejs
  │     └── footer.ejs
  └── home.ejs
```

In home.ejs:
```ejs
<%- include("partials/header") %>
<h1>Welcome to My Website</h1>
<p>This is the home page</p>
<%- include("partials/footer") %>
```

---

## 📡 HTTP Request Methods

HTTP defines several request methods that indicate the desired action for a resource.

### GET vs POST

#### Comparison Table

| Feature | GET | POST |
|---------|-----|------|
| **Purpose** | Retrieve data | Submit data |
| **Data Location** | Query strings in URL | Request body |
| **Data Capacity** | Limited (URL length restrictions) | Large amounts of data |
| **Security** | Data visible in URL (not secure) | Data not visible in URL (more secure) |
| **Idempotence** | Idempotent (multiple identical requests = same effect) | Not idempotent (multiple requests may have different effects) |
| **Bookmarkable** | Yes | No |
| **Cached** | Can be cached | Not typically cached |
| **Browser History** | Parameters saved in browser history | Parameters not saved in browser history |

### Handling POST Requests

To handle POST requests in Express:

1. Configure Express to parse request body:
```javascript
// Parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(express.json());
```

2. Create a route to handle the POST request:
```javascript
app.post("/register", (req, res) => {
    let { username, password } = req.body;
    console.log(`User registered: ${username}`);
    res.send(`Registration successful! Welcome, ${username}!`);
});
```

3. Create a form in HTML:
```html
<form method="post" action="http://localhost:3000/register">
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit">Register</button>
</form>
```

When the form is submitted, Express will parse the form data and make it available in `req.body`.

---

<div align="center">

## 🚀 Happy Coding!

*Made with ❤️ by [Your Name]*

*⭐ Star this repository if you found it helpful!*

</div>
