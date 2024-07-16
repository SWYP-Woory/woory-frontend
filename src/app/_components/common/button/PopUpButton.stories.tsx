import PopUpButton from '@/app/_components/common/button/PopUpButton';
import { Meta, StoryObj } from '@storybook/react';

function PopUpButtons() {
  const handleClick = () => {};

  return (
    <div className="flex flex-col">
      <section>
        <h2 className="text-12">Primary Button</h2>
        <div className="flex gap-4">
          <PopUpButton onClick={handleClick} text="확인" textColor="white" colorType="primary" size="small" />
          <PopUpButton onClick={handleClick} text="확인" textColor="white" colorType="primary" size="large" />
        </div>
      </section>
      <section>
        <h2 className="text-12">MidGrey Button</h2>
        <div className="flex gap-4">
          <PopUpButton onClick={handleClick} text="취소" textColor="midGrey" colorType="lightGrey" size="small" />
          <PopUpButton onClick={handleClick} text="취소" textColor="midGrey" colorType="lightGrey" size="large" />
        </div>
      </section>
    </div>
  );
}

const meta: Meta<typeof PopUpButtons> = {
  title: 'PopUpButton',
  component: PopUpButtons,
};

export default meta;

type Story = StoryObj<typeof PopUpButtons>;

export const Buttons: Story = {};
