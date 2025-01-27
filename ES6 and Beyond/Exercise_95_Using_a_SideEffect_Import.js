// Exercise 95: Using a Side-Effect Import

What You’ll Learn: Importing a module just for running its code (no exports).
Learning Objectives:
console.log("Module sideEffect.js loaded, no exports here");
import './sideEffect.js';
console.log("Main code continues...");
Some modules only perform side effects on import (logging, polyfills, etc.).