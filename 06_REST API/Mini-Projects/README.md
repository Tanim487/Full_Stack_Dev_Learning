# Posts from Paradis - REST API Project

<div align="center">

<img src="https://cdn-icons-png.flaticon.com/512/2913/2913461.png" alt="REST API Icon" width="60"/>


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![made-with-Node.js](https://img.shields.io/badge/Made%20with-Node.js-1f425f.svg)](https://nodejs.org/)
[![made-with-Express](https://img.shields.io/badge/Made%20with-Express.js-000000.svg)](https://expressjs.com/)
[![made-with-EJS](https://img.shields.io/badge/Template%20Engine-EJS-90EE90.svg)](https://ejs.co/)

_A full-featured REST API application demonstrating CRUD operations with Express.js and EJS templating_

[Live Demo](#getting-started) • [API Documentation](#api-endpoints) • [Screenshots](#project-screenshots)
</div>

## 📋 Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Project Screenshots](#project-screenshots)
- [Learning Objectives](#learning-objectives)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About The Project

> **Posts from Paradis** is a REST API application inspired by Attack on Titan characters. This project demonstrates the implementation of a complete CRUD (Create, Read, Update, Delete) web application using Node.js, Express.js, and EJS templating engine.

The application allows users to:
* Create new posts with username and content
* View all posts in a clean, organized interface
* Read individual posts with detailed view
* Edit existing posts with form validation
* Delete posts with confirmation
* Navigate through a responsive web interface

This project is perfect for:
* Learning REST API development with Express.js
* Understanding server-side templating with EJS
* Practicing CRUD operations implementation
* Getting familiar with HTTP methods (GET, POST, PATCH, DELETE)
* Learning middleware usage and form handling

### Built With

This project was developed using modern web technologies:

* **Node.js** - JavaScript runtime environment
* **Express.js** - Fast, unopinionated web framework
* **EJS** - Embedded JavaScript templating engine
* **UUID** - For generating unique post identifiers
* **Method-Override** - For supporting HTTP verbs like PUT and DELETE
* **HTML5 & CSS3** - For frontend structure and styling

## Features

✨ **Core Functionality:**
- Full CRUD operations (Create, Read, Update, Delete)
- RESTful API endpoints following standard conventions
- Server-side rendering with EJS templates
- Form handling with Express middleware
- UUID-based unique post identification
- Method override for HTTP verbs support

🎯 **User Experience:**
- Clean, intuitive user interface
- Responsive design for various screen sizes
- Easy navigation between different views
- Form validation and error handling
- Seamless post management workflow

🛠️ **Technical Features:**
- Modular route structure
- Middleware integration
- Template inheritance with EJS
- In-memory data storage (development mode)
- Express.js best practices implementation

## Project Structure

```
post handling project/
├── views/                          # EJS template files
│   ├── index.ejs                  # Main posts listing page
│   ├── form.ejs                   # New post creation form
│   ├── view.ejs                   # Individual post view
│   └── edit.ejs                   # Post editing form
├── index.js                       # Main server file with routes
├── package.json                   # Project dependencies and scripts
└── README.md                      # Project documentation
```

## Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

Make sure you have the following installed:
* **Node.js** (version 14.x or higher)
  ```sh
  node --version
  ```
* **npm** (comes with Node.js)
  ```sh
  npm --version
  ```

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/posts-from-paradis.git
   ```

2. **Navigate to the project directory**
   ```sh
   cd posts-from-paradis
   ```

3. **Install dependencies**
   ```sh
   npm install
   ```

4. **Start the development server**
   ```sh
   node index.js
   ```

5. **Open your browser and visit**
   ```
   http://localhost:8000/posts
   ```

The application will be running on port 8000. You should see the main posts page with some pre-loaded Attack on Titan character quotes!

## Usage

### API Endpoints

The application provides the following RESTful endpoints:

| Method | Endpoint | Description | View Template |
|--------|----------|-------------|---------------|
| `GET` | `/posts` | Display all posts | `index.ejs` |
| `GET` | `/posts/new` | Show form to create new post | `form.ejs` |
| `POST` | `/posts` | Create a new post | Redirect to `/posts` |
| `GET` | `/posts/:id` | Display specific post | `view.ejs` |
| `GET` | `/posts/:id/edit` | Show form to edit post | `edit.ejs` |
| `PATCH` | `/posts/:id` | Update specific post | Redirect to `/posts` |
| `DELETE` | `/posts/:id` | Delete specific post | Redirect to `/posts` |

### Project Screenshots

<div align="center">

| Main Posts Page | Individual Post View | Edit Post Form |
|-----------------|---------------------|----------------|
| ![Main Page](https://raw.githubusercontent.com/Tanim487/Full_Stack_Dev_Learning/main/06_REST%20API/Mini-Projects/screenshots/000.png) | ![Post View](https://raw.githubusercontent.com/Tanim487/Full_Stack_Dev_Learning/main/06_REST%20API/Mini-Projects/screenshots/001.png)  | ![Edit Form](https://raw.githubusercontent.com/Tanim487/Full_Stack_Dev_Learning/main/06_REST%20API/Mini-Projects/screenshots/002.png)  |
| View all posts with actions | Detailed post view | Edit existing posts |

</div>

### Sample Data

The application comes pre-loaded with inspiring quotes from Attack on Titan characters:

- **Eren Yeager**: Motivational quotes about fighting and winning
- **Mikasa Ackerman**: Philosophical thoughts about the world
- **Armin Arlert**: Deep insights about human nature and change
- **Levi Ackerman**: Practical wisdom about decision making

## Learning Objectives

This project demonstrates key concepts in web development:

### 🚀 **Backend Development**
1. **Express.js Framework**: Setting up servers, routing, and middleware
2. **RESTful API Design**: Following REST conventions for web services
3. **Template Engines**: Server-side rendering with EJS
4. **HTTP Methods**: Implementing GET, POST, PATCH, and DELETE operations
5. **Form Handling**: Processing form data and file uploads
6. **URL Parameters**: Dynamic routing with Express parameters

### 🎨 **Frontend Integration**
1. **Server-Side Rendering**: Generating HTML on the server
2. **Form Design**: Creating user-friendly forms for data input
3. **Template Inheritance**: Reusing code with EJS partials
4. **Method Override**: Supporting PUT/DELETE in HTML forms
5. **Navigation Flow**: Creating intuitive user journeys

### 🔧 **Development Tools**
1. **Package Management**: Using npm for dependency management
2. **Middleware**: Implementing Express middleware for various purposes
3. **UUID Generation**: Creating unique identifiers for resources
4. **Development Workflow**: Setting up and maintaining a Node.js project

## Key Code Snippets

### Server Setup
```javascript
const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
```

### CRUD Operations Example
```javascript
// CREATE - Add new post
app.post("/posts", (req, res) => {
    let id = uuidv4();
    let { username, content } = req.body;
    posts.push({id, username, content});
    res.redirect("/posts");
});

// READ - Get specific post
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    const post = posts.find((post) => post.id === id);
    res.render("view.ejs", {post});
});
```

## Contributing

Contributions make the open-source community an amazing place to learn and create. Any contributions you make are **greatly appreciated**.

### How to Contribute:

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Ideas:
- Add user authentication and authorization
- Implement database integration (MongoDB, PostgreSQL)
- Add image upload functionality for posts
- Create API rate limiting and security measures
- Implement search and filtering features
- Add pagination for large datasets
- Create unit and integration tests
- Improve UI/UX with modern CSS frameworks

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

>📞 [Call Me on +880 1729778210](tel:+8801729778210)

**WhatsApp** - [Message me](https://wa.me/+8801729778210)

**Social** - [LinkedIn](https://www.linkedin.com/in/mtanim487/) - [Facebook](https://www.facebook.com/tanim487)

**Email** - [mtanim23487@gmail.com](mailto:mtanim23487@gmail.com)

**Project Link**: [https://github.com/yourusername/posts-from-paradis](https://github.com/yourusername/posts-from-paradis)

## Acknowledgements

* [Express.js Documentation](https://expressjs.com/) - Fast, unopinionated web framework
* [EJS Templating](https://ejs.co/) - Embedded JavaScript templates
* [Node.js](https://nodejs.org/) - JavaScript runtime environment
* [UUID Package](https://www.npmjs.com/package/uuid) - RFC4122 UUID generation
* [Method Override](https://www.npmjs.com/package/method-override) - HTTP verb support
* [Attack on Titan](https://attackontitan.fandom.com/) - Character inspiration
* [MDN Web Docs](https://developer.mozilla.org/) - Web development resources
* [REST API Tutorial](https://restfulapi.net/) - RESTful web services guide

## Future Enhancements

🔮 **Planned Features:**
- Database integration with MongoDB or PostgreSQL
- User authentication and authorization system
- Real-time updates with WebSocket integration
- API documentation with Swagger/OpenAPI
- Containerization with Docker
- Deployment configuration for cloud platforms
- Advanced search and filtering capabilities
- Image and media upload support

---

<div align="center">
  <p>If you found this project helpful, please consider giving it a star! ⭐</p>
  <p><em>"If you win, you live. If you lose, you die. If you don't fight, you can't win!" - Eren Yeager</em></p>
  <a href="#posts-from-paradis---rest-api-project">🔺 Back to Top</a>
</div>
