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

function htmAttrib() {
  console.log('button clicked');
}

// window.htmAttrib = htmAttrib;
console.dir(div);
// div.onmouseover = htmAttrib;

// siblings of the div - element
console.log(div.previousElementSibling);
const goggleLink = div.lastElementChild;

// console.dir(goggleLink)

const button = div.querySelector('button.button');
console.dir(button);

// addEventListener approach
button.addEventListener('click', handleClick);

function mk(type, props, children) {
  const el = document.createElement(type);
  if (props) Object.assign(el, props);
  if (children) el.append(...children);
  return el;
}

mk(
  'div',
  {
    className: 'hello',
    style: 'display: flex',
  },
  [
    mk('img', {
      src: 'https://avatars.githubusercontent.com/u/10030028?v=4',
      alt: 'A picture of mongo park',
      style: 'width: 100px; height: 100px; borderradius: 50%',
    }),
    mk('p', {}, 'hello'),
  ],
);

body(div(img, p))

function handleClick(event) {
  console.log('button clicked');
  const span = div.querySelector('span');
  let count = Number(span.textContent);
  span.textContent = ++count;

  // click the goggleLink into a new tab
  // goggleLink.setAttribute('target', '_blank');
  // goggleLink.click();
}

// html attribute

//  dom property

// using the node api - text, comment, element
console.log(div.previousSibling);
console.log(div.nextSibling);
// parent body
