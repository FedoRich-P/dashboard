'use client';

import ModalsForm from '@/components/forms/ModalsForm';

type Props = {
  type: 'create' | 'update';
  data?: any;
};

export default function TeachersForm({ type, data }: Props) {
  return <ModalsForm role={'teacher'} type={type} data={data} />;
}
