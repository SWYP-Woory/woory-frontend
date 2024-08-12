'use client';

import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import FamilySelector from '@/app/_components/common/bottomSheet/FamilySelector';
import Loading from '@/app/_components/common/loading/Loading';
import { FamilyMakeType } from '@/type';
import { useEffect, useState } from 'react';

export default function FamilySelect() {
  const [familyData, setFamilyData] = useState<FamilyMakeType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFamilyList = async () => {
      try {
        const res = await getData({ path: apiRoutes.getFamilyList });
        setFamilyData(res.data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    getFamilyList();
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-full">
        <Loading />
      </div>
    );
  }

  return (
    <div className="absolute top-[4.8rem] w-full flex flex-col">
      {familyData?.map((data, index) => <FamilySelector key={data.groupId} index={index} data={data} />)}
      {!familyData || (familyData && familyData.length < 5) ? <FamilySelector index={familyData?.length} /> : null}
    </div>
  );
}
