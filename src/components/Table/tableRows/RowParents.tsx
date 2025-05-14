import { BaseRow, RowParentType } from '@/components/Table/tableTypes';
import { TableRowLayout } from '@/components/Table/tableRows/TableRowLayout';

type Props = {
  item: Omit<BaseRow, 'photo'>;
  subItem: RowParentType;
};

export function RowParents({ item, subItem }: Props) {
  const { students } = subItem;
  return (
    <TableRowLayout item={item}>
      <td className="hidden md:table-cell">{students.join(',')}</td>
    </TableRowLayout>
  );
}
