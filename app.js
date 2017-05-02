const keys = [];
let code = "cd"

window.addEventListener('keyup', (e) => {
	//add the keys to the code array 
	keys.push(e.key);
	//splice out for accurate length
	keys.splice(-code.length - 1, keys.length - code.length)
	console.log(keys);


	//check if its the code
	if(keys.join('').includes(code)) {
	     alert("YES");
	}

})

