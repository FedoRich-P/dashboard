import EventCalendar from '@/components/EventCalendar/EventCalendar';
import Announcements from '@/components/Announcements/Announcements';
import BigCalendar from '@/components/BigCalendar/BigCalendar';

export default function StudentPage() {
  return (
    <main className="p-4 flex gap-4 flex-col xl:flex-row">
      <section className="w-full xl:w-2/3">
        <h1 className={'sr-only'}>Student Page</h1>
        <div className="h-full bg-white p-4 rounded-md">
          <h2 className="text-xl font-semibold">Schedule (4A)</h2>
          <BigCalendar/>
        </div>
      </section>
      <aside className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </aside>
    </main>
  );
}