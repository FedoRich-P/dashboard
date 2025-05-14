import { ExamType } from '@/components/Table/tableTypes';

type Props = {
  item: ExamType;
  role?: string;
};

export function RowExams({ item, role }: Props) {
  return (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === 'admin' ||
            (role === 'teacher' && (
              <>
                {/*<FormModal table="exam" type="update" data={item} />*/}
                {/*<FormModal table="exam" type="delete" id={item.id} />*/}
              </>
            ))}
        </div>
      </td>
    </tr>
  );
}
