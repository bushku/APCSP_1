---
title: Dog in Motion OOP 
comments: true
layout: base
description: Use JavaScript without external libararies to animate Dog moving across screen, OOP style.
permalink: /frontend/dog2
image: /images/dogsprite.png
---

{% include nav_frontend.html %}

{% assign sprite_file = site.baseurl | append: page.image %}  <!--- Liquid concatentation --->
{% assign hash = site.data.dog_metadata %}  <!--- Liquid list variable created from file containing mario metatdata for sprite --->
{% assign pixels = 256 %} <!--- Liquid integer assignment --->

<!--- HTML for page contains <p> tag named "mario" and class properties for a "sprite"  -->
<p id="dog" class="sprite"></p>
  

<!--- Embedded Cascading Style Sheet (CSS) rules, defines how HTML elements look --->
<style>
  /* CSS style rules for the elements id and class above...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /* background position of sprite element */
  #dog {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}} * -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert yml hash to javascript key value objects /////////

  var dog_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  dog_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// animation control object /////////

  class Dog {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.dogElement = document.getElementById("dog"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.dogElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.dogElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.dogElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const dog = new Dog(dog_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        dog.startCheering();
      } else {
        if (dog.currentSpeed === 0) {
          dog.startWalking();
        } else if (dog.currentSpeed === 3) {
          dog.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        dog.stopAnimate();
      } else {
        dog.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        dog.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        dog.startRunning();
      }
    } else {
      // move left
      dog.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    dog.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     dog.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    dog.startResting();
  });

</script>
