import FormModal, { ModalTable } from '@/components/FormModal';
import { TableRowType } from '@/components/Table/tableTypes';

type Props<T extends ModalTable> = {
  item: TableRowType<T>;
  role?: string;
  section: T;
};

export function RowActions<T extends ModalTable>({ item, role, section }: Props<T>) {
  return (
    <td>
      <div className="flex items-center justify-evenly">
        {role === 'admin' && (
          <>
            <FormModal table={section} type="update" data={item} />
            <FormModal table={section} type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
  );
}