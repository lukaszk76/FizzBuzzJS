function sayFizz() {
	return "Fizz";
}

function sayBuzz() {
	return "Buzz";
}

function fizzBuzz(size) {
	
  talkers = {
    0: sayFizz,
    3: sayBuzz,
  };

  for (var i = 1; i < size; i++) {
		const mod3 = i % 3;
		const mod5 = (i % 5) + 3;
		try {
			console.log(talkers[mod3]() + talkers[mod5]());
		} catch (error) {
			try {
				console.log(talkers[mod3]());
			} catch (error) {
				try {
					console.log(talkers[mod5]());
				} catch (error) {
					console.log(i);
				}
			}
		}
	}
}

fizzBuzz(100);
