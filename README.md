# ITSubbotnik
Задачи от стенда JavaScript разработчиков

### 1. Is this a triangle? ###

#### Description: #### 
Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle
can be built with the sides of given length and false in any other case.

##### Solution: #####

    function checkTriangle(a, b, c) {
        if (a > 0 && b > 0 && c > 0) {
                if (a < +(b + c) && b <= +(a + c) && c <= +(a + b)) 
                return true;
        }
        return false;
    }

##### Tests: #####
+ check for negative sides
 1. all sides: -58, -36, -47
+ one side
 1. first side: -1,3,5
 2. second side: 5, -6, 11
 3. third side: 99, 23, -56
+ two sides
 1. first and second: -23, -53, 66
 2. first and third: -33, 26, -56
 3. second and third: 125, -77, -34
+ different cases
 1. 1,2,2 should give true
 2. 3,4,5 should give true
 3. 11,2,9 should give false

### 2. Don't give me five! ###

#### Description: #### 
You get the start number and the end number of a region and should return the count of all numbers except
numbers with a 5 in it. The start and the end number are both inclusive!

##### Solution: #####

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

##### Tests: #####
1.  1 -> 9 should give 8
2.  4 -> 17 should give 12
3.  5 -> 5 should give 0
4.  6 -> 6 should give 1
5. -6 -> 16 should give 20
    
### 3. Persistent Bugger ###

#### Description: #### 
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative 
persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

##### Solution: #####

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
    
##### Tests: #####
1. 999 should give 4
2. 4 should give 0
3. 39 should give 3
4. 25 should give 2
5. 105 should give 0

### 4. Molecules test ###

#### Description: #### 
For a given chemical formula represented by a string, count the number of atoms of each element 
contained in the molecule and return an object. To simplify task, let's assume that given formula strings don't have bracers
or other special signs, e.g.: H20, C02, CaS04.

##### Solution: #####

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
    
##### Tests: #####
1. water (H20 -> {H:2, O:1})
2. something (Cu5Mg4Ne9 -> {Cu:5, Mg:3, Ne:9})
3. Carbon dioxide (CO2 -> {C:1, O:2})
4. Calcium sulfate (CaSO4 -> {Ca:1, S:1, O:4}) 
