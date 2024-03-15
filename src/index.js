import './style.css';

// create DOM elements and thier attributes
const content = document.getElementById('content');

const display = document.createElement('div');
display.id = 'display';

const formCard = document.createElement('div');
formCard.id = 'form-card';

const form = document.createElement('form');
form.id = 'form';
form.noValidate = true;

const email = document.createElement('input');
email.id = 'email';
email.type = 'email';
email.name = 'email';
email.required = true;
email.placeholder = 'Enter your email address';
email.minLength = 3;
email.classList.add('def-input');
const emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.classList.add('labels');
emailLabel.textContent = 'Email';
const emailError = document.createElement('span');
emailError.classList.add('error');

const showEmailError = () => {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an email address.';
    email.className = 'notValid';
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an email address.';
    email.className = 'notValid';
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    email.className = 'notValid';
  }
};

email.oninput = () => {
  if (email.validity.valid) {
    emailError.textContent = '';
    email.className = 'isValid';
  } else if (!email.validity.valid) {
    // emailError.textContent = 'i dont thoink so!';
    showEmailError();
    email.className = 'notValid';
  }
};

const country = document.createElement('input');
country.id = 'country';
country.type = ' select';
country.required = true;
country.classList.add('def-input');
const countryLabel = document.createElement('label');
countryLabel.classList.add('labels');
countryLabel.textContent = 'Country';
const countryError = document.createElement('span');
countryError.classList.add('error');

const zipCode = document.createElement('input');
zipCode.id = 'zip-code';
zipCode.type = 'text';
zipCode.required = true;
zipCode.pattern = '[0-9]{5}';
zipCode.maxLength = 5;
zipCode.placeholder = 'Enter a 5 digit zipcode';
zipCode.classList.add('def-input');
const zipCodeLabel = document.createElement('label');
zipCodeLabel.classList.add('labels');
zipCodeLabel.textContent = 'Zip Code';
const zipCodeError = document.createElement('span');
zipCodeError.classList.add('error');

const showZipCodeError = () => {
  if (zipCode.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    zipCodeError.textContent = 'Enter a 5 digit Zip Code.';
    zipCode.className = 'notValid';
  } else if (zipCode.validity.patternMismatch) {
    // If the field doesn't contain an zipCode address,
    // display the following error message.
    zipCodeError.textContent = 'Enter a 5 digit Zip Code.';
    zipCode.className = 'notValid';
  }
};

zipCode.oninput = () => {
  if (zipCode.validity.valid) {
    zipCodeError.textContent = '';
    zipCode.className = 'isValid';
  } else if (!zipCode.validity.valid) {
    showZipCodeError();
    zipCode.className = 'notValid';
  }
};

const password = document.createElement('input');
password.id = 'password';
password.type = 'password';
password.required = true;
password.pattern = '(?=.*?[0-9])(?=.*?[A-Za-z]).+';
password.minLength = 6;
password.placeholder = '6 char. Letter and number';
password.classList.add('def-input');
const passwordLabel = document.createElement('label');
passwordLabel.classList.add('labels');
passwordLabel.textContent = 'Password';
const passwordError = document.createElement('span');
passwordError.classList.add('error');

const showPasswordError = () => {
  if (password.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    passwordError.textContent = 'Enter a password';
    password.className = 'notValid';
  } else if (password.validity.patternMismatch && password.validity.tooShort) {
    // If the field doesn't match letter+number pattern or is too short,
    // display the following error message.
    passwordError.textContent = '6 characters long with a number and a letter';
    password.className = 'notValid';
  } else if (password.validity.tooShort) {
    console.log('short');
    // If the field doesn't meet minLength,
    // display the following error message.
    passwordError.textContent = 'Must be 6 charecters long ';
    password.className = 'notValid';
  } else if (password.validity.patternMismatch) {
    console.log('pattern');
    // If the field doesn't match letter+number pattern,
    // display the following error message.
    passwordError.textContent = 'Must contain a number and a letter';
    password.className = 'notValid';
  }
};

password.oninput = () => {
  if (password.validity.valid) {
    passwordError.textContent = '';
    password.className = 'isValid';
  } else if (!password.validity.valid) {
    showPasswordError();
    password.className = 'notValid';
  }
};

