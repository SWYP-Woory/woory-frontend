import InputChat from '@/app/_components/input/InputChat';
import InputText from '@/app/_components/input/InputText';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

function Inputs() {
  const [inputTextValue, setInputTextValue] = useState<string>('Input');
  const [inputChatValue, setInputChatValue] = useState<string>('');
  const maxLength = 10;

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= maxLength) {
      setInputTextValue(input);
    }
  };

  const handleChatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= maxLength) {
      setInputChatValue(input);
    }
  };

  const handleClick = () => {};

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col gap-12">
        <h1 className="text-20">Input Text</h1>
        <InputText
          value="Input"
          hasLimit={false}
          maxLength={maxLength}
          placeholder="txt_guide"
          onChange={handleTextChange}
        />
        <InputText
          value={inputTextValue}
          hasLimit
          maxLength={maxLength}
          placeholder="txt_guide"
          onChange={handleTextChange}
        />
        <InputText value="" hasLimit maxLength={maxLength} placeholder="txt_guide" onChange={handleTextChange} />
      </div>
      <div className="flex flex-col gap-12">
        <h1 className="text-20">Input Chat</h1>
        <InputChat
          postId={0}
          value={inputChatValue}
          maxLength={maxLength}
          placeholder="이야기를 적어주세요"
          onChange={handleChatChange}
          replyingCommentId={0}
          onReplyClick={handleClick}
        />
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
