function findFirstDuplicate(arr) {
  // type your code here
  const seen = new Set();

  for (const item of arr) {
    if (seen.has(item)) {
      return item; // Found a duplicate
    }
    seen.add(item);
  }

  return -1; // No duplicates found
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
