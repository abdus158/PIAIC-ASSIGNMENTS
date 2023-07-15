let current_users: string[] = ["john", "emma", "alex", "sarah", "michael"];
let new_users: string[] = ["John", "emma", "lucas", "Olivia", "jacob"];

for (let new_user of new_users) {
  let isUsernameTaken: boolean = false;

  for (let current_user of current_users) {
    if (current_user.toLowerCase() === new_user.toLowerCase()) {
      isUsernameTaken = true;
      break;
    }
  }

  if (isUsernameTaken) {
    console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_user}' is available.`);
  }
}
