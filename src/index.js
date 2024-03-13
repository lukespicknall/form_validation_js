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
email.classList.add('def-input');
const emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.classList.add('labels');
emailLabel.textContent = 'Email';
const emailError = document.createElement('span');
emailError.classList.add('error');

email.oninput = () => {
  if (email.validity.valid) {
    emailError.textContent = '';
  } else if (!email.validity.valid) {
    emailError.textContent = 'i dont thoink so!';
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
zipCode.classList.add('def-input');
const zipCodeLabel = document.createElement('label');
zipCodeLabel.classList.add('labels');
zipCodeLabel.textContent = 'Zip Code';
const zipError = document.createElement('span');
zipError.classList.add('error');

const password = document.createElement('input');
password.id = 'password';
password.type = 'password';
password.required = true;
password.classList.add('def-input');
const passwordLabel = document.createElement('label');
passwordLabel.classList.add('labels');
passwordLabel.textContent = 'Password';
const passwordError = document.createElement('span');
passwordError.classList.add('error');

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

const inputs = [
  emailLabel,
  email,
  emailError,
  countryLabel,
  country,
  countryError,
  zipCodeLabel,
  zipCode,
  zipError,
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

  //   const error
  //   console.log(inputs[grabber].id);
  form.appendChild(formField);
}

const submitBox = document.createElement('div');
const submitBtn = document.createElement('button');
submitBtn.id = 'submit-button';
submitBtn.textContent = 'Submit';
submitBox.appendChild(submitBtn);
form.appendChild(submitBox);

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
