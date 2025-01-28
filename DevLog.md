# DevLog

## 2025/1/27 Basic JavaScript Libiary

### Create The JavaScript Library
1. Start by creating a new JavaScript file, let's call it `portfolio-lib.js`. This will be the core of your library.
2. Define your library using an Immediately Invoked Function Expression (IIFE) to avoid polluting the global scope:

```javascript
const PortfolioLib = (function() {
  // Library code goes here
  return {
    // Public methods and properties
  };
})();
```

3. Implement key functonalities within your library
```javascript
const PortfolioLib = (function() {
  function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
    return element;
  }

  function render(component, container) {
    container.appendChild(component);
  }

  return {
    createElement,
    render
  };
})();
```

### Building the Portfolio Website
1. Create an `index.html` file:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="portfolio-lib.js"></script>
    <script src="app.js"></script>
</body>
</html>
```

2. Create an `app.js` file to bild your website structure:
```javascript
const { createElement, render } = PortfolioLib;

function Header() {
  return createElement('header', {}, [
    createElement('h1', {}, ['My Portfolio']),
    createElement('nav', {}, [
      createElement('a', { href: '#about' }, ['About']),
      createElement('a', { href: '#projects' }, ['Projects']),
      createElement('a', { href: '#contact' }, ['Contact'])
    ])
  ]);
}

function About() {
  return createElement('section', { id: 'about' }, [
    createElement('h2', {}, ['About Me']),
    createElement('p', {}, ['I am a web developer passionate about creating amazing websites.'])
  ]);
}

function Projects() {
  return createElement('section', { id: 'projects' }, [
    createElement('h2', {}, ['My Projects']),
    createElement('ul', {}, [
      createElement('li', {}, ['Project 1']),
      createElement('li', {}, ['Project 2']),
      createElement('li', {}, ['Project 3'])
    ])
  ]);
}

function Contact() {
  return createElement('section', { id: 'contact' }, [
    createElement('h2', {}, ['Contact Me']),
    createElement('form', {}, [
      createElement('input', { type: 'text', placeholder: 'Name' }),
      createElement('input', { type: 'email', placeholder: 'Email' }),
      createElement('textarea', { placeholder: 'Message' }),
      createElement('button', { type: 'submit' }, ['Send'])
    ])
  ]);
}

function App() {
  return createElement('div', {}, [
    Header(),
    About(),
    Projects(),
    Contact()
  ]);
}

render(App(), document.getElementById('root'));
```

3. Create a `style.css` file for styling:
```css
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

nav a {
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;
}

section {
  padding: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}

input, textarea, button {
  margin-bottom: 1rem;
  padding: 0.5rem;
}
```

### Project Structure
```
portfolio-project/
│
├── src/
│   ├── lib/
│   │   └── portfolio-lib.js
│   ├── components/
│   │   ├── Header.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── styles/
│   │   └── style.css
│   └── app.js
├── index.html
└── README.md
```

