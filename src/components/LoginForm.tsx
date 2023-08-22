import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai';
import { loginUser } from '@/helpers';
import Button from './Button';
import {
  Container,
  Form,
  FormTitle,
  InfoText,
  InfoTextContainer,
  Link,
} from '@/components/FormElements';
import InputField from './InputField';
import { ErrorText } from './InputFieldElements';

type Props = {};

const LoginForm: React.FC<{}> = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);

      const loginRes = await loginUser({ email, password });

      if (loginRes && !loginRes.ok) {
        setSubmitError(loginRes.error || '');
      } else {
        router.push('/');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data?.error;
        setSubmitError(errorMsg);
      }
    }
    setLoading(false);
  };
  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <FormTitle> Login </FormTitle>

        <InputField
          placeholder="Email"
          type="email"
          icon={<AiOutlineMail />}
          value={email}
          onChange={handleEmailChange}
          required
        />
        <InputField
          placeholder="Password"
          type="password"
          icon={<AiOutlineUnlock />}
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <Link href="/forgotPassword">Forgot Password?</Link>

        <Button type="submit" title="Login" disabled={loading} />
        {submitError && <ErrorText>{submitError}</ErrorText>}

        <InfoTextContainer>
          <InfoText>New User?</InfoText>

          <Link href="/signup">Create an Account</Link>
        </InfoTextContainer>
      </Form>
    </Container>
  );
};

export default LoginForm;
