function checkTriangle(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
            if (a < +(b + c) && b <= +(a + c) && c <= +(a + b)) 
            return true;
    }
    return false;
}