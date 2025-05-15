import { TableRowType } from '@/components/Table/tableTypes';
import { RowActions } from '@/components/Table/tableRows/RowActions';

type Props = {
  item: TableRowType<'assignment'>;
  role?: string;
};

export function RowAssignment({ item, role }: Props) {
  return (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
      <RowActions item={item} section={'assignment'} role={role} />
    </tr>
  );
}
