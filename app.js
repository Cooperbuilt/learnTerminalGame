const keys = [];
let code = "cd"

window.addEventListener('keyup', (e) => {
	//add the keys to the code array 
	keys.push(e.key);
	//splice out for accurate length
	keys.splice(-code.length - 1, keys.length - code.length)
	console.log(keys);
})

