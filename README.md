
<h1 align="right">Date : 22-12-2025</h1>

#  HTML & JavaScript – Basics Overview

---

##  HTML (HyperText Markup Language)

### What is HTML?
- HTML stands for **HyperText Markup Language**
- Used to **build web pages**
- HTML consists of a **series of elements**
- Current version: **HTML5**
- Introduced in **1991**
- Invented by **Tim Berners-Lee**

---

##  HTML Tags

### What are Tags?
- Tags are **predefined keywords**
- Enclosed within **angle brackets `< >`**
- Most tags have **opening and closing** forms

---

##  Types of HTML Tags 👍

### 1️ Paired Tags
Paired tags contain **both opening and closing tags**.

#### a) Heading Tags
```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

#### b) Formatting Tags
```html
<b>Bold</b>
<strong>Strong</strong>
<i>Italic</i>
<em>Emphasis</em>
<sub>Subscript</sub>
<sup>Superscript</sup>
<mark>Marked</mark>
<strike>Strike</strike>
<u>Underline</u>
```

#### c) Other Tags
```html
<div></div>
<span></span>
<p></p>
```

---

### 2️ Unpaired / Self-Closing Tags
```html
<br>
<hr>
<img>
<input>
<link>
<meta>
```

---

##  Media Tags (HTML5)

Media tags are used to **display multimedia content** like images, audio, and video.

### Common Media Tags:
```html
<img src="image.jpg" alt="sample image">
<audio controls>
  <source src="audio.mp3">
</audio>

<video controls width="300">
  <source src="video.mp4">
</video>
```

### Uses:
- Display images
- Play audio files
- Play videos on web pages

---

##  Table Tags

Tables are used to **display data in rows and columns**.

### Common Table Tags:
- `<table>`
- `<tr>` – table row
- `<th>` – table heading
- `<td>` – table data

Example:
```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Ashoka</td>
    <td>22</td>
  </tr>
</table>
```

### Uses:
- Display reports
- Student marks
- Tabular data

---

##  List Tags

Lists are used to **group related items**.

### Types of Lists:

#### 1️ Ordered List
```html
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
</ol>
```

#### 2️ Unordered List
```html
<ul>
  <li>React</li>
  <li>Node</li>
  <li>MongoDB</li>
</ul>
```

#### 3️ Description List
```html
<dl>
  <dt>HTML</dt>
  <dd>Markup Language</dd>
</dl>
```

### Uses:
- Navigation menus
- Display items
- Content organization

---

##  Semantic Tags (HTML5)

Semantic tags clearly describe **meaning of content** to browser and developers.

### Common Semantic Tags:
```html
<header></header>
<nav></nav>
<section></section>
<article></article>
<aside></aside>
<footer></footer>
```

### Uses:
- Improves SEO
- Better readability
- Accessibility support
- Structured layout

---


#  JavaScript (Overview)

### What is JavaScript?
- JavaScript is a **scripting & programming language**
- Used to build **dynamic web pages**
- Supports **DOM manipulation**
- Fetch data from **APIs**
- Single-threaded with **single call stack**

---


##  Methods to Apply JavaScript

### 1️ Internal JavaScript
```html
<script>
  console.log("Hello JavaScript");
</script>
```

### 2️ External JavaScript
```html
<script src="script.js"></script>
```

---

##  Variables in JavaScript

### What is a Variable?
- Variable is a **named memory location**
- Used to store data or information
- Value can change **multiple times during execution**

### Variable Keywords 👍
- `let`
- `var`
- `const`

Example:
```js
let name = "Ashoka";
const age = 22;
```

---

##  Data Types in JavaScript
(`typeof` is used to check datatype)

### 1️ Primitive Data Types  
*(Mutable in nature / object reference)*

- number
- string
- boolean
- null
- undefined
- bigint

---

### 2️ Non-Primitive Data Types  
*(Immutable in nature / object de-reference)*

- Arrays
- Functions
- Objects

---

##  Functions in JavaScript

Functions are **blocks of code** that execute when called.

### Types of Functions:
1. Named Function  
2. Anonymous Function  
3. First-Class Function  
4. Function Expression  
5. Immediately Invoked Function (IIFE)  
6. Arrow Function (ES6)  
7. Nested Function  
8. Higher Order Function  
9. Callback Function  
10. Generator Function  

Example:
```js
function greet() {
  console.log("Hello");
}
```

---

##  Loops in JavaScript

Loops are used to **repeat execution** of a block of code.

### Types of Loops:
- for loop
- while loop
- do-while loop
- for-in
- for-of
- forEach

Example:
```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---


