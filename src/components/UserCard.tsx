import { MoreHorizontal } from 'lucide-react';
import { formatNumber } from '@/shared/lib/format/formatNumber';

type Props = {
  type: string;
  count: number;
  date: string;
};

export const UserCard = ({ type, count, date }: Props) => {
  return (
    <li className="flex flex-col justify-between rounded-2xl odd:bg-primary even:bg-customSky odd:text-customSky even:text-primary p-4 flex-1 min-w-[130px] min-h-[150px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">{new Date(date).toLocaleDateString()}</span>
        <button className={'cursor-pointer'}>
          <MoreHorizontal className="w-7 h-7 " aria-hidden="true" />
        </button>
      </div>
      <div className={'flex justify-between flex-wrap items-center text-secondText overflow-hidden'}>
        <h2 className="capitalize text-base font-medium ">{type}</h2>
        <span className="text-2xl  font-semibold">{formatNumber(count, { compact: false })}</span>
      </div>
    </li>
  );
};

