imageReveal
===========
imageReveal allows you to take a single `img` tag and turn it into an image with an overlay that can display a header and a body.

####How to use
--------------
There are two ways to use imageReveal, you can declare the title and text content inline in the attributes of the tag or you can use the `options` object to pass in the contents.

imageReveal looks at the `title` attribute when populating the title of the overlay and the `data-content` attribute when determining the body content.  HTML is acceptable in the `data-content` attribute.


Below are the acceptable options that imageReveal currently accepts:
+ *height* - this sets the height & max-height of the widget\*
+ *width* - this sets the width & max-width of the widget\*
+ *opacity* - the opacity to set the image to when then overlay is being revealed
+ *duration* - the duration the animation should take to complete
+ *title* - the title of the overlay (imageReveal will override this in favor of the title attribute)
+ *content* - this body content of the overlay (imageReveal will override this in favor of the data-content attribute)

\*Note: the height and width properties default to the value of "auto".  When using "auto", imageReveal will get the height and width from the img it is applied to

######Example Usage:
HTML:
`<img src="http://placekitten.com/200/200" title="A kitten" data-content="This text will be displayed to the user on hover" />`

JS:
`$("img").imageReveal();`

####[Demo](http://jsfiddle.net/JThomas/N23z6/)