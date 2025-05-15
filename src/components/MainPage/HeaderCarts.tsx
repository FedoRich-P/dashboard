import Image from 'next/image';

export function HeaderCarts() {
  const headerCarts = [
    {id: 1, title: "Attendance", src: "/singleAttendance.png", count: '90%' },
    {id: 2, title: "Branches", src: "/singleBranch.png", count: 2 },
    {id: 3, title: 'Lessons', src: "/singleLesson.png", count: 6 },
    {id: 4, title: "Classes", src: "/singleClass.png", count: 10 },
  ]

  return (
    <ul className="grid grid-cols-2 gap-2 h-full">
      {headerCarts.map((headerCart) => (
        <li key={headerCart.id} className="bg-white p-4 rounded-md flex justify-between gap-4 w-full">
          <Image src={headerCart.src} alt={headerCart.title} width={45} height={45} className="w-9 h-9" />
          <div className="">
            <h3 className="text-xl font-semibold">{headerCart.count}</h3>
            <span className="text-sm text-gray-400">{headerCart.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}