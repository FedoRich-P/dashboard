import { LessonType } from '@/components/Table/tableTypes';

type Props = {
  item: LessonType;
  role?: string;
};

export function RowLessons({ item, role }: Props) {
  return (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === 'admin' && (
            <>
              {/*<FormModal table="lesson" type="update" data={item} />*/}
              {/*<FormModal table="lesson" type="delete" id={item.id} />*/}
            </>
          )}
        </div>
      </td>
    </tr>
  );
}
