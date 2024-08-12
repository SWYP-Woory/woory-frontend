'use client';

import ActiveCheckBoxIcon from '@/assets/icons/checkbox/active-checkbox.svg';
import DefaultCheckBoxIcon from '@/assets/icons/checkbox/default-checkbox.svg';
import DisabledCheckBoxIcon from '@/assets/icons/checkbox/disabled-checkbox.svg';
import React, { ReactNode } from 'react';

interface Props {
  isChecked?: boolean;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

export default function Checkbox({ isChecked, isDisabled, onClick, children }: Props) {
  if (isDisabled) {
    return <DisabledCheckBoxIcon width="2rem" height="2rem" />;
  }

  return (
    <label htmlFor="checkbox" className="cursor-pointer">
      {isChecked ? (
        <button aria-label="checkbox-button" type="button" onClick={onClick}>
          <ActiveCheckBoxIcon width="2rem" height="2rem" />
        </button>
      ) : (
        <button aria-label="checkbox-button" type="button" onClick={onClick} className="checkbox-button">
          <DefaultCheckBoxIcon width="2rem" height="2rem" fill="#888888" />
        </button>
      )}
      {children}
    </label>
  );
}
