const bcrypt = require('bcrypt');

const hashpassword = async (pw) => {
    // const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, 12);
    // console.log(salt);
    console.log(hash);
}
// const hashpassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }

const login = async (pw, hashedpw) => {
    const result = await bcrypt.compare(pw, hashedpw);
    if (result) {
        console.log('logged in successfully!');
    } else {
        console.log('incorrect!');
    }
}
// hashpassword('Monkey')
// login('Monkey', '$2b$12$QVmOlm4aJ9obj/1KiENO5OFEABNEGFA0vzHSZJI5nQQ3us6tn1NYa')
// login('MonKey', '$2b$12$QVmOlm4aJ9obj/1KiENO5OFEABNEGFA0vzHSZJI5nQQ3us6tn1NYa')