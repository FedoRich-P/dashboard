import BigCalendar from '@/components/BigCalendar/BigCalendar';
import Announcements from '@/components/Announcements/Announcements';

export default function TeacherPage() {
  return (
    <section className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      <h1 className={'sr-only'}>Teacher Page</h1>
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h2 className="text-xl font-semibold">Schedule</h2>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </section>
  );
}
