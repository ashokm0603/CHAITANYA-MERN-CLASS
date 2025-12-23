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

