// console.log(document.body.childNodes)
// console.log(document.body.children)

let div = document.querySelector('div.container');
console.log('div:', div);

// innerHTML
// textContent
if (div) {
  // change the innerHTML
  div.innerHTML = `<h1>The result of 2 + 2 is ${2 + 2}</h1>
  <p>Count: <span>0</span></p>
  <button class="button" >Please Click Me</button>
  <p>Some text</p>
  <a href="https://google.com">Google</a>
  `;
}

// siblings of the div - element
console.log(div.previousElementSibling)
const goggleLink = div.lastElementChild;

// console.dir(goggleLink)

const button = div.querySelector('button.button');
console.dir(button)

button.addEventListener('click', function(event) {
  console.log('button clicked');
  const span = div.querySelector('span');
  let count = Number(span.textContent);
  span.textContent = ++count;

  // click the goggleLink into a new tab
  goggleLink.setAttribute('target', '_blank');
  goggleLink.click();

});

// using the node api - text, comment, element
console.log(div.previousSibling)
console.log(div.nextSibling)
// parent body