import React from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import Button from '@/basic-components/Button';
import Div from '@/basic-components/Div';
import { Input } from '@/basic-components/Input';
import InputError from '@/basic-components/InputError';
import Label from '@/basic-components/Label';
import Text from '@/basic-components/Text';
import {
  ButtonType,
  Color,
  InputType,
  TextAlignment,
  TextType,
  TextElement
} from '@/types';
import { colorProp } from '@/styles/utils';
import login from '@/thunks/login';
import { AppDispatch } from '@/store';
import { openToast, closeToast } from '@/slicers/toast';
import { sleep } from '@/utils';
import { patterns, paths } from '@/constants';

const Container = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
`;

const FormContainer = styled.form`
  background-color: ${colorProp(Color.GRAY_900)};
  border-radius: 0.4rem;
  box-shadow: 0px 4px 4px ${colorProp(Color.DIM)};
  display: flex;
  flex-direction: column;
  height: 30.6rem;
  padding: 2rem 2rem;
  width: 30rem;
`;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

interface AuthInputs {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, formState: { errors } } = useForm<AuthInputs>();
  const onSubmit: SubmitHandler<AuthInputs> = async (data) => {
    const loginResult = await dispatch(login({ email: data.email, password: data.password })).unwrap();

    if (loginResult) {
      location.assign(paths.HOME);
    } else {
      dispatch(openToast('Email or Password are incorrect'));
      await sleep(4000);
      dispatch(closeToast());
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
        <Text
          alignment={TextAlignment.CENTER}
          as={TextElement.H1}
          type={TextType.HEADING1}
        >
          Welcome
        </Text>
        <Div css={`margin-top: 1.4rem;`}>
          <Label text="Email" error={!!errors.email}>
            <Input
              type={InputType.EMAIL}
              error={!!errors.email}
              {...register('email', { required: true, pattern: patterns.EMAIL })}
            />
            <InputError show={!!errors.email}>
              Please enter a valid email
            </InputError>
          </Label>
        </Div>
        <Div css={`margin-top: 1.2rem;`}>
          <Label text="Password" error={!!errors.password}>
            <Input
              type={InputType.PASSWORD}
              error={!!errors.password}
              {...register('password', { required: true, minLength: 6 })}
            />
            <InputError show={!!errors.email}>
              Please enter a valid password
            </InputError>
          </Label>
        </Div>
        <SubmitContainer>
          <Button type={ButtonType.SUBMIT} secondary>
            Sign In
          </Button>
        </SubmitContainer>
      </FormContainer>
    </Container>
  );
};

export default SignInForm;
