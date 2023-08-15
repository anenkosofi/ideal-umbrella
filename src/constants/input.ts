import { Form } from '@types';

type Input = {
  name: keyof Form;
  label: string;
  type: string;
  placeholder: string;
};

export const inputs: Input[] = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your name' },
  { name: 'email', label: 'Your Email', type: 'text', placeholder: 'example@youremail.com' },
  { name: 'address', label: 'Address', type: 'text', placeholder: 'Your address' },
  { name: 'number', label: 'Phone number', type: 'text', placeholder: 'Enter your phone' },
];
