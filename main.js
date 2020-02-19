/******************
 * YOUR CODE HERE *
 ******************/

getFirstItemFrom = (array) => {
  return array[0]
}

getLastItemFrom = (array) => {
return array.pop()
}

getIndex3 = (array) => {
  if (array[4]){
  return array[3]
  } else return array.pop()
}

isLongList = (array) => {
  if (array.length >= 10){
    return true
  }else {
    return false
  }
}

firstItemIsNumber = (array) => {
  if (typeof array[0] === 'number'){
    return true 
  }else {
    return false
  } 
}

secondCharOfThirdString = (array) => {
  let x = array[2]
  return x[1]
}

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
