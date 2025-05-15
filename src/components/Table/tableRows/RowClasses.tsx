import { TableRowType } from '@/components/Table/tableTypes';
import { RowActions } from '@/components/Table/tableRows/RowActions';

type Props = {
  item: TableRowType<'class'>;
  role?: string;
};

export function RowClasses({ item, role }: Props) {
  return (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <RowActions item={item} section={'class'} role={role} />
    </tr>
  );
}
