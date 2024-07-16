import BottomSheet from '@/app/_components/common/bottomSheet/BottomSheet';
import { FamilyMakeType } from '@/type';
import { Meta, StoryObj } from '@storybook/react';

const FAMILY_DATA: FamilyMakeType[] = [
  {
    id: 1,
    familyName: '아빠',
    imageUrl:
      'https://i.namu.wiki/i/TVhPrCLxJzbGXpdogm7oVS9WZnlmCaNjjwjpD0FL2NZIcjCdijUvoAHNJN2svDR7vfJRsjkqE-S4wxxdn6RK1g.webp',
  },
  {
    id: 2,
    familyName: '엄마',
    imageUrl:
      'https://i.namu.wiki/i/LHffmxiKydx4ivGpRC4zWTboagZpkEBdRC3Uu7sAdWjbXNriXlkwYNPUEzz0uJ0NLxQ7VRPsOZI69xNEDQ-5VQ.webp',
  },
  {
    id: 3,
    familyName: '누나',
    imageUrl:
      'https://i.namu.wiki/i/dyqkfe-4nDCHVl3VV3PvZNMTeIfoM3hNZVNbwMLD86BZ20ulGXNnjQ84dVkTX4q8L2TYBLOJBJXBEvOMSptC3Tt1v2DH0R1xDOlFiweBTwtCbWkvqeiycN_25jk4GZQWh5Sd2snKcOnjgzHBvL21mQ.webp',
  },
  {
    id: 4,
    familyName: '남동생',
    imageUrl:
      'https://i.namu.wiki/i/nd5n1qmEbjc4yj1OnQCG1RPWxDNoJcgJk4Fuiat9Qa3tN_py5ZTxP7OjjFxvSEMYheqV923evMlgnreQB4YW5YOHCWd7Wkn345TCfm2C2DojuxSij83TBdVse_zuZNaetPC4bGqco2dg20M6TNmnQw.webp',
  },
];
function BottomSheets() {
  return (
    <div className="inset-0 fixed flex flex-col gap-16 bg-modalBackground min-h-screen">
      <BottomSheet sheetType="home" />
      <BottomSheet sheetType="inquiry" />
      <BottomSheet sheetType="familySelect" familyData={FAMILY_DATA} />
    </div>
  );
}

const meta: Meta<typeof BottomSheets> = {
  title: 'BottomSheet',
  component: BottomSheets,
};

export default meta;

type Story = StoryObj<typeof BottomSheets>;

export const Default: Story = {};
