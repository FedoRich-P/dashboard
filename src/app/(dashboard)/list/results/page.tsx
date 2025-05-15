import Pagination from '@/components/Pagination';
import { resultsData } from '@/lib/data';
import Table from '@/components/Table/Table';
import { ResultsColumns } from '@/components/Table/tableTypes';
import { TableHeader } from '@/components/Table/TableHeader';
import { RowResults } from '@/components/Table/tableRows/RowResults';
import { role } from '@/components/Menu/menuItems';

export default function ResultsListPage() {
  return (
    <section className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <TableHeader title={'All Results'} />
      <Table columns={ResultsColumns}>
        {resultsData.map((item) => (
          <RowResults key={item.id} item={item} role={role} />
        ))}
      </Table>
      <Pagination />
    </section>
  );
}
