  <!-- 1 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?   -->


 1 getElementById

What it does: Selects one element with a specific id.

Returns: A single HTMLElement.

Multiple elements? No (id is unique).



2 getElementsByClassName

What it does: Selects all elements with a specific class.

Returns: HTMLCollection (like an array, but not exactly).

Multiple elements? Yes




3 querySelector & querySelectorAll

What it does: Selects elements using CSS selectors.

querySelector: Returns the first match.

querySelectorAll: Returns all matches as a NodeList.



 <!-- 2 How do you create and insert a new element into the DOM? -->

 

document.createElement("tag") = create element

element.innerText / innerHTML / className / id = customize it

parent.appendChild(element) or similar = insert it




<!-- 3 What is Event Bubbling? And how does it work? -->


1 Event Bubbling is when an event that happens on a child element “bubbles up” to its parent elements.

2 In other words, if you click a button inside a div, first the button reacts, then the div, then its parent, all the way up to <body>.

3 It’s called “bubbling” because the event rises from the innermost element to the outer ones, just like bubbles in water.





<!-- 4. What is Event Delegation in JavaScript? Why is it useful? -->



1 Event Delegation is a technique where you attach a single event listener to a parent element instead of attaching it to many child elements.

2 Then, using event bubbling, you handle events on child elements from that parent.





<!-- 5. What is the difference between preventDefault() and stopPropagation() methods? -->


1  preventDefault()

What it does: Stops the default browser action for an event.

It does NOT stop bubbling.



2 stopPropagation()

What it does: Stops the event from bubbling up (or capturing down) the DOM tree.

It does NOT stop default browser action.