// Increase number in circle
document.querySelectorAll(".increase-number").forEach(function (element) {
  var counter = 0;
  var targetValue = parseInt(element.textContent);
  var duration = 1500;
  var steps = 100;

  var increment = (targetValue / duration) * (1000 / steps);

  var content = element.textContent.trim();
  var lastCharacter = "";

  for (let i in content) {
    if (isNaN(content[i])) {
      lastCharacter+=content.slice(i, content.length);
      break;
    }
  }

  var animation = setInterval(function () {
    counter += increment;
    if (counter >= targetValue) {
      counter = targetValue;
      clearInterval(animation);
    }

    var displayValue = Math.round(counter);

    displayValue += lastCharacter;
    element.textContent = displayValue;
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
