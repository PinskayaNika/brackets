module.exports = function check(str, bracketsConfig) {
  // your solution
	/*let lr = 0;
	let rr = 0;
	let lf = 0;
	let rf = 0;
	let lc = 0;
	let rc = 0;
	if (str.length % 2 == 1) {
		return false;
	}
	for (let i = 0; i < str.length; i++) {
		if (str[i] == '(') {
			lr = lr + 1;
		} else if (str[i] == ')') {
			rr = rr + 1;
		} else if (str[i] == '{') {
			lf = lf + 1;
		} else if (str[i] == '}') {
			rf = rf + 1;
		} else if (str[i] == '[') {
			lc = lc + 1;
		} else if (str[i] == ']') {
			rc = rc + 1;
		} 
	}
	if (lr == rr && lf == rf && lc == rc) {
		return true;
	} else return false;*/

var stack = [];
	var Odd_Even = {};
	for (j = 0; j < bracketsConfig.length; j++) {
  
		if (bracketsConfig[j][0] == bracketsConfig[j][1])
			Odd_Even[bracketsConfig[j][1]] = 0;
	}	
	for (i = 0; i < str.length; i++){
	//console.log(str[i], stack);
		for (j = 0; j <bracketsConfig.length; j++) {
		
			switch (str[i]) {
				case bracketsConfig[j][0] : if (bracketsConfig[j][0] == bracketsConfig[j][1])
										if (Odd_Even[bracketsConfig[j][1]] == 0) {
											stack.push(str[i]);
											Odd_Even[bracketsConfig[j][1]] = 1; 
										}
										else {
											if (stack.pop() != bracketsConfig[j][0]) {
												//alert ('false'); //
												return false;
																							}
											else Odd_Even[bracketsConfig[j][1]] = 0;
										}
									else stack.push(str[i]);
									break;
				case bracketsConfig[j][1] : 
						 if (stack.pop() != bracketsConfig[j][0]) {
										//alert ('false'); //
										return false;
									}
									break;
			}
		}
	}

	if (stack.length != 0) {
		//alert ('false'); //
return false;
	}
	//alert ('true');	//
return true;
}
