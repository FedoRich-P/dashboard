import { teachersData } from '@/lib/data';
import Table from '@/components/Table/Table';
import Pagination from '@/components/Pagination';
import { RowTeachers } from '@/components/Table/tableRows/RowTeachers';
import { teachersColumns } from '@/components/Table/tableTypes';
import { TableHeader } from '@/components/Table/TableHeader';
import { role } from '@/components/Menu/menuItems';

export default function TeacherListPage() {
  return (
    <section className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <TableHeader title={'All Teachers'} role={role} />
      <Table columns={teachersColumns}>
        {teachersData.map((item) => (
          <RowTeachers
            key={item.id}
            item={item}
            subItem={{ teacherId: item.teacherId, classes: item.classes, subjects: item.subjects }}
          />
        ))}
      </Table>
      <Pagination />
    </section>
  );
}
