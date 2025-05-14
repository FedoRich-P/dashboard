import Pagination from '@/components/Pagination';
import { eventsData } from '@/lib/data';
import Table from '@/components/Table/Table';
import { eventColumns } from '@/components/Table/tableTypes';
import { TableHeader } from '@/components/Table/TableHeader';
import { RowEvent } from '@/components/Table/tableRows/RowEvent';

export default function EventListPage() {
  return (
    <section className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <TableHeader title={'All Events'} />
      <Table columns={eventColumns}>
        {eventsData.map((item) => (
          <RowEvent key={item.id} item={item} role={'admin'} />
        ))}
      </Table>
      <Pagination />
    </section>
  );
}
