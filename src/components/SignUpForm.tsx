import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import {
  Container,
  Form,
  FormTitle,
  InfoText,
  InfoTextContainer,
  Link,
} from '@/components/FormElements';
import InputField from '@/components/InputField';
import { InputErrors } from '@/types/error';
import { useRouter } from 'next/router';
import axios, { AxiosError } from 'axios';
import { ErrorText } from '@/components/InputFieldElements';
import { getErrorMsg, loginUser } from '@/helpers';
import Button from './Button';

type Props = {};

const SignUpForm: React.FC<{}> = (props: Props) => {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [validateErrors, setValidateErrors] = useState<InputErrors[]>([]);
  const [submitError, setSumbitError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateData = (): boolean => {
    const err = [];

    if (data.fullName?.length < 4) {
      err.push({ fullName: 'Full name must be atleast 4 characters long' });
    } else if (data.fullName?.length > 30) {
      err.push({ fullName: 'Full name should be less than 30 characters' });
    } else if (data.password?.length < 6) {
      err.push({ password: 'Password should be atleast 6 characters long' });
    } else if (data.password !== data.confirmPassword) {
      err.push({ confirmPassword: "Passwords don't match" });
    }
    setValidateErrors(err);

    if (err.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateData();
    if (isValid) {
      try {
        setLoading(true);
        const res = await axios.post(
          '/api/auth/signUp',
          data
        );
        if (res?.data?.success) {
          //save data in session using next auth
          const loginRes = await loginUser({
            email: data.email,
            password: data.password,
          });
          if (loginRes && !loginRes.ok) {
            setSumbitError(loginRes.error || '');
          } else {
            router.push('/');
          }
        }
      } catch (err: unknown) {
        if (err instanceof AxiosError) {
          const errMsg = err.response?.data?.error;
          setSumbitError(errMsg);
        }
      }
      setLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <FormTitle>SignUp</FormTitle>
        <InputField
          type="text"
          placeholder={'Full Name'}
          value={data.fullName}
          name="fullName"
          onChange={handleInputChange}
          icon={<BsPerson />}
          required
          error={getErrorMsg('fullName', validateErrors)}
        />
        <InputField
          type="email"
          placeholder={'Email'}
          value={data.email}
          name="email"
          onChange={handleInputChange}
          icon={<AiOutlineMail />}
          required
        />
        <InputField
          type="password"
          placeholder={'Password'}
          value={data.password}
          name="password"
          onChange={handleInputChange}
          icon={<AiOutlineUnlock />}
          required
          error={getErrorMsg('password', validateErrors)}
        />
        <InputField
          type="password"
          placeholder={'Confirm Password'}
          value={data.confirmPassword}
          name="confirmPassword"
          onChange={handleInputChange}
          icon={<RiLockPasswordLine />}
          required
          error={getErrorMsg('confirmPassword', validateErrors)}
        />
        <Button title={'Sign Up'} type="submit" disabled={loading} />
        {submitError && <ErrorText>{submitError}</ErrorText>}
        <InfoTextContainer>
          <InfoText>Already have account?</InfoText>
          <Link href={'/login'}>Login</Link>
        </InfoTextContainer>
      </Form>
    </Container>
  );
};

export default SignUpForm;
