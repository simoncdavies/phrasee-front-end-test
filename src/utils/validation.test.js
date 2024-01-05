import { checkEmail, checkPassword } from './validation';

const errorEmail = 'Please enter a valid email address';
const errorPassword = 'Please enter your password';

describe('checkEmail', () => {
  it('valid password', async () => {
    const validEmail = 'test@email.com';
    await expect(checkEmail({}, validEmail)).resolves.toEqual(undefined);
  });

  it('invalid email address - empty', async () => {
    const invalidEmail = '';
    await expect(checkEmail({}, invalidEmail)).rejects.toThrowError(errorEmail);
  });

  it('invalid email address - no @', async () => {
    const invalidEmail = 'testemail.com';
    await expect(checkEmail({}, invalidEmail)).rejects.toThrowError(errorEmail);
  });

  it('invalid email address - no .', async () => {
    const invalidEmail = 'test@emailcom';
    await expect(checkEmail({}, invalidEmail)).rejects.toThrowError(errorEmail);
  });

  it('invalid email address - more than 6 characters after last .', async () => {
    const invalidEmail = 'test@email.commmmm';
    await expect(checkEmail({}, invalidEmail)).rejects.toThrowError(errorEmail);
  });

  it('invalid email address - more than 128 characters between @ and .', async () => {
    const invalidEmail = 'test@email67890email67890email67890email67890email67890email67890email67890email67890email67890email67890email67890email67890email6789.com';
    await expect(checkEmail({}, invalidEmail)).rejects.toThrowError(errorEmail);
  });
});

describe('checkPassword', () => {
  it('valid password', async () => {
    const validPassword = 'Password1';
    await expect(checkPassword({}, validPassword)).resolves.toEqual(undefined);
  });

  it('invalid password - empty', async () => {
    const invalidPassword = '';
    await expect(checkPassword({}, invalidPassword)).rejects.toThrowError(errorPassword);
  });

  it('invalid password - too short', async () => {
    const invalidPassword = 'Passwor';
    await expect(checkPassword({}, invalidPassword)).rejects.toThrowError(errorPassword);
  });

  it('invalid password - too long', async () => {
    const invalidPassword = 'Password01Password01Password01Password01Password01Password01Password01Password01Password01Password01Password01Password01Password1';
    await expect(checkPassword({}, invalidPassword)).rejects.toThrowError(errorPassword);
  });

  it('invalid password - no number', async () => {
    const invalidPassword = 'Password';
    await expect(checkPassword({}, invalidPassword)).rejects.toThrowError(errorPassword);
  });

  it('invalid password - no uppercase letter', async () => {
    const invalidPassword = 'password1';
    await expect(checkPassword({}, invalidPassword)).rejects.toThrowError(errorPassword);
  });
});
