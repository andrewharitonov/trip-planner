import {ButtonHTMLAttributes} from 'react';

export type OwnSquareButtonPropsType = {
  active?: boolean;
  title: string;
  description?: string;
};

export type SquareButtonProps = OwnSquareButtonPropsType & ButtonHTMLAttributes<HTMLButtonElement>;
