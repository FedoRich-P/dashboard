import Pagination from '@/components/Pagination';
import { examsData } from '@/lib/data';
import Table from '@/components/Table/Table';
import { examsColumns } from '@/components/Table/tableTypes';
import { TableHeader } from '@/components/Table/TableHeader';
import { RowExams } from '@/components/Table/tableRows/RowExams';
import { role } from '@/components/Menu/menuItems';

export default function ExamsListPage() {
  return (
    <section className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <TableHeader title={'All Exams'} />
      <Table columns={examsColumns}>
        {examsData.map((item) => (
          <RowExams key={item.id} item={item} role={role} />
        ))}
      </Table>
      <Pagination />
    </section>
  );
}
