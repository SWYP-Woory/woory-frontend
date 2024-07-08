import InputChat from '@/components/input/InputChat';
import InputText from '@/components/input/InputText';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

function Inputs() {
  const [inputValue, setInputValue] = useState<string>('');
  const maxLength = 10;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= maxLength) {
      setInputValue(input);
    }
  };

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-12">
        <h1 className="text-20">Input Text</h1>
        <InputText value="Input" hasLimit={false} maxLength={maxLength} placeholder="txt_guide" />
        <InputText value="Input" hasLimit maxLength={maxLength} placeholder="txt_guide" />
        <InputText value="" hasLimit maxLength={maxLength} placeholder="txt_guide" />
      </div>
      <div className="flex flex-col gap-12">
        <h1 className="text-20">Input Chat</h1>
        <InputChat value={inputValue} maxLength={maxLength} placeholder="이야기를 적어주세요" onChange={handleChange} />
      </div>
    </div>
  );
}

const meta: Meta<typeof Inputs> = {
  title: 'Inputs',
  component: Inputs,
};

export default meta;

type Story = StoryObj<typeof Inputs>;

export const Default: Story = {
  args: {},
};
