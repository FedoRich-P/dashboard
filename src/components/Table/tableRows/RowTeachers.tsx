import { BaseRow, RowTeachersType } from '@/components/Table/tableTypes';
import { TableRowLayout } from '@/components/Table/tableRows/TableRowLayout';

type Props = {
  item: BaseRow;
  subItem: RowTeachersType;
};

export function RowTeachers({ item, subItem }: Props) {
  const { classes, subjects, teacherId } = subItem;
  return (
    <TableRowLayout item={item}>
      <td className="hidden md:table-cell">{teacherId}</td>
      <td className="hidden md:table-cell">{subjects.join(',')}</td>
      <td className="hidden md:table-cell max-w-[120px] overflow-x-auto whitespace-nowrap">{classes?.join(',')}</td>
    </TableRowLayout>
  );
}
