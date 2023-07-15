"use strict";
// //Store the locations in a array. Make sure the array is not in alphabetical order.
let SeeingTheWorld = ["Germany", "Canada", "Australia", "Toronto", "Ontario"];
// • Print your array in its original order.
console.log("1.Original Order : " + SeeingTheWorld);
// • Print your array in alphabetical order without modifying the actual list.
let AO = SeeingTheWorld.slice();
console.log("2.Alphabetical Order : " + AO.sort());
// • Show that your array is still in its original order by printing it.
console.log("3.Original Order After Sorting : " + SeeingTheWorld);
// • Print your array in reverse alphabetical order without changing the order of the original list.
let sort = SeeingTheWorld.slice().sort();
let reverse = sort.reverse();
console.log("4.Sorted Array In Reverse Order : " + reverse);
// • Show that your array is still in its original order by printing it again.
console.log("5.Original Order After Reverse Sorting : " + SeeingTheWorld);
// • Reverse the order of your list. Print the array to show that its order has changed.
let reversed = SeeingTheWorld.reverse();
console.log("6.Reversed order of my list : " + SeeingTheWorld);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
let reverseAgain = SeeingTheWorld.reverse();
console.log("7.Reverse order of my list again : " + SeeingTheWorld);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("8.Sort my array so it’s stored in alphabetical order : " + SeeingTheWorld.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("9.Sort my array again so it’s stored in reversed alphabetical order : " + SeeingTheWorld.sort().reverse());
