import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import { COLORS } from 'constants/colors';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import LoadingSpinner from 'components/base/LoadingSpinner';

import { postLoginGuruAPI } from 'client/auth';

import { showSnackbar } from 'shared/redux/slices/snackbar-slice';
import { isEmail } from 'shared/utils/string';

import styles from './LoginGuruBox.module.scss';

const LoginGuruBox = ({ redirectTo }) => {
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
      [isEmail(username) ? 'email' : 'nip']: username,
      password,
    };

    const { success, message, data } = await postLoginGuruAPI(loginPayload);
    setIsLoadingSubmit(false);

    if (!success) return;

    dispatch(showSnackbar({ message, type: 'success' }));
    localStorage.setItem('ponpes-alhadi-profil', JSON.stringify(data));

    router.push(redirectTo || '/guru');
  }, [dispatch, loginData, redirectTo, router]);

  const actionPressEnter = (e) => {
    if (e.charCode === 13) submitData();
  };

  return (
    <div className={styles.box}>
      <h2>Guru</h2>
      <input
        type="text"
        placeholder="NIP/Email"
        value={loginData.username}
        name="username"
        onChange={handleChangeLoginData}
        onKeyPress={actionPressEnter}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginData.password}
        name="password"
        onChange={handleChangeLoginData}
        onKeyPress={actionPressEnter}
      />
      <button
        className={styles.loginButton}
        onClick={submitData}
        onKeyPress={actionPressEnter}
        disabled={isLoadingSubmit}
      >
        {isLoadingSubmit ? <LoadingSpinner width={20} color={COLORS.Primary} /> : 'Login'}
      </button>
    </div>
  );
};

LoginGuruBox.propTypes = {
  redirectTo: PropTypes.string,
};

LoginGuruBox.defaultProps = {
  redirectTo: '',
};

export default LoginGuruBox;
