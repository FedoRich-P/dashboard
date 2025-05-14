export default function Pagination() {
  return (
    <div className="p-4 flex items-center justify-evenly text-gray-500">
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <ul className="flex items-center gap-2 text-sm">
        <li>
          <button className="p-2 rounded-sm bg-customSky">1</button>
        </li>
        <li>
          <button className="p-2 rounded-sm ">2</button>
        </li>
        <li>
          <button className="p-2 rounded-sm ">3</button>
        </li>
        ...
        <li>
          <button className="p-2 rounded-sm ">10</button>
        </li>
      </ul>
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
 }