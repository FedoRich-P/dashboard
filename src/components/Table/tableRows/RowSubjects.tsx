import { RowSubjectType } from '@/components/Table/tableTypes';

type Props = {
  item: RowSubjectType;
  role?: string;
};

export function RowSubjects({ item, role }: Props) {
  return (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.teachers.join(',')}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === 'admin' && (
            <>
              fff
              {/*<FormModal table="subject" type="update" data={item} />*/}
              {/*<FormModal table="subject" type="delete" id={item.id} />*/}
            </>
          )}
        </div>
      </td>
    </tr>
  );
}
