import { Search } from 'lucide-react';

type Props = {
  placeholder?: string;
  className?: string;
};

export default function SearchInputForm({ className, placeholder = 'Search...' }: Props) {
  return (
    <form
      className={`items-center gap-2 text-xs rounded-full ring-[1.5px] ring-mainText px-2 ${className}`}
      role="search">
      <Search className="w-4 h-4 text-gray-500" aria-hidden="true" />
      <input
        id="navbar-search"
        type="search"
        placeholder={placeholder}
        className="w-[200px] p-2 bg-transparent outline-none text-sm"
      />
    </form>
  );
}
