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
