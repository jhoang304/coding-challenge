module.exports.run = function (str) {
	/*
	A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
	Return true if all the g's in the given string are happy, otherwise return false.

		Example:
			function("xxggxx") => true
			function("xxgxx") => false

			Write your code below the comment.
	*/
	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'g') {
			const left = str[i - 1] === 'g';
			const right = str[i + 1] === 'g';
			if (!left && !right) return false;
		}
	}
	return true;
};
