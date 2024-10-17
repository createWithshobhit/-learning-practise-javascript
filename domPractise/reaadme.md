Basic DOM Manipulation Tasks
Selecting Elements

Select elements using various methods such as getElementById, getElementsByClassName, getElementsByTagName, and querySelector.
Example:
javascript
Copy code
var element = document.getElementById('myElement');
var elementsByClass = document.getElementsByClassName('myClass');
var firstElement = document.querySelector('.myClass');
Changing Content of Elements

Modify the content of an element using textContent, innerHTML, and value for inputs.
Example:
javascript
Copy code
document.getElementById('myElement').textContent = 'New Text';
document.getElementById('myElement').innerHTML = '<strong>Bold Text</strong>';
document.getElementById('myInput').value = 'New Input Value';
Changing Styles

Manipulate element styles dynamically using the style property.
Example:
javascript
Copy code
document.getElementById('myElement').style.color = 'red';
document.getElementById('myElement').style.fontSize = '20px';
Adding and Removing Classes

Add, remove, or toggle CSS classes using classList.
Example:
javascript
Copy code
var element = document.getElementById('myElement');
element.classList.add('highlight');
element.classList.remove('highlight');
element.classList.toggle('hidden');
Event Handling

Attach events to elements using addEventListener.
Example:
javascript
Copy code
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});
Create and Append Elements

Create new DOM elements and append them to the DOM tree using createElement and appendChild.
Example:
javascript
Copy code
var newDiv = document.createElement('div');
newDiv.textContent = 'Hello World';
document.body.appendChild(newDiv);
Removing Elements

Remove an element from the DOM using remove().
Example:
javascript
Copy code
document.getElementById('myElement').remove();
Intermediate DOM Manipulation Tasks
Manipulating Attributes

Get or set element attributes such as src, href, id, etc., using setAttribute and getAttribute.
Example:
javascript
Copy code
var img = document.getElementById('myImage');
img.setAttribute('src', 'newImage.png');
var imgSrc = img.getAttribute('src');
Traversing the DOM

Navigate through parent, child, and sibling elements.
Example:
javascript
Copy code
var parent = document.getElementById('myElement').parentNode;
var firstChild = document.getElementById('myElement').firstElementChild;
var nextSibling = document.getElementById('myElement').nextElementSibling;
Cloning Elements

Create a copy of an existing DOM element using cloneNode.
Example:
javascript
Copy code
var clone = document.getElementById('myElement').cloneNode(true);
document.body.appendChild(clone);
Insert Elements Before or After Another Element

Use insertBefore and insertAdjacentElement to insert elements in specific positions.
Example:
javascript
Copy code
var newDiv = document.createElement('div');
newDiv.textContent = 'New Div';
var referenceElement = document.getElementById('myElement');
document.body.insertBefore(newDiv, referenceElement); // Insert before

referenceElement.insertAdjacentElement('afterend', newDiv); // Insert after
Form Handling

Manipulate form inputs and listen for form submission events.
Example:
javascript
Copy code
var form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form Submitted!');
});

var input = document.getElementById('myInput');
console.log(input.value);  // Get input value
Handling Mouse Events

Handle mouse events like mouseover, mouseout, mousedown, etc.
Example:
javascript
Copy code
var element = document.getElementById('myElement');
element.addEventListener('mouseover', function() {
    element.style.backgroundColor = 'yellow';
});
element.addEventListener('mouseout', function() {
    element.style.backgroundColor = '';
});
Keyboard Events

Capture keypress events such as keydown and keyup.
Example:
javascript
Copy code
document.addEventListener('keydown', function(event) {
    console.log('Key pressed: ' + event.key);
});
Toggling Visibility

Show or hide elements using the style.display property.
Example:
javascript
Copy code
var element = document.getElementById('myElement');
if (element.style.display === 'none') {
    element.style.display = 'block';
} else {
    element.style.display = 'none';
}
Advanced DOM Manipulation Tasks
Drag and Drop Functionality

Implement drag-and-drop interactions by handling dragstart, dragover, and drop events.
Example:
javascript
Copy code
var dragItem = document.getElementById('dragItem');

dragItem.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
});

var dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', function(event) {
    event.preventDefault();
});

dropZone.addEventListener('drop', function(event) {
    event.preventDefault();
    var id = event.dataTransfer.getData('text');
    var draggedElement = document.getElementById(id);
    dropZone.appendChild(draggedElement);
});
Handling Dynamic Lists (Todo App)

Create and manage dynamic lists where users can add, edit, and remove list items.
Example:
javascript
Copy code
var list = document.getElementById('todoList');
var input = document.getElementById('newItem');
var addButton = document.getElementById('addButton');

addButton.addEventListener('click', function() {
    var li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = ''; // Clear input after adding
});

// Optional: Add a way to remove list items
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});
Fade In/Out Elements Using CSS Transitions

Use CSS transitions to create smooth fade-in/fade-out effects on elements.
Example:
javascript
Copy code
var element = document.getElementById('myElement');
element.style.transition = 'opacity 0.5s';

function fadeOut() {
    element.style.opacity = 0;
}

function fadeIn() {
    element.style.opacity = 1;
}
Fetching Data from API and Displaying It (Using Fetch API)

Fetch data from an API and dynamically display the data in the DOM.
Example:
javascript
Copy code
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
      var postContainer = document.getElementById('postContainer');
      data.forEach(post => {
          var postElement = document.createElement('div');
          postElement.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
          postContainer.appendChild(postElement);
      });
  });
Creating and Managing a Modal (Popup)

Create a modal window that appears when a button is clicked and disappears when closed.
Example:
javascript
Copy code
var modal = document.getElementById('myModal');
var openButton = document.getElementById('openModal');
var closeButton = document.getElementById('closeModal');

openButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
Using Intersection Observer to Lazy Load Images

Use the IntersectionObserver API to lazily load images when they come into the viewport.
Example:
javascript
Copy code
var images = document.querySelectorAll('img.lazy-load');

var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var img = entry.target;
            img.src = img.dataset.src; // Load image
            observer.unobserve(img); // Stop observing once loaded
        }
    });
});

images.forEach(img => {
    observer.observe(img);
});
Animating Elements with JavaScript

Create animations by manipulating element styles at intervals (e.g., using setInterval or requestAnimationFrame).
Example:
javascript
Copy code
var element = document.getElementById('myElement');
var position = 0;

function animate() {
    if (position < 200) {
        position++;
        element.style.left = position + 'px';
        requestAnimationFrame(animate); // Smooth animation
    }
}

animate();
Building a Custom Accordion Component

Create an accordion where sections expand/collapse when clicked.
Example:
javascript
Copy code
var accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        var panel = this.nextElementSibling;
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
});
