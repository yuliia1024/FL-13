let userEmail = prompt('Enter your email', '');
userEmail = userEmail ? userEmail.trim() : '';
const MIN_PASS_LENGTH = 4;
const passwords = {
    'User': 'UserPass',
    'Admin': 'AdminPass'
};
let sayHi = false;
if (!userEmail.length) {
    alert('Canceled.');
} else if (userEmail.length < MIN_PASS_LENGTH) {
    alert("I don't know any users having name length less than 4 symbols");
} else if (userEmail !== 'User' && userEmail !== 'Admin') {
    alert('I don’t know you');
} else {
    let userPassword = prompt('Enter your password', '');
    userPassword = userPassword ? userPassword.trim() : '';
    if (!userPassword.length) {
        alert('Canceled.');
    } else if (userPassword !== passwords[userEmail]) {
        alert('Wrong password');
    } else {
        let currentDate = new Date().getHours();
        currentDate<20 && currentDate>=8 ? alert('Good day, dear ' + userEmail) :
            alert('Good evening, dear '+userEmail);
    }
}
