import {SelectHTMLAttributes} from 'react';

type OwnSelectProps = {
  options: {
    name: string;
    value: string;
  }[];
};

export type SelectProps = OwnSelectProps & SelectHTMLAttributes<HTMLSelectElement>;
