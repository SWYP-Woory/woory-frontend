'use client';

import ReactionMenu from '@/app/(afterLogin)/posts/[postId]/_components/reaction/ReactionMenu';
import AddReactionChip from '@/app/(afterLogin)/posts/[postId]/_components/reaction/chip/AddReactionChip';
import ReactionChip from '@/app/(afterLogin)/posts/[postId]/_components/reaction/chip/ReactionChip';
import { postData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { ReactionDataType, ReactionType } from '@/type';
import { useState } from 'react';

interface Props {
  postId: number;
  reactions: ReactionDataType[];
  fetchReaction: () => Promise<void>;
}

export default function ReactionSection({ reactions, postId, fetchReaction }: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleAddClicked = () => {
    setIsClicked((prev) => !prev);
  };

  const handleReactionChipClick = async (reaction: ReactionType) => {
    try {
      const data = { contentId: postId, reaction };
      await postData({ path: apiRoutes.addReaction, body: data });
      setIsClicked(false);
      fetchReaction();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-fit gap-8 relative">
      {reactions.map((reaction) => (
        <ReactionChip
          reactionType={reaction.reactionType}
          count={reaction.count}
          isActive={reaction.isActive}
          onClick={handleReactionChipClick}
        />
      ))}
      <div className="relative">
        <AddReactionChip isClicked={isClicked} onClick={handleAddClicked} />
        {isClicked && (
          <div className={`absolute top-[3.8rem] ${reactions.length < 3 ? 'left-0' : 'right-0'} z-20`}>
            <ReactionMenu onClick={handleReactionChipClick} />
          </div>
        )}
      </div>
    </div>
  );
}
