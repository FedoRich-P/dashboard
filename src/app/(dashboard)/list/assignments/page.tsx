import Pagination from '@/components/Pagination';
import { assignmentsData } from '@/lib/data';
import Table from '@/components/Table/Table';
import { assignmentsColumns } from '@/components/Table/tableTypes';
import { TableHeader } from '@/components/Table/TableHeader';
import { RowAssignment } from '@/components/Table/tableRows/RowAssignment';

export default function AssignmentListPage() {
  return (
    <section className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <TableHeader title={'All Assignments'} />
      <Table columns={assignmentsColumns}>
        {assignmentsData.map((item) => (
          <RowAssignment key={item.id} item={item} role={'admin'} />
        ))}
      </Table>
      <Pagination />
    </section>
  );
}
