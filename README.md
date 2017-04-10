# VineSlider.js v0.1.0

Author: Josiah Rooney  
Company: Kreck Design  
Dependencies: None  

## Instantation

To instantiate VineSlider, you must pass in an object of options. The minimum requirement is the container of the slideshow.

```
let args = {
	container: ".slideshow"
}

let vineSlider = new VineSlider(args)
```

Then to run the slideshow:

```
vineSlider.init()
```

### Options

**Container** - Required. The container element that is a parent to the `<ul>` of slides. eg:

```
let args = {
	container: ".slideshow"
}
```

**Speed** - *Optional*. Defaults to 6000ms. eg:

```
let args = {
	container: ".slideshow",
	speed: 10000
}
```

**List** - *Optional*. If you are using something other than a `<ul>`, you can specify that with this option. eg:

```
let args = {
	container: ".slideshow",
	list: "ul"
}
```

**Slide** - *Optional*. If you are using something other than a `<ul>` with children `<li>`, you may specify the selector here of the slides. eg:

```
let args = {
	container: ".slideshow",
	slide: "li"
}
```

*Note: More options coming soon*

## Required Markup

VineSlider only needs very minimal markup. Here is the minimum required markup:

```
<div class="slideshow">
	<ul>
		<li>
			<img src="img1.png">
		</li>
		<li>
			<img src="img2.png">
		</li>
		<li>
			<img src="img3.png">
		</li>
	</ul>
</div>
```

VineSlider will create navigation in clickable dots as well as next/prev arrows. Future versions will allow these to be turned off/on.

The slider currently does not support captions.

## Roadmap

In future releases, these are the planned features:

* Enable/disable navigation methods
* Pause on hover
* Captions
* Easing
* Slide Effects
* Responsiveness

## Note

VineSlider includes a lightweight, self-contained version of Font Awesome, trimmed down to only use left and right chevrons (for the next/prev buttons). In future updates, this might change.