const passwordConfirm = document.createElement('input');
passwordConfirm.id = 'password-confirm';
passwordConfirm.type = 'password';
passwordConfirm.required = true;
passwordConfirm.classList.add('def-input');
const passwordConfirmLabel = document.createElement('label');
passwordConfirmLabel.classList.add('labels');
passwordConfirmLabel.textContent = 'Confirm Password';
const passwordConfirmError = document.createElement('span');
passwordConfirmError.classList.add('error');

const showPasswordConfirmError = () => {
  if (passwordConfirm.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    passwordConfirmError.textContent = 'Confirm your password';
    passwordConfirm.className = 'notValid';
  }
};

passwordConfirm.oninput = () => {
  const passwordGrabber = document.getElementById('password');
  if (passwordConfirm.value !== passwordGrabber.value) {
    // If password confirm doesn't match password
    passwordConfirmError.textContent = 'Passwords do not match';
    passwordConfirm.className = 'notValid';
  } else if (passwordConfirm.validity.valid) {
    passwordConfirmError.textContent = '';
    passwordConfirm.className = 'isValid';
  } else if (!passwordConfirm.validity.valid) {
    showPasswordConfirmError();
    passwordConfirm.className = 'notValid';
  }
};

const inputs = [
  emailLabel,
  email,
  emailError,
  countryLabel,
  country,
  countryError,
  zipCodeLabel,
  zipCode,
  zipCodeError,
  passwordLabel,
  password,
  passwordError,
  passwordConfirmLabel,
  passwordConfirm,
  passwordConfirmError,
];

// put each pair of label, input, and error span into a formField div for styling
for (let i = 0; i < inputs.length; i += 3) {
  const formField = document.createElement('div');
  formField.classList.add('form-field');
  const grabber = i + 1;
  const grabber2 = i + 2;
  formField.appendChild(inputs[i]);
  formField.appendChild(inputs[grabber]);
  formField.appendChild(inputs[grabber2]);

  form.appendChild(formField);
}

const submitBox = document.createElement('div');
const submitBtn = document.createElement('button');
submitBtn.id = 'submit-button';
submitBtn.textContent = 'Submit';
submitBox.appendChild(submitBtn);
form.appendChild(submitBox);

submitBtn.onclick = (e) => {
  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showEmailError();
    // Then we prevent the form from being sent by canceling the event
    e.preventDefault();
  }
  if (!zipCode.validity.valid) {
    // If it isn't, we display an appropriate error message
    showZipCodeError();
    // Then we prevent the form from being sent by canceling the event
    e.preventDefault();
  }
  if (!password.validity.valid) {
    // If it isn't, we display an appropriate error message
    showPasswordError();
    // Then we prevent the form from being sent by canceling the event
    e.preventDefault();
  }
  if (!passwordConfirm.validity.valid) {
    // If it isn't, we display an appropriate error message
    showPasswordConfirmError();
    // Then we prevent the form from being sent by canceling the event
    e.preventDefault();
  }
  if (passwordConfirm.value !== password.value) {
    // If the confirm password field doesn't match password field,
    // display the following error message.
    passwordConfirmError.textContent = 'Passwords do not match';
    passwordConfirm.className = 'notValid';
    e.preventDefault();
  }
  alert('GOOD JOB!');
};

formCard.appendChild(form);

display.append(formCard);

content.appendChild(display);

// js style that ought to be replaced within style.css
submitBtn.style.width = '150px';

submitBox.style.display = 'flex';
submitBox.style.justifyContent = 'center';
submitBox.style.marginTop = '5px';

form.style.display = 'flex';
form.style.justifyContent = 'center';
form.style.flexDirection = 'column';
form.style.width = '275px';

formCard.style.display = 'flex';
formCard.style.justifyContent = 'center';
formCard.style.alignItems = 'center';
formCard.style.backgroundColor = 'whitesmoke';
formCard.style.padding = '40px';

display.style.display = 'flex';
display.style.width = '100%';
display.style.height = '100vh';
display.style.justifyContent = 'center';
display.style.alignItems = 'center';
