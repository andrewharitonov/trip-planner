import {HTMLAttributes} from 'react';

type OwnSeparatorProps = {
  disabled?: boolean;
};

export type DateSeparatorProps = OwnSeparatorProps & HTMLAttributes<HTMLDivElement>;
