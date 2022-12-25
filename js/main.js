// Завдання 1

let ignore = 'You can ignore single and double quotes like this: \\\'\\\' \\\" \\\"';

console.log(ignore);

// // Завданння 2

let yourData = 'Please enter your data';

alert(yourData);

let yourName = prompt("Enter your name", 'Name');

alert(`Your name is: ${yourName}`);

let surName = prompt("Enter your surname", 'Surname');

alert(`Your full name is: ${yourName} ${surName}`);

let age = prompt("How old are you?", 'Age');

alert(`Your full name is: ${yourName} ${surName}, your age is: ${age}`);

let admin = confirm('Are you admin?');

alert(`Your full name is: ${yourName} ${surName}, your age is: ${surName}, admin status: ${admin}`);


// Завдання 3

console.log(Boolean(alert('5'))); // false так як в alert не має ніякого типу а це означає, що він undefined в свою чергу undefined = false 
console.log(true > false);  // true прирівнюється до 1, а false до нуля тому в консолі відобразить true так як 1 біьлше 0
console.log(true > 5); // в консолі буде false так як true = 1, а як ми знаємо 1 не може бути більше 5
console.log(true < '5'); // в консолі відобразить true так як '' - це рядок який прирівнюється до числа, а так як true = 1 то число 5 буде більше за 1
console.log(true > null); // null є примітивом, і в контексті логічних операцій розглядається як хибне (falsy)