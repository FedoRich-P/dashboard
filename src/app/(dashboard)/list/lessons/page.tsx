import Pagination from '@/components/Pagination';
import { lessonsData } from '@/lib/data';
import Table from '@/components/Table/Table';
import { lessonsColumns } from '@/components/Table/tableTypes';
import { TableHeader } from '@/components/Table/TableHeader';
import { RowLessons } from '@/components/Table/tableRows/RowLessons';
import { role } from '@/components/Menu/menuItems';

export default function SubjectListPage() {
  return (
    <section className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <TableHeader title={'All Lessons'} />
      <Table columns={lessonsColumns}>
        {lessonsData.map((item) => (
          <RowLessons key={item.id} item={item} role={role} />
        ))}
      </Table>
      <Pagination />
    </section>
  );
}
