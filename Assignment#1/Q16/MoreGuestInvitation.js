var ModifiedGuestList = ['Shoaib', 'Hooriya', 'Hoorain'];
//console.log("You've Invited to Dinner at sharp 9:00: " +ModifiedGuestList[0]);
//console.log("You've Invited to Dinner at sharp 9:00: " +ModifiedGuestList[1]);
//console.log("You've Invited to Dinner at sharp 9:00: " +ModifiedGuestList[2]);
//console.log("Thanks for your invitation but im not able to accept that invitation due to some issues: \n Regards:" +ModifiedGuestList[2]);
console.log("Modified List Of the Guests are;\n");
var ModifiedGuestList1 = ['Shoaib', 'Hooriya', 'Mahnoor'];
//console.log("You've Invited to Dinner at sharp 9:00: " +ModifiedGuestList1[0]);
//console.log("You've Invited to Dinner at sharp 9:00: " +ModifiedGuestList1[1]);
//console.log("You've Invited to Dinner at sharp 9:00: " +ModifiedGuestList1[2]);
ModifiedGuestList1.unshift('AbdusSalam'); // Add a guest to the beginning of the array
ModifiedGuestList1.splice(2, 0, 'Emaan'); // Add a guest to the middle of the array
ModifiedGuestList1.push('Areeb'); // Add a guest to the end of the array
console.log(ModifiedGuestList);
for (var _i = 0, ModifiedGuestList1_1 = ModifiedGuestList1; _i < ModifiedGuestList1_1.length; _i++) {
    var guest = ModifiedGuestList1_1[_i];
    console.log("You've Invited to Dinner at sharp 9:00: " + guest);
}
