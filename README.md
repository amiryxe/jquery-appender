# jQuery-Appender
Simple jQuery plugin for initial and Append anything

### How install Appender

1. include jQuery in your project like this:
```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
```

2. Add **jQuery Appender** plugin to your project:
```html
<script src="js/appender.js"></script>
```  

3. Usage:
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