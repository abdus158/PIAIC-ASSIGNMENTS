let username: string[] = ["admin", "Abdus Salam", "Tayyab", "Maheen", "Mahnoor"];

if (username.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let guest of username) {
    if (guest === 'admin') {
      //console.log('Hello admin, would you like to see a status report?');
    } else {
      //console.log(`Hello ${guest}, thank you for logging in again.`);
    }
  }
}
    console.log("Removing whole list to print the correct message");
username = [];

if (username.length === 0) {
  console.log("\nWe need to find some users!");
}
