'use client';

import ReactionMenu from '@/app/(afterLogin)/posts/[postId]/_components/reaction/ReactionMenu';
import AddReactionChip from '@/app/(afterLogin)/posts/[postId]/_components/reaction/chip/AddReactionChip';
import ReactionChip from '@/app/(afterLogin)/posts/[postId]/_components/reaction/chip/ReactionChip';
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
      {isClicked && (
        <div className={`absolute top-[3.8rem] ${reactions.length < 3 ? 'left-0' : 'right-0'} z-20`}>
          <ReactionMenu />
        </div>
      )}
    </div>
  );
}
