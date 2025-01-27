// Exercise 83: Using Arrow Functions for “this” Context

let team = {
showMembers: function() {
this.members.forEach((member) => {
console.log(`${member} is in ${this.name}`);
});
}
};
team.showMembers();
The arrow function inside forEach uses the this from showMembers(), so it refers to team.