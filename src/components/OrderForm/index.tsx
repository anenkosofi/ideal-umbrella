import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Container from '@components/Container';
import Input from '@components/Input';
import { inputs } from '@constants';
import { Form } from '@types';

import './OrderForm.scss';

export const schema = z.object({
  name: z.string().nonempty('This field is required'),
  email: z.string().nonempty('This field is required').email('Invalid email format'),
  address: z.string().nonempty('This field is required'),
  number: z
    .string()
    .nonempty('This field is required')
    .regex(/^\d+$/, 'Phone number must contain only number')
    .min(5, 'Phone number must contain at least 5 numbers')
    .max(12, 'Phone number must contain at most 12 numbers'),
  message: z.string().optional(),
});

type OrderFormProps = {
  submitForm: () => void;
};

const OrderForm: FC<OrderFormProps> = ({ submitForm }) => {
  const defaultValues: Form = {
    name: '',
    email: '',
    address: '',
    number: '',
    message: '',
  };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm<Form>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onSubmit',
  });

  const onSubmitHandler = (data: Form) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      submitForm();
      reset(defaultValues);
    }
  }, [isSubmitSuccessful]);

  return (
    <div className="order-form__container">
      <Container>
        <form
          className="order-form"
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <input
            type="password"
            name="password"
            autoComplete="new-password"
            style={{ display: 'none' }}
          />
          <div className="order-form__field-container">
            {inputs.map(({ name, label, type, placeholder }) => (
              <Input
                key={name}
                name={name}
                label={label}
                type={type}
                placeholder={placeholder}
                errors={errors}
                register={register}
              />
            ))}
          </div>
          <div className="order-form__message">
            <p className="order-form__label">Message</p>
            <textarea
              id="message"
              placeholder="Extra information..."
              className="order-form__textarea"
              {...register('message')}
            />
          </div>
          <button type="submit" disabled={!isValid} className="order-form__confirm">
            Confirm
          </button>
        </form>
        <DevTool control={control} />
      </Container>
    </div>
  );
};

export default OrderForm;
