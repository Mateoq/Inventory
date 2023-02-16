import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/basic-components/Button';
import Div from '@/basic-components/Div';
import Form from '@/basic-components/Form';
import { Input, InputMasked} from '@/basic-components/Input';
import InputError from '@/basic-components/InputError';
import Label from '@/basic-components/Label';
import { Company, ButtonType, InputType } from '@/types';
import { AppDispatch } from '@/store';
import {
  selectEditCompanyId,
  selectList,
  addCompany,
  updateCompany as stUpdateCompany,
  clearEditCompanyId
} from '@/slicers/companies';
import { openToast, closeToast } from '@/slicers/toast';
import createCompany from '@/thunks/createCompany';
import updateCompany from '@/thunks/updateCompany';
import { sleep } from '@/utils';

interface CompanyInputs {
  name: string;
  address: string;
  nit: string;
  phone: string;
}

export interface CompanyFormProps {
  onClose?(): void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const editId = useSelector(selectEditCompanyId);
  const companyList = useSelector(selectList);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, control } = useForm<CompanyInputs>();
  const onSubmit: SubmitHandler<CompanyInputs> = async (data) => {
    setIsLoading(true);
    if (editId) {
      const updateResult = await dispatch(updateCompany({ id: editId, data })).unwrap();

      if (updateResult) {
        dispatch(stUpdateCompany(updateResult));
        onClose && onClose();
        dispatch(openToast('Company updated!!'));
        await sleep(3000);
        dispatch(closeToast());
        dispatch(clearEditCompanyId());
      } else {
        dispatch(openToast('Error while updating the company'));
        await sleep(3000);
        dispatch(closeToast());
      }
    } else {
      const createResult = await dispatch(createCompany({ ...data })).unwrap();

      if (createResult) {
        dispatch(addCompany(createResult));
        onClose && onClose();
        dispatch(openToast('Company created!!'));
        await sleep(3000);
        dispatch(closeToast());
      } else {
        dispatch(openToast('Error while creating the company'));
        await sleep(3000);
        dispatch(closeToast());
      }
    }
    setIsLoading(false);
  };

  const defaultData = companyList[editId ?? ''] as Company | undefined;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label text="Name" error={!!errors.name}>
        <Input
          type={InputType.TEXT}
          error={!!errors.name}
          defaultValue={defaultData?.name}
          {...register('name', { required: true  })}
        />
        <InputError show={!!errors.name}>
          Please enter the company name
        </InputError>
      </Label>
      <Label text="Address" error={!!errors.address}>
        <Input
          type={InputType.TEXT}
          error={!!errors.address}
          defaultValue={defaultData?.address}
          {...register('address', { required: true  })}
        />
        <InputError show={!!errors.address}>
          Please enter the company address
        </InputError>
      </Label>
      <Label text="Nit" error={!!errors.nit}>
        <Controller
          name="nit"
          control={control}
          rules={{ required: true }}
          defaultValue={defaultData?.nit}
          render={({ field, fieldState }) => (
            <InputMasked
              {...field}
              type={InputType.TEXT}
              mask="999.999.999"
              error={!!fieldState.error}
            />
          )}
        />
        <InputError show={!!errors.nit}>
          Please enter a valid company nit
        </InputError>
      </Label>
      <Label text="Phone" error={!!errors.phone}>
        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          defaultValue={defaultData?.phone}
          render={({ field, fieldState }) => (
            <InputMasked
              {...field}
              type={InputType.PHONE}
              mask="(999)999-9999"
              error={!!fieldState.error}
            />
          )}
        />
        <InputError show={!!errors.phone}>
          Please enter a valid company phone
        </InputError>
      </Label>
      <Div>
        <Button type={ButtonType.SUBMIT} secondary disabled={isLoading}>
          Submit
        </Button>
      </Div>
    </Form>
  );
};

export default CompanyForm;
