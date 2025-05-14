import Pagination from '@/components/Pagination';
import { studentsData } from '@/lib/data';
import Table from '@/components/Table/Table';
import { studentColumns } from '@/components/Table/tableTypes';
import { RowStudents } from '@/components/Table/tableRows/RowStudents';
import { TableHeader } from '@/components/Table/TableHeader';

export default function StudentsListPage() {
  return (
    <section className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <TableHeader title={'All Students'} />
      <Table columns={studentColumns}>
        {studentsData.map((item) => (
          <RowStudents
            key={item.id}
            item={item}
            subItem={{ studentId: item.studentId, grade: item.grade, class: item.class }}
          />
        ))}
      </Table>
      <Pagination />
    </section>
  );
}
