import { EventType } from '@/components/Table/tableTypes';

type Props = {
  item: EventType;
  role?: string;
};

export function RowEvent({ item, role }: Props) {
  return (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden md:table-cell">{item.startTime}</td>
      <td className="hidden md:table-cell">{item.endTime}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === 'admin' && (
            <>
              admin
              {/*<FormModal table="event" type="update" data={item} />*/}
              {/*<FormModal table="event" type="delete" id={item.id} />*/}
            </>
          )}
        </div>
      </td>
    </tr>
  );
}
