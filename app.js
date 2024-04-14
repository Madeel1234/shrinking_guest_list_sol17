#! /usr/bin/env node
// Shrink guest list: You just find out that your new dinner table won't arrive in time for the dinner, and you have spaces 
// for only two guests 
// Start with your program from exercise Add n new line that print a message saying that you can invite only 2 peoples for dinner
// Remove guest from your list one at a time until only 2 names remain in your list. Each time you pop a name from your list, 
// print a message to that person letting them know you are sorry you cant invite them to dinner
// Print a message to each of the 2 peoples still on your list, letting them know they are still invited.
// Remove the last 2 names from your list, so you have an empty list, print your list to make sure you actually have an empty 
// list at the end of your program.
let guest_list = ['Imran', 'Babar', 'Kashif', 'Aisha', 'Aiza', 'Fatima'];
let absent_guest = "Imran";
let new_guest = "Shahzad";
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear ' + guest_list[i] + '\n\n It is our pleasure to invite you in our party.');
}
console.log(`Sorry ${absent_guest}  is not coming to the party.`);
console.log('Good news! we find big table so we are inviting 3 more guests');
guest_list.unshift('Saad');
guest_list.splice(2, 0, 'Sawaiz');
guest_list.push('Shafeh');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear ' + guest_list[i] + '\n\n It is our pleasure to invite you in our party.');
}
console.log('\n Sorry we cannot arrange big table, Only 2 peoples will be invited');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry ${remove_guest}, You are not invited for the dinners`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear ' + guest_list[i] + '\n\n You are still invited \n\n Thank you.');
}
guest_list.splice(0, 2);
console.log(guest_list);
export {};
