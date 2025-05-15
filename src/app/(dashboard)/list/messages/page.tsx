import Pagination from '@/components/Pagination';
import Table from '@/components/Table/Table';
import { assignmentsColumns } from '@/components/Table/tableTypes';
import { TableHeader } from '@/components/Table/TableHeader';
import { RowAssignment } from '@/components/Table/tableRows/RowAssignment';
import { role } from '@/components/Menu/menuItems';

export default function MessagesListPage() {
  return (
    <section className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <TableHeader title={'All Messages'} />
      <Table columns={assignmentsColumns}>
        {[].map((item, index) => (
          <RowAssignment key={index} item={item} role={role} />
        ))}
      </Table>
      <Pagination />
    </section>
  );
}
