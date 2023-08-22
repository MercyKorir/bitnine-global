import React, { useState } from 'react';
import { InputProps } from '@/types/propTypes';
import {
  Container,
  HidePassIcon,
  Input,
  ShowPassIcon,
  Wrapper,
  ErrorText,
} from '@/components/InputFieldElements';

const InputField: React.FC<InputProps> = ({
  placeholder,
  icon,
  type,
  required,
  value,
  onChange,
  name,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordIcon = () => {
    setShowPassword(!showPassword);
  };

  const renderPasswordIcon = () => {
    if (showPassword) {
      return <HidePassIcon onClick={togglePasswordIcon} />;
    } else {
      return <ShowPassIcon onClick={togglePasswordIcon} />;
    }
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;
  return (
    <Container>
      <Wrapper>
        {icon}

        <Input
          placeholder={placeholder}
          type={inputType}
          required={required}
          value={value}
          onChange={onChange}
          name={name}
        />

        {type === 'password' && renderPasswordIcon()}
      </Wrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default InputField;
