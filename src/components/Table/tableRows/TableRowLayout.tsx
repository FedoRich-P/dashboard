import Image from 'next/image';
import { BrushCleaning, View } from 'lucide-react';
import Link from 'next/link';
import { role } from '@/components/Menu/menuItems';
import { BaseRow } from '@/components/Table/tableTypes';
import { formatPhoneRu } from '@/shared/lib/format/formatPhoneRu';
import { ReactNode } from 'react';

type Props = {
  item: BaseRow;
  studentClass?: string;
  children: ReactNode;
};

export function TableRowLayout({ item, studentClass, children }: Props) {
  const { id, name, email, phone, photo, address } = item;
  return (
    <tr className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-customPurpleLight transition-all duration-500">
      <td className="flex items-center gap-4 p-4">
        {photo && (
          <Image
            src={photo}
            alt=""
            width={40}
            height={40}
            className="md:hidden xl:block w-10 h-10 rounded-md object-cover"
          />
        )}
        <div className="flex flex-col">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-xs text-gray-500">{studentClass ? studentClass : email}</p>
        </div>
      </td>
      {children}
      <td className="hidden md:table-cell max-w-[120px] overflow-x-auto whitespace-nowrap">{formatPhoneRu(phone)}</td>
      <td className="hidden md:table-cell max-w-[120px] overflow-x-auto whitespace-nowrap">{address}</td>
      <td>
        <div className="flex justify-evenly items-center gap-3">
          <Link href={`/list/teachers/${id}`}>
            <button className="p-2 flex items-center justify-center text-mainText rounded-md bg-customSky transition-all duration-500 hover:text-primary">
              <View className="w-5 h-5" aria-hidden="true" />
            </button>
          </Link>
          {role === 'admin' && (
            <button className="p-2 flex items-center justify-center text-mainText rounded-md bg-customPurple transition-all duration-500 hover:text-red-600">
              <BrushCleaning className="w-5 h-5" aria-hidden="true" />
            </button>
            // <FormModal table="teacher" type="delete" id={item.id}/>
          )}
        </div>
      </td>
    </tr>
  );
}
