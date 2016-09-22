// Reversing a string using JavaScript's built in libraries.

function reverseString(str) {

    var splitString = str.split("");

    var reverseArray = splitString.reverse();


    var joinArray = reverseArray.join("");


    return joinArray;
};
