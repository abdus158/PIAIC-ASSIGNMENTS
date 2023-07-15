let ModifiedGuestList:string[]=['Shoaib','Hooriya','Hoorain'];
//console.log("You've Invited to Dinner at sharp 9:00: " +ModifiedGuestList[0]);
//console.log("You've Invited to Dinner at sharp 9:00: " +ModifiedGuestList[1]);
//console.log("You've Invited to Dinner at sharp 9:00: " +ModifiedGuestList[2]);
//console.log("Thanks for your invitation but im not able to accept that invitation due to some issues: \n Regards:" +ModifiedGuestList[2]);

console.log("Modified List Of the Guests are;\n");

let ModifiedGuestList1:string[]=['Shoaib','Hooriya','Mahnoor'];

//console.log("You've Invited to Dinner at sharp 9:00: " +ModifiedGuestList1[0]);
//console.log("You've Invited to Dinner at sharp 9:00: " +ModifiedGuestList1[1]);
//console.log("You've Invited to Dinner at sharp 9:00: " +ModifiedGuestList1[2]);

ModifiedGuestList1.unshift('AbdusSalam'); // Add a guest to the beginning of the array
ModifiedGuestList1.splice(2, 0, 'Emaan'); // Add a guest to the middle of the array
ModifiedGuestList1.push('Areeb'); // Add a guest to the end of the array
console.log(ModifiedGuestList);

/*for (let guest of ModifiedGuestList1) {
  console.log("You've Invited to Dinner at sharp 9:00: " + guest);
}*/

console.log("You can invite only two people for dinner.");

while (ModifiedGuestList1.length > 2) {
  let removedGuest = ModifiedGuestList1.pop();
  console.log("Sorry, " + removedGuest + ", I can't invite you to dinner.");
}

for (let guest of ModifiedGuestList1) {
  console.log("You're still invited to dinner, " + guest + "!");
}
 
let invitedPersonArray1= ModifiedGuestList1.join(",");
console.log("Final Guest List: " + invitedPersonArray1);

 ModifiedGuestList1.splice(0);    

if(ModifiedGuestList1.length==0)
{
console.log("Array Deleted: " + ModifiedGuestList1);
console.log("Successfully Done");
}
else
{
    console.log("Elements Present");
}