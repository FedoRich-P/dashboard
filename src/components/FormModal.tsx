'use client';

import { useEffect, useRef, useState } from 'react';
import { FormComponent } from '@/components/forms/FormComponent';
import { CircleX, Pencil, Plus, Trash2 } from 'lucide-react';
import { useClickOutside } from '@/shared/hooks/useClickOutside';

type Props = {
  table: ModalTable;
  type: 'create' | 'update' | 'delete';
  data?: any;
  id?: number;
};

export default function FormModal({ table, type, data, id }: Props) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const bgColor = type === 'create' ? 'btn-sort' : type === 'update' ? 'bg-customSky' : 'bg-customPurple';
  const iconMap = {
    create: <Plus className="w-5 h-5 text-inherit" />,
    update: <Pencil className="w-5 h-5 text-inherit" />,
    delete: <Trash2 className="w-5 h-5 text-inherit" />,
  };

  useClickOutside({ref: modalRef, callback: () => {setOpen(prevOpen => !prevOpen)}});

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <>
      <button
        className={`flex items-center justify-center rounded-md transition-all duration-500 hover:text-red-600 ${bgColor} p-2`}
        onClick={() => setOpen(true)}>
        {iconMap[type]}
      </button>
      {open && (
        <article className="w-full h-full fixed left-0 top-0 right-0 bottom-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white p-6 overflow-y-auto max-h-full rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <FormComponent type={type} id={id} table={table} data={data} />
            <button className="absolute top-4 text-red-600 right-4 cursor-pointer" onClick={() => setOpen(false)}>
              <CircleX className={'h-7 w-7'} />
            </button>
          </div>
        </article>
      )}
    </>
  );
}

export type ModalTable =
  | 'teacher'
  | 'student'
  | 'parent'
  | 'subject'
  | 'class'
  | 'lesson'
  | 'exam'
  | 'assignment'
  | 'result'
  | 'attendance'
  | 'event'
  | 'announcement';
