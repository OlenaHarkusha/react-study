import { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export const SignupForm = () => {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  // useEffect(() => {
  //   localStorage.setItem('email', JSON.stringify(email));
  // }, [email]);

  // useEffect(() => {
  //   localStorage.setItem('password', JSON.stringify(password));
  // }, [password]);

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;

      case 'password':
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <form>
      <label>
        <span>Mail</span>
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <button type="submit">SignUp</button>
    </form>
  );
};
