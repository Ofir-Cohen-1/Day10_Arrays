
const passwordValidation = (password) => {
    password = '4885T6544';

    if (password.length >= 7)
        console.log('strong');
        else
        console.log('weak')
    
password.length >= 7 ?  console.log('strong') :  console.log('weak');

(password.length >= 7 && console.log('strong')) || (password.length < 7 && console.log('weak'));

password.length >= 7 ?  /[A-Z]/.test(password) ?  console.log('very strong') : console.log('strong') : console.log('weak');
}
passwordValidation();