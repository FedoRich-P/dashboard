import { AssignmentsType } from '@/components/Table/tableTypes';

type Props = {
  item: AssignmentsType;
  role?: string;
};

export function RowAssignment({ item, role }: Props) {
  return (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === 'admin' ||
            (role === 'teacher' && (
              <>
                {/*<FormModal table="assignment" type="update" data={item} />*/}
                {/*<FormModal table="assignment" type="delete" id={item.id} />*/}
              </>
            ))}
        </div>
      </td>
    </tr>
  );
}
