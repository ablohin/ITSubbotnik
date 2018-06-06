function checkBugger(num) {
  if (!isNaN(num)) num = '' + num;
  if (num.length == 1) return 0;
  else {
    var result = 1;
    for (i = 0; i < num.length; i++) {
      result *= +num[i];
    }
  }
  return 1.0 + checkBugger("" + result);
}
