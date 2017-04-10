//////////////////////////////////////////////////////////////////////////
//
// 	VineSlider.js v0.1.0
//  	- Author: Josiah Rooney
// 		- Company: Kreck Design
// 		- Dependencies: None
// 
//////////////////////////////////////////////////////////////////////////


function VineSlider (options) {


//////////////////////////////////////////////////////////////////////////
// 
//  Get container of slideshow, return false with errors if no container
// 
//////////////////////////////////////////////////////////////////////////


	this.container;

	if ( options["container"] ) {

		this.container = document.querySelector(options["container"]);
		
		if (!this.container) {
			
			console.error(
				"There is no container of",
				options["container"]
			);
			
			return false;

		};

		this.container.classList.add('vineslider-container');

	} 

	else {
		
		console.error("You must specify the slideshow container."); 
		
		return false;
	
	}




//////////////////////////////////////////////////////////////////////////
// 
//  Get the list of the slideshow, break on errors
// 
//////////////////////////////////////////////////////////////////////////

	
	if ( options["list"] ) {

		this.parent = this.container.querySelector(options["list"]);

	}

	else {

		this.parent = this.container.querySelector('ul');

	}



//////////////////////////////////////////////////////////////////////////
// 
//  Get a nodelist of the slides
// 
//////////////////////////////////////////////////////////////////////////

	
	if ( options["slide"] ) {

		this.slides = this.parent.querySelectorAll(options["slide"]);

	}

	else {

		this.slides = this.parent.querySelectorAll('li');

	}

	if (this.slides.length == 0) {
		
		console.error("There are no slides."); 
		
		return false;
	
	};



//////////////////////////////////////////////////////////////////////////
// 
//  We've made it past the error checking! Yay! Now to create all our vars
// 
//////////////////////////////////////////////////////////////////////////


	this.speed = options["speed"] || 7000;
	this.navitems;
	this.nextBtn;
	this.prevBtn;
	this.active = 0;



//////////////////////////////////////////////////////////////////////////
// 
//  Init
// 
//////////////////////////////////////////////////////////////////////////


	this.init = function () {
		
		this.parent.classList.add('vs-slideshow');

		let navigation = document.createElement('div');
			navigation.classList.add('vs-navigation');

		this.container.appendChild(navigation);

		let nextBtn = document.createElement('div');
			nextBtn.classList.add('vs-next-btn');
			nextBtn.innerHTML = "<i class=\"fa fa-chevron-right\" \
									aria-hidden=\"true\"></i>";

		let prevBtn = document.createElement('div');
			prevBtn.classList.add('vs-prev-btn');
			prevBtn.innerHTML = "<i class=\"fa fa-chevron-left\" \
									aria-hidden=\"true\"></i>";

		navigation.appendChild(nextBtn);
		navigation.appendChild(prevBtn);

		this.nextBtn = document.querySelector('.vs-next-btn');
		this.prevBtn = document.querySelector('.vs-prev-btn');

		this.slides.forEach((item, index) => {
			item.classList.add('vs-slide'); 
			item.classList.add('vs-item_'+index);
			let span = document.createElement('span');
			span.classList.add('vs-nav-dot');
			span.classList.add('vs-item_'+index);
			navigation.appendChild(span);
		});

		this.slides[this.active].classList.add('vs-shown');	
		navigation.querySelectorAll('.vs-nav-dot')[this.active]
			.classList.add('vs-shown');
		
		this.navitems = document.querySelectorAll('.vs-nav-dot');

		events(this);
		
		autoslide(this);

	}



//////////////////////////////////////////////////////////////////////////
// 
//  Slide Method
// 
//////////////////////////////////////////////////////////////////////////


	this.slide = function (elems) {

		let targets = document.querySelectorAll(elems);
		
		let shown = document.querySelectorAll('.vs-shown');
		
		shown.forEach(item => {
			item.classList.remove('vs-shown');
		});
		
		targets.forEach(item => {
			item.classList.add('vs-shown');
		});
		
		this.active = Array.prototype.indexOf
			.call(this.navitems, document.querySelector('.vs-navigation ' + elems));
	
	}



//////////////////////////////////////////////////////////////////////////
// 
//  Event Listeners
// 	@private
// 
//////////////////////////////////////////////////////////////////////////


	function events (slider) {
		
		slider.navitems.forEach(item => {
		
			item.addEventListener("click", () => {
		
				let itemClass = "." + String(item.classList).split(' ')[1];
		
				slider.slide(itemClass);
		
			});
		
		});

		slider.nextBtn.addEventListener('click', () => {
			slider.nextSlide();
		});
		
		slider.prevBtn.addEventListener('click', () => {
			slider.prevSlide();
		});
	
	}



//////////////////////////////////////////////////////////////////////////
// 
//  Autoslide
// 	@private
//  
//  TODO: add pause on hover
// 
//////////////////////////////////////////////////////////////////////////


	function autoslide (slider) {
	
		let auto = setInterval(
	
			() => {
				slider.nextSlide();
			}, slider.speed
	
		);
	
	}



//////////////////////////////////////////////////////////////////////////
// 
//  Next Slide method
// 
//////////////////////////////////////////////////////////////////////////


	this.nextSlide = function () {

		if (this.active + 1 == this.navitems.length) {

			this.active = 0;

		} else {

			this.active++;

		}

		this.slide('.vs-item_'+this.active);
	}



//////////////////////////////////////////////////////////////////////////
// 
//  Previous Slide method
// 
//////////////////////////////////////////////////////////////////////////


	this.prevSlide = function () {

		if (this.active == 0) {

			this.active = this.navitems.length - 1;

		} else {

			this.active--;

		}

		this.slide('.vs-item_'+this.active);

	}

}