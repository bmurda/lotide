const assertEqual = function(actual, expected) {
  if (actual === expected) {
  console.log(`Assertion Passed: ${actual} " === " ${expected}`);
  }
    else {
      console.log(`Assertion Failed: ${actual} " !== " ${expected}`);
    }
};

/*
function head (i) {
  console.log(head[0])
}
*/

function tail (i) {
  console.log(i.slice(1))
  //let arrayOne = []
  return i.slice(1)
}

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
