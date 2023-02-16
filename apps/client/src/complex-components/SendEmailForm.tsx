import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '@/basic-components/Button';
import Div from '@/basic-components/Div';
import Form from '@/basic-components/Form';
import { Input } from '@/basic-components/Input';
import InputError from '@/basic-components/InputError';
import Label from '@/basic-components/Label';
import { ButtonType, InputType } from '@/types';
import { patterns } from '@/constants';

interface SendEmailInputs {
  email: string;
}

const SendEmailForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SendEmailInputs>();
  const onSubmit: SubmitHandler<SendEmailInputs> = data => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <Div>
        <Button type={ButtonType.SUBMIT} secondary>
          Submit
        </Button>
      </Div>
    </Form>
  );
};

export default SendEmailForm;
