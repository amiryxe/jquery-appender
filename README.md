# jQuery Appender
Simple jQuery plugin for initial and Appending anything

### How to use Appender

1. Include jQuery in your project:
```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
```

2. Add **jQuery Appender** plugin to your project:
```html
<script src="js/appender.js"></script>
```  

3. Initial:
```javascript
$("#appendHere").appender({
    rowSection: '.row_container',
    addBtn: '.add-new-item',
    appendEffect: 'fade',
    addClass: 'animated bounceInLeft',
    rowNumber: '.row-number',
    deleteBtn: '.delete-btn',
    hideSection: true
});
```  
