'use client';

import ModalsForm from '@/components/forms/ModalsForm';

type Props = {
  type: 'create' | 'update';
  data?: any;
};

export default function ParentsForm({ type, data }: Props) {
  return <ModalsForm role={'parents'} type={type} data={data} />;
}
