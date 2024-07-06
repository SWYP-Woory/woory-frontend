import ActiveCheckBoxIcon from '@/assets/icons/checkbox/active-checkbox.svg';
import DefaultCheckBoxIcon from '@/assets/icons/checkbox/default-checkbox.svg';
import DisabledCheckBoxIcon from '@/assets/icons/checkbox/disabled-checkbox.svg';
import { ReactNode } from 'react';

interface Props {
  isChecked?: boolean;
  isDisabled?: boolean;
  setIsChecked?: any;
  children?: ReactNode;
}

export default function Checkbox({ isChecked, isDisabled, setIsChecked, children }: Props) {
  const handleClick = (value: boolean) => {
    setIsChecked(value);
  };

  if (isDisabled) {
    return <DisabledCheckBoxIcon width="2rem" height="2rem" />;
  }

  return (
    <label htmlFor="checkbox" className="flex cursor-pointer items-center">
      {isChecked ? (
        <button aria-label="checkbox-button" type="button" onClick={() => handleClick(false)}>
          <ActiveCheckBoxIcon width="2rem" height="2rem" />
        </button>
      ) : (
        <button aria-label="checkbox-button" type="button" onClick={() => handleClick(true)}>
          <DefaultCheckBoxIcon width="2rem" height="2rem" />
        </button>
      )}
      {children}
    </label>
  );
}
