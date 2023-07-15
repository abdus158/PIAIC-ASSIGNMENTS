"use strict";
let usernames = ["admin", "Abdus Salam", "Tayyab", "Maheen", "Mahnoor"];
for (let guest of usernames) {
    if (guest === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${guest}, thank you for logging in again.`);
    }
}
