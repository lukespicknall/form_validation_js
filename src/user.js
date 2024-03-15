// Factory function to create a collect form data and put it in a user object

const newUser = (uEmail, uCountry, uZipCode, uPassword, uPasswordConfirm) => {
  const email = uEmail;
  const country = uCountry;
  const zipCode = uZipCode;
  const password = uPassword;
  const passwordConfirm = uPasswordConfirm;

  return {
    email,
    country,
    zipCode,
    password,
    passwordConfirm,
  };
};

export default newUser;
