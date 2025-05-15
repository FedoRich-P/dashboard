import BigCalendar from '@/components/BigCalendar/BigCalendar';
import Announcements from '@/components/Announcements/Announcements';
import { announcementsDB } from '@/components/Announcements/announcementsItemDB';

export default function TeacherPage() {
  return (
    <main className="p-4 flex-1 flex gap-4 flex-col xl:flex-row">
      <section className="w-full xl:w-2/3">
        <h1 className={'sr-only'}>Teacher Page</h1>
        <div className="h-full bg-white p-4 rounded-md">
          <h2 className="text-xl font-semibold">Schedule</h2>
          <BigCalendar/>
        </div>
      </section>
      <aside className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements announcements={announcementsDB} />
      </aside>
    </main>
  );
}
