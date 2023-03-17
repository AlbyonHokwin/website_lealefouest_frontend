export type FormInputs = {
  firstname: string;
  lastname: string;
  address: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
  email: string;
  dressingSize: '' | 'small' | 'medium' | 'large';
}

export type DressingSize = {
  label: string;
  value: Exclude<FormInputs['dressingSize'], ''>;
}
