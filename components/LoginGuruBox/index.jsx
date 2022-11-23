import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import { postLoginSantriAPI } from 'client/auth';
import { useDispatch } from 'react-redux';
import { showSnackbar } from 'shared/redux/slices/snackbar-slice';
import { isEmail } from 'shared/utils/string';

import LoadingSpinner from 'components/base/LoadingSpinner';

import { COLORS } from 'constants/colors';

import styles from './LoginGuruBox.module.scss';

const LoginGuruBox = () => {
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

    const { success, message } = await postLoginSantriAPI(loginPayload);
    if (!success) return;

    dispatch(showSnackbar({ message, type: 'success' }));
    setIsLoadingSubmit(false);

    router.push('/guru');
  }, [dispatch, loginData, router]);

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
      <button className={styles.loginButton} onClick={submitData}>
        {isLoadingSubmit ? <LoadingSpinner width={20} color={COLORS.Primary} /> : 'Login'}
      </button>
    </div>
  );
};

export default LoginGuruBox;
