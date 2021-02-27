# Sulfur.js
<div style="text-align:center;wdith:100%">
<img style="align:center" width="50%" height="50%" src="https://github.com/JasimAlrawie/Sulfur.js/blob/main/logo.png"></img>
</div>

## Introduction

> Sulfur.js is a javascript library to manage and create HTML elements with easy context 

## Code Samples

<code>
  let elem = new Sulf;
  
  elem.html("foo")
  
  elem.put(document.body)
  
  elem.on("click",e=>{console.log("bla bla bla")})
  
  elem.css({color:"red".cursor:"pointer"})
  
  elem.assign({onclick(){console.log("bla bla bla again")}})
</code>

..... and more

## Installation

> just put the Sulfur.js file in your project and then
> <script src="Sulfur.js"></script>
> 

# Methods in Sulf Object
    html(str) sets innerHTML or return innerHTML if arg str is null
  
    text(str) same as innerHTML but innerText
  
    put(e) to append the element if not appended
  
    set(k,v) to define a property or change it
  
    prop(k) to get property
  
    on(e,f) shortcut of addEventListener
  
    closest(s) to get closest element 
  
    hide() to hide the element
  
    unhide to show the element
  
    toggleHide() toggle visibility on/off
  
    disable() / enable() to disable and enable the element
  
    draggble(b) make the element draggable b=true or false to disable
  
    attr(obj) set group of attributes at once like {valeu:"foo"}
  
    assign(obj) to assign data to HTMLElement Object like {onclick(){console.log("hello there")}}
  
    click() click the element
  
    focus() / blur() to focus and blur elements like inputs
  
    store(k,v) to store values in dataset of the element
  
    ref(k) to get value from dataset
  
    query(s) to get element inside the main element , s is Selector
  
    class .toggle .add .remove .getList  ... class managament
  
    clone(b) will return clone of the element
  
    remove to remove the element
  
  # getters
    val - get the value if element has value attribute
    
    first - get first childElement inside the main element
    
    children - get array of children
    
    childCount - count of children
    
    id - get element's id
    
    outer - get outerHTML
    
    parent - get parentElement
    
    getRect - shortcut of getBoundingClientRect()
    
    enabled - enabled or not true/false
    
    isDraggble - true/false 
    
  # static methods in Sulf
    query(s) to make new Sulf Object with an existing element in docuemnt
    
    Sulfy(he) to turn any HTMLElement Object into Sulf Object
    
  # css things
    moveTo(x,y) to change position of the element if elem.style.position is not none should be relative or fixed or any...
    
    relMove(x,y) same as moveTo but will make the style.position = relative and move it relativly to its position
    
    color(col) to change text color . col = hex string or rgb or hsl
    
    bg(col) to change background color . col = hex string or rgb or hsl
    
    css(obj) to style the element ex. {color:"red",fontSize:"24",position:"fixed"}
    
    step(obj) to add step animation 
    
    animate(d,i) d = duration , i = iteration , default d = 1000, i = inf ... to start animation you assigned it with step method
    
    animState - get animation state running,idle,done,...
    
  # Untilites Sulf.utils
    # Math
      map(n,s1,e1,s2,e2) to map value to different scale
      
      random(min,max) to get random number with range
      
      dist(x1,y1,x2,y2) to get distance between two pointes
      
      ...more comming
    
    # String
      shuffle(str) return shuffled string
      
      toArray(str) return string as array
      
    # Array
      shuffle(arr) return shuffled array
      
      toString(arr) return array as string
    
    
    
    
    
    
    
 
  
  
  

