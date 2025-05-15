import dynamic from 'next/dynamic';
import { ModalTable } from '@/components/FormModal';
import ParentsForm from '@/components/forms/ParentsForm';

const TeacherForm = dynamic(() => import('./TeacherForm'), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import('./StudentForm'), {
  loading: () => <h1>Loading...</h1>,
});

type Props = {
  table: ModalTable;
  type: 'create' | 'update' | 'delete';
  id?: number;
  data?: any;
}

const forms: {
  [key: string]: (type: 'create' | 'update', data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
  parent: (type, data) => <ParentsForm type={type} data={data} />,
};


export function FormComponent({type, id, table, data}:Props) {
  return type === 'delete' && id ? (
    <form action="" className="p-5 flex flex-col gap-3">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
      <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">Delete</button>
    </form>
  ) : type === 'create' || type === 'update' ? (
    forms[table](type, data)
  ) : (
    'Form not found!'
  );
}