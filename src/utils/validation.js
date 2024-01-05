export const checkEmail = (rule, value) => {
  const emailRegex = /^[^\s@]+@[^\s@]{1,128}\.[^\s@]{1,6}$/;
  if (emailRegex.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject(new Error('Please enter a valid email address'));
}

export const checkPassword = (rule, value) => {
  const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,128}$/;
  if (passwordRegex.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject(new Error('Please enter your password'));
}
