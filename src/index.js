import './style.css';

const content = document.getElementById('content');

const display = document.createElement('div');

const formCard = document.createElement('div');
formCard.id = 'form-card';

const form = document.createElement('form');
form.id = 'form';

const email = document.createElement('input');
email.id = 'email';
email.type = 'email';
email.name = 'email';
email.required = true;
const emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
emailLabel.classList.add('labels');
emailLabel.textContent = 'Email';

const country = document.createElement('input');
country.id = 'country';
country.type = ' select';
const countryLabel = document.createElement('label');
countryLabel.classList.add('labels');
countryLabel.textContent = 'Country';

const zipCode = document.createElement('input');
zipCode.id = 'zip-code';
zipCode.type = 'text';
const zipCodeLabel = document.createElement('label');
zipCodeLabel.classList.add('labels');
zipCodeLabel.textContent = 'Zip Code';

const password = document.createElement('input');
password.id = 'password';
password.type = 'password';
const passwordLabel = document.createElement('label');
passwordLabel.classList.add('labels');
passwordLabel.textContent = 'Password';

const passwordConfirm = document.createElement('input');
passwordConfirm.id = 'password-confirm';
passwordConfirm.type = 'password';
const passwordConfirmLabel = document.createElement('label');
passwordConfirmLabel.classList.add('labels');
passwordConfirmLabel.textContent = 'Confirm Password';

const submitBox = document.createElement('div');

const submitBtn = document.createElement('button');
submitBtn.id = 'submit-button';
submitBtn.textContent = 'Submit';

submitBox.appendChild(submitBtn);

form.appendChild(emailLabel);
form.appendChild(email);
form.appendChild(countryLabel);
form.appendChild(country);
form.appendChild(zipCodeLabel);
form.appendChild(zipCode);
form.appendChild(passwordLabel);
form.appendChild(password);
form.appendChild(passwordConfirmLabel);
form.appendChild(passwordConfirm);
form.appendChild(submitBox);

formCard.appendChild(form);

display.append(formCard);

content.appendChild(display);

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
