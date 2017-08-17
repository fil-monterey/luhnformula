
array1 = [];
array5 = [];

for (i=1; i<=16; i++){
    var prt = prompt("Enter the digit" + i);
    var temp1 = parseInt(prt); 
    array1.push(temp1); 
}

for (var i = 0; i < array1.length; i++) {
    if (i%2==0){
    	var temp2 = 2 * array1[i];
    	if (temp2 >= 10){
    		temp2 = temp2 - 9;
    		array5.push(temp2);
    	} else {
    		array5.push(temp2);
    	}
    } else {
    	array5.push(array1[i]);
    }
}

var sum = 0;

for (var x=0; x<array5.length; x++) {
    var sum = sum + array5[x];
}
console.log("Array1: " + array1);
console.log("Array5: " + array5);
console.log("array5 numbers sum is: " + sum);

if (sum%10 == 0) {
    console.log("valid credit card!");
} else {
    console.log("NOT VALID CREDIT CARD!");
}