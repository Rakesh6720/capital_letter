function makeCapitalLetter(string) {
// step 1 prompt the user for the string
	//in this example let's say the input is "hello"
	//makeCapitalLetter(hello)
// step 2 use the split method to translate string into an array
	let stringArray = string.split("");
	// let stringArray = hello.split();
	// stringArray = [h, e, l, l, o]
// step 3 parse out the individual elements of the array using splice, isolating the first letter of the string with the array locator 0
	let letterOne = stringArray.splice(0, 1);
	//splice(x,y) starts at x and runs up to but does not include x
	//letterOne = h
	
// step 4: convert the isolated element of the array into a string
	let convertedString = letterOne.toString();
	// convertedString = toString(h);
	// convertedString = "h";
// step 4 use the capitalize letter method to make the first element of the array a capital letter
	let capitalLetter = convertedString.toUpperCase();
	//capitalLetter = h.toUpperCase("")
	//capitalLetter = "H"
	console.log(capitalLetter);
}

makeCapitalLetter("hello");