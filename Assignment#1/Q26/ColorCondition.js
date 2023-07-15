var alienColor = ['green', 'yellow', 'red'];
// Version that passes the if test
if (alienColor.indexOf('green') !== -1) {
    console.log("Congratulations green color is present! You just earned 5 points.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
// Version that fails the if test (no output)
if (alienColor.indexOf('green') == -1) {
    console.log("Congratulations green color is not present! You just earned 5 points.");
}
else {
    console.log("Congratulations green color is not pressed! You just earned 10 points.");
}
