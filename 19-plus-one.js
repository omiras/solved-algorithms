const plusOne = digits => {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] < 9) {
			digits[i] = digits[i] + 1;
			return digits;
		} else {
			digits[i] = 0;
		}
	}
	digits.unshift(1);
	return digits;
};

console.log(plusOne([2, 2, 9]));

// CASE 1: THE ARRAY = [1, 2 , 3] ___>  [3, 2, 1]

// 1. Iterate through the array backwards.
// 2. Check if the first digit is less than 9:

// 	if true: sum 1 to that digit, 					[4, 2 ,1]
// 	and then return the array. 						[1, 2, 4]

// CASE 2: THE ARRAY = [1, 2, 9] ___> [9, 2, 1]

//  	if false: convert that number into 0.  			        [0, 2, 1]
// 	keep iterating the array:

// 	if the digit is less than 9, sum 1 to that number.		[0, 3, 1 ]
// 	return the array.

// CASE 3: THE ARRAY = [9,9] ___> [0,0]
// 3.if both digits are not less than 9, then we need to add 1 at the beginning of the array.

// digits.unshift(1)    [1,0,0]
