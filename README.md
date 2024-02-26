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

Create your tab structure with HTML codes as shown below, the number of tabs can be decreased or increased.

```html
&lt;ul class="prs-tab"&gt;
        &lt;li to="tab1"&gt;Tab 1&lt;/li&gt;
        &lt;li to="tab2"&gt;Tab 2&lt;/li&gt;
        &lt;li to="tab3"&gt;Tab 3&lt;/li&gt;
&lt;/ul&gt;
&lt;div class="prs-tabs" id="tab1"&gt;Tab 1 content&lt;/div&gt;
&lt;div class="prs-tabs" id="tab2"&gt;Tab 2 content&lt;/div&gt;
&lt;div class="prs-tabs" id="tab3"&gt;Tab 3 content&lt;/div&gt;