window.onload = function() {
	var brtn = document.getElementById("btn");
	btn.addEventListener("click", function() {
		document.body.style.background = randColor();
	});
};

// This random color generator is iterative version
// rather than recursive version given by professor.
function randColor() {
	const hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	let color = '#';
	for (let i = 0; i < 6; i++) {
	  color += hex[Math.floor(Math.random() * hex.length)];
	}
	return color;
  }