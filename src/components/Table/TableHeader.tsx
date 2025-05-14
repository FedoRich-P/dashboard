import SearchInputForm from '@/components/SearchInputForm';
import { FilterIcon, Plus, SortAscIcon } from 'lucide-react';

type Props = {
  title: string;
  role?: string;
};

export function TableHeader({ title, role }: Props) {
  return (
    <header className="flex items-center justify-between mb-2">
      <h1 className="hidden md:block text-lg font-semibold">{title}</h1>
      <nav className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <SearchInputForm className={'flex w-full md:w-auto'} placeholder={'Search from table ...'} />
        <ul className="flex items-center gap-4 self-end">
          <li>
            <button className="btn-sort">
              <FilterIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </li>
          <li>
            <button className="btn-sort">
              <SortAscIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </li>
          {
            role === 'admin' && (
              <li>
                <button className="btn-sort">
                  <Plus className="w-6 h-6" aria-hidden="true" />
                </button>
              </li>
            )
            // <FormModal table="teacher" type="create"/>
          }
        </ul>
      </nav>
    </header>
  );
}