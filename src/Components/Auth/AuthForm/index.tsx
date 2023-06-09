import React, { useEffect, useState } from 'react';
import { CustomInput } from '../../Commons/CustomInput';
import styles from './AuthForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../../store/userData';

export const AuthForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.userData);
  console.log(data);

  const [formState, setFormstate] = useState({
    email: '',
    password: '',
  });

  const [isError, setIsError] = useState(false);

  const handleChangeFieldForm = (fieldName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormstate((prevValues) => ({ ...prevValues, [fieldName]: e.target.value }));
  };

  const handleFinishForm = () => {
    if (formState.password.length < 5) {
      setIsError(true);
    } else {
      dispatch(setUserData({ token: 'token', email: formState.email }));
      console.log('Auth');
    }
  };

  useEffect(() => {
    if (isError && formState.password.length > 5) {
      setIsError(false);
    }
  }, [formState.password]);

  return <div>
    <CustomInput
    fieldLabel='Email'
    fieldName='email'
    value={formState.email}
    handleChangeFieldForm={handleChangeFieldForm} />
    <CustomInput
    fieldLabel='Password'
    fieldName='password'
    value={formState.password}
    type='password'
    handleChangeFieldForm={handleChangeFieldForm} />
    <span className={`${styles.errorTitle} ${isError ? styles.hasError : styles.noError}`}>Пароль должен быть больше 5 символов</span>
    <button onClick={handleFinishForm}>AUTH</button>
  </div>
};
