import Pagination from '@/components/Pagination';
import { subjectsData } from '@/lib/data';
import Table from '@/components/Table/Table';
import { subjectsColumns } from '@/components/Table/tableTypes';
import { RowSubjects } from '@/components/Table/tableRows/RowSubjects';
import { TableHeader } from '@/components/Table/TableHeader';
import { role } from '@/components/Menu/menuItems';

export default function ClassesListPage() {
  return (
    <section className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <TableHeader title={'All Classes'} />
      <Table columns={subjectsColumns}>
        {subjectsData.map((item) => (
          <RowSubjects key={item.id} item={item} role={role} />
        ))}
      </Table>
      <Pagination />
    </section>
  );
}
