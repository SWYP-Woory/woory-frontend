'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const AccountDeletionContent = dynamic(
  () => import('@/app/(afterLogin)/(main)/mypage/account-deletion/_components/AccountDeletionContent'),
  {
    ssr: false,
  },
);

export default function AccountDeletion() {
  return (
    <div>
      <AccountDeletionContent />
    </div>
  );
}
