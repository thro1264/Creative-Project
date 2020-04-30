# Creative-Project
Creative Development Tools Project utilizing Anime.js, Rellax.js, and AOS.js

## Anime.js
### Setting It Up
1. Download "anime.js" from the github repo here https://github.com/juliangarnier/anime
2. Include this code at the bottom of your body element
   <script src = "anime.js"></script>
### Count up animation
1. Copy this code into a seperate js file or script tags
   anime({
     targets: '#DESIRED_ID',
     value: [0, 2800000],
     duration: 1000,
     round: 1,
     easing: 'linear',
     loop: true,
     endDelay: 3000
   });
### SVG Drawing
1. Copy this code into a seperate js file or script tags
   anime({
     targets: '#main-header path',
     strokeDashoffset: [anime.setDashoffset, 0],
     easing: 'easeInOutQuad',
     duration: 4000, 
     direction: 'alternate',
     loop: false
   });

## Rellax.js
### Setting It Up
1. Download "rellax.min.js" from the github repo here https://github.com/dixonandmoe/rellax
2. Include this code at the bottom of your body element
   <script src = "rellax.min.js"></script>
3. Include this code in script tags or seperate JS file
   var rellax = new Rellax('.rellax');
### Parallax Effect
1. Put element that you want parallax effect on in class titled "rellax"
   <div class = "rellax"
2. Select speed using attribute data-rellax-speed. Try to pick numbers between -10 and 10
   <div class = "rellax" data-rellax-speed = "5">

## Animate On Sroll
### Setting It Up
1. Download "hover.css" from the github repo here https://github.com/michalsnik/aos
2. Include this code in the head element
   <link rel="stylesheet" href="hover.css">
3. Place this line of code in seperate js file or script tags
   AOS.init();
### Zoom Animation
1. Find a desired animation here https://michalsnik.github.io/aos/
2. Copy attributes into tags of element you want to animate
   <div id = "content" data-aos = "zoom-in">
3. Include duration attribute to fine tune animation duration
   <div id = "content" data-aos = "zoom-in" data-aos-duration = "15000">
