# ITSubbotnik
Задачи от стенда JavaScript разработчиков

1) Is this a triangle?

Description: Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle
can be built with the sides of given length and false in any other case.

Solution:
function checkTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
      if (a < +(b + c) && b <= +(a + c) && c <= +(a + b)) 
      return true;
  }
  return false;
}

2) Don't give me five!

Description: You get the start number and the end number of a region and should return the count of all numbers except
numbers with a 5 in it. The start and the end number are both inclusive!

Solution:
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

3) Persistent Bugger

Description: Write a function, persistence, that takes in a positive parameter num and returns its multiplicative 
persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

Solution:
function checkBugger(num) {
  if (num.length == 1) return 0;
  else {
    var result = 1;
    for (i = 0; i < num.length; i++) {
      result *= +num[i];
    }
  }
  return 1.0 + abc("" + result);
}

4) Molecules test

Description: For a given chemical formula represented by a string, count the number of atoms of each element 
contained in the molecule and return an object. To simplify task, let's assume that given formula strings don't have bracers
or other special signs, e.g.: H20, C02, CaS04.

Solution:
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
