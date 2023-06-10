document.querySelectorAll(".increase-number").forEach(function (element) {
  var counter = 0;
  var targetValue = parseInt(element.textContent);

  var animation = setInterval(function () {
    counter++;
    if (counter >= targetValue) {
      clearInterval(animation);
    }

    element.textContent = counter;
  }, 500 / targetValue);
});
anime({
  targets: ".border-circle",
  duration: 5000,
  strokeDasharray: [1, 10],
  easing: "easeOutCubic",
  loop: true,
});
