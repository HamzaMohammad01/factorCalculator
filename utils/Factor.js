let factors = (number) => {
	let numberList = [],
		factorList = [];

	for (let index = 1; index <= number; index++) {
		numberList.push(index);
	}

	for (let numbers of numberList) {
		if (number % numbers == 0) factorList.push(numbers);
	}

	return factorList;
};

module.exports = factors;
