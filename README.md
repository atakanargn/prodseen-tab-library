# pure-js-tab-lib
Simple tab library with pure javascript

# What is this?

Prodseen Tab library is a tab library written in pure JavaScript.

Planned features to be added:
- More styles and style customization.
- Conversion of tab based on id and class with `querySelector()`.
- Efforts will be made to make it as easy to use as possible.
- Sidebar styled vertical tab menu.

# Usage

Include the <b>prs-tab.js</b> library into your HTML page.
```html
<script src="prs-tab.js"></script>
```

Create your tab structure with HTML codes as shown below, the number of tabs can be decreased or increased.
```html
<ul class="prs-tab"></ul>
        <li to="tab1">Tab 1</li>
        <li to="tab2">Tab 2</li>
        <li to="tab3">Tab 3</li>
</ul>
<div class="prs-tabs" id="tab1">Tab 1 content</div>
<div class="prs-tabs" id="tab2">Tab 2 content</div>
<div class="prs-tabs" id="tab3">Tab 3 content</div>
```

After calling the ProdseenTab() class, the areas with the "ul" tag having the "prs-tab" class on your page will turn into selectable tabs, while the "div" tags with the "prs-tabs" attribute will represent the tab contents.
```html
<script>
        var tabs;
document.addEventListener(&quot;DOMContentLoaded&quot;, () => {
        tabs = new ProdseenTab();
};
</script>
```

You can switch to the tab with the desired ID using the .change("tab-id") method.

```js
tabs.change("tab3");
```

# About me
Atakan Argın, 25 y-old, Fullstack Developer.

|              |                                      |
|--------------|--------------------------------------|
| Github       | [@atakanargn](https://github.com/atakanargn)      |
| LinkedIn     | [@atakanargn](https://linkedin.com/in/atakanargn)   |
| E-mail       | [argin.atakan@gmail.com](mailto:argin.atakan@gmail.com) |
| CV           | [cv.argin.info](https://cv.argin.info/)            |
