import { useCallback, useState } from 'react';

import { postLoginSantriAPI } from 'Client/auth';
import { isEmail } from 'utils/string';

import styles from './LoginGuruBox.module.scss';

const LoginGuruBox = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

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
      <h2>Guru</h2>
      <input
        type="text"
        placeholder="NIP/Email"
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
      <button onClick={submitData}>Login</button>
    </div>
  );
};

export default LoginGuruBox;
