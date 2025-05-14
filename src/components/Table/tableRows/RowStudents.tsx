import { BaseRow, RowStudentsType } from '@/components/Table/tableTypes';
import { TableRowLayout } from '@/components/Table/tableRows/TableRowLayout';

type Props = {
  item: BaseRow;
  subItem: RowStudentsType;
};

export function RowStudents({ item, subItem }: Props) {
 const { studentId, grade} = subItem;
  return (
    <TableRowLayout item={item} studentClass={subItem.class}>
      <td className="hidden md:table-cell">{studentId}</td>
      <td className="hidden md:table-cell">{grade}</td>
    </TableRowLayout>
  );
}
