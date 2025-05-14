import { TableColumnItem } from '@/components/Table/tableTypes';
import { ReactNode } from 'react';

type Props = {
  columns: TableColumnItem[];
  children: ReactNode;
};

export default function Table({ columns, children }: Props) {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
