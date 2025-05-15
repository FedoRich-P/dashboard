'use client';

import ModalsForm from '@/components/forms/ModalsForm';

type Props = {
  type: 'create' | 'update';
  data?: any;
};

export default function StudentForm({ type, data }: Props) {
  return <ModalsForm role={'student'} type={type} data={data} />;
}
