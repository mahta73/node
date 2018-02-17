   // using another branch in git 
	// now I am not using the master branch
  // array.reduce() method reduce our array to a single value
  let sum = function(arr) {
    return arr.reduce( (total, current) => total + current, 0 )
  }

  module.exports.sum = sum
