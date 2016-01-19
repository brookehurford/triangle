var triangle = function(A, B, C) {
  if (((A + B) <= C) || ((A + C) <= B) || ((B + C) <= A)) {
    return false;
  }
  else if (A === B && B === C) {
    return true;
  }
  else if (A === B || B === C || A === C) {
    return true;
  }
  else  {
    return true;
  }
};