##  JavaScript – DOM, BOM & Web Storage Guide

---

[Click here to view DOM in JavaScript Diagram](https://viewer.diagrams.net/index.html?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=DOM%20IN%20JAVASCRIPT.drawio&dark=1#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1wX_N7YJu17-dNlZGfupcKyvlNTD-s39u%26export%3Ddownload#%7B%22pageId%22%3A%22w0W7gVwtxNn_7I0n7kZZ%22%7D)

---

##  DOM (Document Object Model)

The **DOM** represents the HTML document as a **tree structure** where JavaScript can access and manipulate elements.

### Uses of DOM:
- Change HTML content
- Modify styles
- Handle user events
- Create dynamic web pages

---

##  DOM Selectors

DOM selectors are used to **select HTML elements**.

### Common DOM Selectors:
```js
document.getElementById("id");
document.getElementsByClassName("className");
document.getElementsByTagName("tagName");
document.querySelector(".class");
document.querySelectorAll("div");
```

---

##  DOM Methods

Used to **create, update, delete HTML elements**.

### Common DOM Methods:
```js
document.createElement("div");
document.appendChild(element);
document.removeChild(element);
document.replaceChild(newNode, oldNode);
element.setAttribute("class", "box");
element.getAttribute("id");
```

---

##  DOM Events

Events are actions performed by the **user or browser**.

### Common DOM Events:
- click
- mouseover
- mouseout
- keyup
- keydown
- submit
- change
- load

### Event Example:
```js
document.getElementById("btn").addEventListener("click", () => {
  alert("Button Clicked!");
});
```

---

##  BOM (Browser Object Model)

BOM allows JavaScript to **interact with the browser**.

### BOM Objects:
- window
- screen
- location
- history
- navigator

---

##  Window Object

The `window` object is the **top-level object** in BOM.

### Common Window Methods:
```js
window.alert("Hello");
window.confirm("Are you sure?");
window.prompt("Enter name");
```

### Window Properties:
```js
window.innerWidth;
window.innerHeight;
```

---

##  Local Storage

Local Storage is used to **store data permanently** in the browser.

### Features:
- Data persists even after browser close
- Stores data as key-value pairs

### Example:
```js
localStorage.setItem("username", "Ashoka");
localStorage.getItem("username");
localStorage.removeItem("username");
localStorage.clear();
```

---

##  Session Storage

Session Storage stores data **temporarily**.

### Features:
- Data cleared when tab is closed
- Used for session-based data

### Example:
```js
sessionStorage.setItem("token", "abc123");
sessionStorage.getItem("token");
sessionStorage.removeItem("token");
sessionStorage.clear();
```

---

##  LocalStorage vs SessionStorage

| Feature | localStorage | sessionStorage |
|------|-------------|----------------|
| Persistence | Permanent | Until tab closes |
| Storage Limit | ~5MB | ~5MB |
| Scope | All tabs | Single tab |


---


<h1 align="right">Date : 23-12-2025</h1>

#  React – Basic Concepts & Overview

##  What is React?
React is a **small JavaScript library** used to build **fast and interactive user interfaces**.

### Key Features:
- Component-based architecture  
- Uses Virtual DOM  
- Used to build SPA (Single Page Applications)

---

##  Creating a React Application

### 1️ Using CLI (Command Line Interface)

**Create React App**
```
npx create-react-app app_name
```

**React with Vite (Recommended)**
```
npm create vite@latest
```

---

### 2️ Using CDN
- Used for small demos
- Not recommended for large applications

---

##  Components in React

Components are the **smallest reusable UI blocks**.

### Types of Components

#### 1️ Class-Based Components (CBC)
- Declared using `class`
- Stateful
- Uses `this`, `super()`, `render()`
- Supports lifecycle methods

#### 2️ Function-Based Components (FBC)
- Declared using functions or arrow functions
- Initially stateless
- No `this`, `super`, `render()`

---

##  JSX (JavaScript XML)
- File name starts with uppercase
- Supports JavaScript expressions `{}`
- Allows HTML + JS together
- Supports fragments `<> </>`
- Must return a single parent element

---

##  States
- Used to store data
- State is mutable
- Updating state re-renders UI

---

##  Hooks (FBC State Management)
- Introduced in React 16.8
- Makes FBC stateful
- Hooks work only in FBC

### Common Hooks:
- useState()
- useEffect()
- useContext()
- useMemo()
- useNavigate()

---

##  Props
- Used to pass data from parent to child
- Immutable
- Supports unidirectional data flow

Example:
```js
const Child = ({ name }) => {
  return <h2>Hello {name}</h2>;
};

const Parent = () => {
  return <Child name="Ashoka" />;
};
```

---

##  Props Drilling

### What is Props Drilling?
Props drilling occurs when **data is passed from a parent component to deeply nested child components** through multiple intermediate components, even if those components don’t need the data.

### Example of Props Drilling

```js
const ComponentC = ({ user }) => {
  return <h3>User Name: {user}</h3>;
};

const ComponentB = ({ user }) => {
  return <ComponentC user={user} />;
};

const ComponentA = () => {
  const user = "Ashoka";
  return <ComponentB user={user} />;
};
```

### Drawback:
- Difficult to manage
- Code becomes complex
- Unnecessary props passing

### Solution:
- Use **Context API**
- Use **Redux / Zustand** for large applications

---

##  React Router

React Router is used for **SPA navigation without page reload**.

### Installation
```
npm install react-router-dom
```

### Basic Routing Example
```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Navigation using Link
```js
import { Link } from "react-router-dom";

<Link to="/">Home</Link>
<Link to="/about">About</Link>
```

### Navigation using useNavigate()
```js
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/dashboard")}>
      Go to Dashboard
    </button>
  );
};
```

---

##  Toast Notifications (React Toastify)

Toast messages are used to show **success, error, and warning alerts**.

### Installation
```
npm install react-toastify
```

### Setup Toast Container
```js
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
    </>
  );
}
```

### Toast Example
```js
import { toast } from "react-toastify";

