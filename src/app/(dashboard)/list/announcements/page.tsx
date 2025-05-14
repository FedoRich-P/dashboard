import Pagination from '@/components/Pagination';
import { announcementsData } from '@/lib/data';
import Table from '@/components/Table/Table';
import { announcementsColumns } from '@/components/Table/tableTypes';
import { TableHeader } from '@/components/Table/TableHeader';
import { RowAnnouncement } from '@/components/Table/tableRows/RowAnnouncement';

export default function AnnouncementListPage() {
  return (
    <section className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <TableHeader title={'All Announcements'} />
      <Table columns={announcementsColumns}>
        {announcementsData.map((item) => (
          <RowAnnouncement key={item.id} item={item} role={'admin'} />
        ))}
      </Table>
      <Pagination />
    </section>
  );
}
