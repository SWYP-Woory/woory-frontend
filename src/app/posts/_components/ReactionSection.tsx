'use client';

import AddReactionChip from '@/app/posts/_components/chip/AddReactionChip';
import ReactionChip from '@/app/posts/_components/chip/ReactionChip';
import ReactionMenu from '@/app/posts/_components/reactionMenu/ReactionMenu';
import { ReactionDataType } from '@/type';
import { useState } from 'react';

interface Props {
  reactions: ReactionDataType[];
}

export default function ReactionSection({ reactions }: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleAddClicked = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="flex w-fit gap-8 relative">
      {reactions.map((reaction) => (
        <ReactionChip reactionType={reaction.reactionType} count={reaction.count} isActive={reaction.isActive} />
      ))}
      <AddReactionChip isClicked={isClicked} onClick={handleAddClicked} />
      <div className="absolute top-[3.8rem] right-0">{isClicked && <ReactionMenu />}</div>
    </div>
  );
}
