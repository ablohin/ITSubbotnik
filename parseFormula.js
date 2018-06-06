function parseFormula(formula) {

  var i = 0;
  var name = '';
  var num = '';
  var result = {};

  while (i < formula.length) {
    if (isNaN(formula[i])) {
      if (formula[i] == formula[i].toUpperCase()) {
        if ((i - 1) >= 0) {
          if (num === '') {num = '1';}
          result[name] = +num; 
          name = '';
          num = '';
          name += formula[i];
          i++;
          continue;
        } else {
          name += formula[i];
          i++;
          continue;
        }
      } else {
        name += formula[i];
        i++;
        continue;
      }
      i++; continue;
    }
    if (!isNaN(formula[i])) {
      if ((i - 1) >= 0) {
        num += formula[i];
        i++;
        continue;
      }
      i++;
      continue;
    }
    break;
  }

  result[name] = +num;

  return result;
}