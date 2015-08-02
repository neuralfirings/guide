# Guide

Guide is a scrappy framework for writing.. well, Guides. Like the name suggest. I really didn't get creative with the name here, guys. The point of guide is to make a simple framework for making iFixit or Makezine style tutorials and guides. 

I put together a simple [example.html](http://neuralfirings.github.io/guide/example.html) page. 

## Installation

Installation is pretty straightforward. You will need jQuery, then attach the `guide.js` file and the `guide.css` file in the HTML header tags.


```html
<head>
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script src="guide.js"></script>
    <link rel="stylesheet" href="guide.css">   
</head>
```

Afterwards, you can create guide steps by using the following code template. A Guide Step is basically one or more images on the left side, with some text based instructions on the right. When the screen is smaller, the images take up the whole width. You know, responsive blah blah blah.

```html
<div class="guide-step">
  <div class="guide-images">
    <img src="01_breadboard.jpg" data-caption="Fritzing Breadboard View">
  </div>
  <div class="guide-text">
    <h2>Step 1</h2>
    There's one big picture and a few bullet points.
    <ul>
      <li>Open Fritzing</li>
      <li>Make sure you're in BreadBoard View</li>
      <li>Search for components and drag in to mimic your setup</li>
    </ul>
  </div>
</div>
```

If your main thing isn't an image, but say a chunk of code, you can use the `guide-main` class instead of the `guide-images` class. For example:

```html
<div class="guide-step">
  <div class="guide-main">
    <pre>
      <code>
var ua = navigator.userAgent.toLowerCase();
if(ua.search(/(iphone)|(ipod)|(android)/) != -1) {
  $(".not-for-mobile").hide();
  $(".for-mobile").show();
}
else {
  $(".not-for-mobile").show();
  $(".for-mobile").hide();
}  
      </code>
    </pre>
  </div>
  <div class="guide-text">
    <h2>Step 3</h2>
    Here are some example code. The highlighting is using highlight.js. 
  </div>
</div>
```

You know what? Just go and muck around in the [example.html](http://neuralfirings.github.io/guide/example.html) file. That's probably the best way to figure out what's going on.