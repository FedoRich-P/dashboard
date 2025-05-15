import { TableRowType } from '@/components/Table/tableTypes';
import { RowActions } from '@/components/Table/tableRows/RowActions';

type Props = {
  item: TableRowType<'event'>;
  role?: string;
};

export function RowEvent({ item, role }: Props) {
  return (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
      <RowActions item={item} section={'event'} role={role} />
    </tr>
  );
}
