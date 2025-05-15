import Image from 'next/image';
import { View } from 'lucide-react';
import Link from 'next/link';
import { role } from '@/components/Menu/menuItems';
import { BaseRow } from '@/components/Table/tableTypes';
import { formatPhoneRu } from '@/shared/lib/format/formatPhoneRu';
import { ReactNode } from 'react';
import FormModal, { ModalTable } from '@/components/FormModal';

type Props = {
  item: BaseRow;
  studentClass?: string;
  children: ReactNode;
  view?: boolean;
  section: ModalTable;
};

export function TableRowLayout({ item, studentClass, children, view = false, section }: Props) {
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
          {view && (
            <Link
              href={`/list/teachers/${id}`}
              className="p-2 flex items-center justify-center rounded-md bg-customSky transition-all duration-500 hover:text-primary">
              <View className="w-5 h-5 text-inherit" aria-hidden="true" />
            </Link>
          )}
          {role === 'admin' && (
            <>
              <FormModal table={section} type="update" id={item.id} />
              <FormModal table={section} type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
}
