import { InputState } from '@/app/_store/inputStore';

export const getInputHandlers = (type: 'family' | 'profile' | 'familyEdit', state: InputState) => {
  switch (type) {
    case 'family':
      return {
        currentText: state.inputFamilyText,
        setText: state.setInputFamilyText,
      };
    case 'profile':
      return {
        currentText: state.inputProfileText,
        setText: state.setInputProfileText,
      };
    case 'familyEdit':
      return {
        currentText: state.inputFamilyEditText,
        setText: state.setInputFamilyEditText,
      };
    default:
      return {
        currentText: '',
        setText: () => {},
      };
  }
};
