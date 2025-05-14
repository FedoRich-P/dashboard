import { UserCard } from '@/components/UserCard';
import EventCalendar from '@/components/EventCalendar/EventCalendar';
import Announcements from '@/components/Announcements/Announcements';
import CountChart from '@/components/CountChart';
import AttendanceChart from '@/components/AttendanceChart';
import FinanceChart from '@/components/FinanceChart/FinanceChart';
import { cardData } from '@/constants/adminCardsDB';


export default function AdminPage() {
  return (
    <main className="p-4 flex gap-4 flex-col md:flex-row">
      <section className="w-full lg:w-2/3 flex flex-col gap-8">
        <h1 className={'sr-only'}>Admin Page</h1>
        <ul className="grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {cardData.map((card) => <UserCard key={card.id} {...card} />)}
        </ul>
        <div className="flex gap-4 flex-col lg:flex-row">
          <CountChart className={'w-full lg:w-1/3 h-[450px]'} boysCount={25756} girlsCount={10072} />
          <AttendanceChart className={'w-full lg:w-2/3 h-[450px]'} />
        </div>
        <FinanceChart className={'w-full h-[500px]'} />
      </section>

      <aside className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </aside>
    </main>
  );
}