const notify = () => {
  toast.success("Login Successful!");
  toast.error("Something went wrong!");
};
```

```js
<button onClick={notify}>Show Toast</button>
```

---

##  Summary
✔ Fast and scalable  
✔ Component-based  
✔ SPA support  
✔ Props & Props Drilling explained  
✔ React Router navigation  
✔ Toast notifications  

---


<h1 align="right">Date : 23-12-2025</h1>


<h2 >MongoDB </h2>

---

### MongoDB Diagram  
👉 View the full diagram here:  
https://drive.google.com/file/d/1NiojH4OZ0pZ5YRgUSWjCcuhjyehTk6_M/view?usp=sharing

---

##  What is a Database in MongoDB?

A **database** is a container that stores multiple collections.  
It is created automatically when you begin inserting data.

#### Definition:
A database in MongoDB is a logical grouping of collections used to organize data.

#### Create or Switch to a Database

```javascript
use schoolDB;
```

If `schoolDB` does not exist, MongoDB creates it when inserting the first document.

#### Check existing databases

```javascript
show dbs;
```

---

## What is a Collection?

A **collection** is a group of documents inside a database.

### #Definition:
A collection is similar to a table in SQL but does not require a fixed schema.

#### Create a Collection

```javascript
db.createCollection("student_details");
```

View all collections:

```javascript
show collections;
```

---

##  What is a Document?

A **document** is a JSON-like object stored within a collection.

#### Example Document:

```json
{
  "name": "Ravi",
  "email": "ravi@gmail.com",
  "skills": ["Java", "Python"],
  "address": { "city": "Vijayawada", "state": "AP" }
}
```

---

## MongoDB Data Types

| Type | Example |
|------|---------|
| String | "Ramu" |
| Number | 25 |
| Null | null |
| Array | ["Java", "Node"] |
| Object | {city: "Hyd"} |
| Boolean | true |
| Function | ()=>{} |
| ISOTime | ISODate() |
| Date | new Date() |

---

## CRUD Operations in MongoDB

CRUD = Create, Read, Update, Delete

---

## CREATE – Insert Data

### insertOne()

**Definition:** Inserts a single document into the collection.

```javascript
db.student_details.insertOne({
    name: "Ravi",
    email: "ravi@gmail.com",
    phone: "974561238"
});
```

---

### insertMany()

**Definition:** Inserts multiple documents at once.

```javascript
db.student_details.insertMany([
    {name: "ramu", email: "ramu@gmail.com"},
    {name: "rani", email: "rani@gmail.com"},
    {name: "admin", email: "admin@gmail.com"}
]);
```

---

## READ – Find Data

### findOne()

**Definition:** Returns the first matching document.

```javascript
db.student_details.findOne();
```

#### Filter:
```javascript
db.student_details.findOne({ name: "Ravi" });
```

#### Projection (field selection):

**Definition:**  
Projection is used to include (1) or exclude (0) specific fields.

```javascript
db.student_details.findOne(
    { name: "Ravi" },
    { _id: 0, name: 1 }
);
```

---

### find()

**Definition:** Returns all matching documents.

```javascript
db.student_details.find();
```

Filter example:

```javascript
db.student_details.find({ name: "Ravi" });
```

Multiple conditions:

```javascript
db.student_details.find({ name: "Ravi", fee: 90000 });
```

Projection:

```javascript
db.student_details.find({}, { _id: 0, name: 1 });
```

---

## DELETE – Remove Data

### deleteOne()

**Definition:** Deletes the first document matching the filter.

```javascript
db.student_details.deleteOne({ name: "Ravi" });
```

---

### deleteMany()

**Definition:** Deletes all documents matching the filter.

```javascript
db.student_details.deleteMany({ name: "Ravi" });
```

---

## UPDATE – Modify Data

#### Update Operators:
- `$set` → Modify or add fields  
- `$unset` → Remove fields  
- `$push` → Add value to an array  
- `$pop` → Remove element from array  
- `$inc` → Increase or decrease numeric value  

---

### updateOne()

**Definition:** Updates the first document matching the filter.

#### Example using $set:

```javascript
db.student_details.updateOne(
    { name: "ramu" },
    { $set: { phone: "9874561230", collegename: "KEC", branch: "CSE" } }
);
```

#### Example using $unset:

```javascript
db.student_details.updateOne(
    { name: "Ramu Kumar" },
    { $unset: { phone: "" } }
);
```

---

### updateMany()

**Definition:** Updates all documents matching the filter.

Increase fee:

```javascript
db.student_details.updateMany(
    { fee: 90000 },
    { $inc: { fee: 30000 } }
);
```

Decrease fee:

```javascript
db.student_details.updateMany(
    { fee: 90000 },
    { $inc: { fee: -20000 } }
);
```

Push skills into array:

```javascript
db.student_details.updateMany(
    { name: "Ramu Kumar" },
    { $push: { skills: ["java", "python", "ruby"] } }
);
```

---

#### $pop Example

**Definition:** Removes first (-1) or last (1) element from an array.

Remove last skill:

```javascript
db.student_details.updateOne(
    { name: "Ramu Kumar" },
    { $pop: { skills: 1 } }
);
```

Remove first skill:

```javascript
db.student_details.updateOne(
    { name: "Ramu Kumar" },
    { $pop: { skills: -1 } }
);
```

---

<h2 align="center">End of MongoDB Notes</h2>

