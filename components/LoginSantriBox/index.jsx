import { useCallback, useState } from 'react';

import { postLoginSantriAPI } from 'Client/auth';
import { isEmail } from 'utils/string';

import styles from './LoginSantriBox.module.scss';

const LoginSiswaBox = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [error] = useState('');

  const handleChangeLoginData = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitData = useCallback(async () => {
    const { username, password } = loginData;
    const loginPayload = {
      [isEmail(username) ? 'email' : 'nisn']: username,
      password,
    };

    const data = await postLoginSantriAPI(loginPayload);
    console.log(data);
  }, [loginData]);

  return (
    <div className={styles.box}>
      <h2>Siswa</h2>
      <input
        type="text"
        placeholder="NISN/Email"
        value={loginData.username}
        name="username"
        onChange={handleChangeLoginData}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginData.password}
        name="password"
        onChange={handleChangeLoginData}
      />
      <div>{error}</div>
      <button onClick={submitData}>Login</button>
    </div>
  );
};

export default LoginSiswaBox;
