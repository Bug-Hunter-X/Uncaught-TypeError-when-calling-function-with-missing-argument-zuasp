# Uncaught TypeError when calling function with missing argument
This bug demonstrates an Uncaught TypeError in JavaScript when a function is called with fewer arguments than defined in its declaration.
The function `foo` expects two arguments but in line 3 it's called with only one argument. This causes an error because JavaScript attempts to access an undefined variable (the missing second argument).