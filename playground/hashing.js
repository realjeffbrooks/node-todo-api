const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

bcrypt.genSalt(10).then((salt) => {
  bcrypt.hash(password, salt).then((hash) => {
    console.log(hash);
  }); 
}).catch((e) => {
  
});


var hashedPassword = '$2a$10$pkmRgqTYX5Rb6xgLGmGZhOM0qL1V06X9Na5KU8uCjfioGmheofTvK';

bcrypt.compare(password, hashedPassword).then((match) => {
  console.log(match);
});



// var data = {
//   id: 4,
//   name: 'blah',
//   bool: false,
//   pwd: 'pwd123'
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// var message = 'I am user number 3';
// console.log(`Message: ${message}`);

// var hash = SHA256(message).toString();
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data = 5
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed - do not trust');
// }


