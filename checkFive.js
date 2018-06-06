function checkFive(start, end) {
  var count = 0;
  while(+start != +(end + 1)) {
    if (("" + start).indexOf('5') == -1) {
        count++;
    } 
    start++;
  }
  return count;
}