import Reaction from '@/assets/icons/reaction/reaction.svg';
import ReactionPlus from '@/assets/icons/reaction/reactionPlus.svg';

interface Props {
  isClicked: boolean;
  onClick: () => void;
}

export default function AddReactionChip({ isClicked, onClick }: Props) {
  return (
    <button
      aria-label="Reaction Chip"
      type="button"
      className="flex justify-center gap-[0.2rem] items-center w-[4.0rem] h-[3.2rem] rounded-[2.0rem] bg-bgGrey"
      onClick={onClick}
    >
      <Reaction width="2.0rem" height="2.0rem" fill={isClicked ? '#1ea49a' : `#222222`} />
      <ReactionPlus width="1.0rem" height="1.0rem" fill={isClicked ? '#1ea49a' : `#222222`} />
    </button>
  );
}
