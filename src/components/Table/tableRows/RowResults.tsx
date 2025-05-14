import { ResultsType } from '@/components/Table/tableTypes';

type Props = {
  item: ResultsType;
  role?: string;
};

export function RowResults({ item, role }: Props) {
  return (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.student}</td>
      <td className="hidden md:table-cell">{item.score}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="flex items-center gap-2">
        {role === 'admin' ||
          (role === 'teacher' && (
            <>
              {/*<FormModal table="result" type="update" data={item} />*/}
              {/*<FormModal table="result" type="delete" id={item.id} />*/}
            </>
          ))}
      </td>
    </tr>
  );
}
