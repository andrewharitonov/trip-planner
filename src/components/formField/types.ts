import {HTMLAttributes, ReactNode} from 'react';

export type OwnFormFieldProps = {
  title?: ReactNode;
  disabled?: boolean;
};

export type FormFieldProps = OwnFormFieldProps & HTMLAttributes<HTMLDivElement>;
