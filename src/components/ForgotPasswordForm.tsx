import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import Button from './Button';
import {
  Container,
  Form,
  FormTitle,
} from '@/components/ForgotPasswordElements';
import InputField from './InputField';

type Props = {};

const ForgotPasswordForm: React.FC<{}> = (props: Props) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormTitle> Forgot Password </FormTitle>

        <InputField
          placeholder={'Email'}
          type="email"
          value={email}
          onChange={handleEmailChange}
          icon={<AiOutlineMail />}
          required
        />

        <Button title={'Submit'} type="submit" />
      </Form>
    </Container>
  );
};

export default ForgotPasswordForm;
