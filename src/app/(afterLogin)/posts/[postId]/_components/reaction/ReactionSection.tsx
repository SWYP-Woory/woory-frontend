'use client';

import ReactionMenu from '@/app/(afterLogin)/posts/[postId]/_components/reaction/ReactionMenu';
import AddReactionChip from '@/app/(afterLogin)/posts/[postId]/_components/reaction/chip/AddReactionChip';
import ReactionChip from '@/app/(afterLogin)/posts/[postId]/_components/reaction/chip/ReactionChip';
import { postData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { ReactionDataType, ReactionType } from '@/type';
import { useState } from 'react';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

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
    <div className="flex w-full gap-8 relative ">
      <div className="relative">
        <AddReactionChip isClicked={isClicked} onClick={handleAddClicked} />
        <div className="absolute top-[4.0rem] left-0 z-20">
          <ReactionMenu onClick={handleReactionChipClick} isClicked={isClicked} />
        </div>
      </div>
      <Swiper slidesPerView="auto" spaceBetween={8} freeMode modules={[FreeMode]} className="w-full h-full">
        {reactions.map((reaction, index) => (
          <SwiperSlide style={{ width: 'auto' }} className={`${index === reactions.length - 1 ? 'mr-16' : ''}`}>
            <ReactionChip
              reactionType={reaction.reactionType}
              count={reaction.count}
              isActive={reaction.isActive}
              onClick={handleReactionChipClick}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
