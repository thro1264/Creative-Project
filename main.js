AOS.init();
var rellax = new Rellax('.rellax');

anime({
  targets: '#number',
  value: [0, 2800000],
  duration: 1000,
  round: 1,
  easing: 'linear',
  loop: true,
  endDelay: 3000
});

anime({
  targets: '#main-header path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuad',
  duration: 4000, 
  direction: 'alternate',
  loop: false
});

// anime({
//   targets: '#jan',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 1500,
//   delay: function(el, i) { return i * 250 },
//   direction: 'alternate',
//   loop: true
// });




// anime({
//   targets: '#main-header',
//   left: '750px',
//   direction: 'alternate',
//   duration: 100,
//   loop: true
// });