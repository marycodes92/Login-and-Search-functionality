// const user = {
//   email: 'human@gmail.com',
//   password: 'Any1is#',
// }

function validateDetails() {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const emailFormat =
    "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/"
  const passwordFormat =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  
  if (!email && !password) {
    alert('Email and password field cannot be blank')
  }
  else if (email == emailFormat && password == passwordFormat) {
    alert('User successfully logged In')
  }
  else if (email != emailFormat && password != passwordFormat) {
    alert('Invalid email or password format')
  }
  else if (password !== '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})') {
    alert('Password must have at least One uppercase letter, one number and a special character and must not be less than 8')
  }
}
