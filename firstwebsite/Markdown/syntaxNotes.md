# notes
![syntax](image\SyntaxMd.png)
---
1/- width: 100% :
* It takes up 100% of the parent element's width. 
---
2/- width: 100vw :
* It takes up 100% of the Viewport Width (the entire window).
---
3/- How to Write it Like a Pro with md :
* The Preview Shortcut: Press Ctrl + Shift + V 
* Zen Mode: Ctrl + K then Z 
---
4/- Select All Occurrences 
* Ctrl + Shift + L 
---
5/- Best the CDNjs page for Font Awesome
* to add icons to the project without downloading any files 
* link rel="stylesheet"
 href=" https://cdnjs.cloudflare.com/ajax/libs font-awesome/7.0.1/css/allmin.css "
---
6/- transition:
* we put it in the element style not in the element(hover)style 
* xs ease : the sped of start and end 
---
7/- Position: Relative :
* The Element Stays Put:
* It Becomes a Reference Point to his children
* It tells any children inside it: "If you want to fly around (Absolute), you must stay within my walls."
---
8/- Position: Absolute :
* It Looks for an Anchor: It looks up the family tree for the nearest parent that has position: relative.
* If it finds one: It moves relative to that parent's edges.
* If it doesn't find one: It flies all the way to the edges of the Browser Window 
---
8/- transform: translateX(-50%)
* position: absolute, the element "floats" on its own layer. It no longer listens to the container's text alignment.

Using left and transform is the most reflexive way to center absolute items because:

* It works even if the text is long or short.

* It works even if the parent box changes size.

* It is more precise than using margins.

---