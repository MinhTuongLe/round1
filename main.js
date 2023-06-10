// Increase number in circle
document.querySelectorAll(".increase-number").forEach(function (element) {
  var counter = 0;
  var targetValue = parseInt(element.textContent);
  var duration = 1500;
  var steps = 100;

  var increment = (targetValue / duration) * (1000 / steps);

  var animation = setInterval(function () {
    counter += increment;
    if (counter >= targetValue) {
      counter = targetValue;
      clearInterval(animation);
    }

    element.textContent = Math.round(counter);
  }, duration / steps);
});

// Rotate circle border
anime({
  targets: ".border-circle",
  duration: 5000,
  strokeDasharray: [1, 10],
  easing: "easeOutCubic",
  loop: true,
});
