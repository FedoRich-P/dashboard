import Pagination from '@/components/Pagination';
import { classesData } from '@/lib/data';
import Table from '@/components/Table/Table';
import { classesColumns } from '@/components/Table/tableTypes';
import { TableHeader } from '@/components/Table/TableHeader';
import { RowClasses } from '@/components/Table/tableRows/RowClasses';

export default function SubjectListPage() {
  return (
    <section className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <TableHeader title={'All Subjects'} />
      <Table columns={classesColumns}>
        {classesData.map((item) => (
          <RowClasses key={item.id} item={item} role={'admin'} />
        ))}
      </Table>
      <Pagination />
    </section>
  );
}
