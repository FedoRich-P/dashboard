import Pagination from '@/components/Pagination';
import { parentsData } from '@/lib/data';
import Table from '@/components/Table/Table';
import { parentsColumns } from '@/components/Table/tableTypes';
import { RowParents } from '@/components/Table/tableRows/RowParents';
import { TableHeader } from '@/components/Table/TableHeader';

export default function StudentsListPage() {
  return (
    <section className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <TableHeader title={'All Parents'} />
      <Table columns={parentsColumns}>
        {parentsData.map((item) => (
          <RowParents key={item.id} item={item} subItem={{ students: item.students }} />
        ))}
      </Table>
      <Pagination />
    </section>
  );
}
