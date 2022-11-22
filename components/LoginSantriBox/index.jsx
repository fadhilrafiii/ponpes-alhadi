import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import { postLoginSantriAPI } from 'client/auth';
import { useDispatch } from 'react-redux';
import { showSnackbar } from 'redux/slices/snackbar-slice';
import { isEmail } from 'utils/string';

import LoadingSpinner from 'components/base/LoadingSpinner';

import { COLORS } from 'constants/colors';

import styles from './LoginSantriBox.module.scss';

const LoginSiswaBox = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const handleChangeLoginData = (e) => {
    const { name, value } = e.target;

    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitData = useCallback(async () => {
    setIsLoadingSubmit(true);
    const { username, password } = loginData;
    const loginPayload = {
      [isEmail(username) ? 'email' : 'nisn']: username,
      password,
    };

    const { success, message, data } = await postLoginSantriAPI(loginPayload);
    setIsLoadingSubmit(false);

    if (!success) return;

    dispatch(showSnackbar({ message, type: 'success' }));
    localStorage.setItem('ponpes-alhadi-profil', JSON.stringify(data));

    router.push('/santri');
  }, [dispatch, loginData, router]);

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
      <button className={styles.loginButton} onClick={submitData} disabled={isLoadingSubmit}>
        {isLoadingSubmit ? <LoadingSpinner width={20} color={COLORS.Primary} /> : 'Login'}
      </button>
    </div>
  );
};

export default LoginSiswaBox;
