// Exercise 87: Renaming Imports

export function doWork() { /* ... */ }
export function doPlay() { /* ... */ }
import { doWork as work, doPlay as play } from './myLib.js';
work();
play();
doWork is imported as work; doPlay is imported as play.