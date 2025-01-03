function foo(a, b) {
  // Handle missing arguments using default values or checks
  b = typeof b !== 'undefined' ? b : 0; //Default b to 0 if not provided
  return a + b;
}
foo(1,2);
foo(1); //Now works correctly, returning 1