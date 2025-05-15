import Link from 'next/link';
import Announcements from '@/components/Announcements/Announcements';
import { Performance } from '@/components/Performance';
import { announcementsDB } from '@/components/Announcements/announcementsItemDB';

export function MainPageSidebar() {
  return (
    <aside className="w-full xl:w-1/3 flex flex-col gap-4">
      <div className="bg-white p-4 rounded-md">
        <h3 className="text-xl font-semibold">Shortcuts</h3>
        <ul className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
          <li className="p-3 rounded-md bg-customSkyLight">
            <Link href="/public">Teacher&apos;s Classes</Link>
          </li>
          <li className="p-3 rounded-md bg-customPurpleLight">
            <Link href="/public">Teacher&apos;s Students</Link>
          </li>
          <li className="p-3 rounded-md bg-customYellowLight">
            <Link href="/public">Teacher&apos;s Lessons</Link>
          </li>
          <li className="p-3 rounded-md bg-pink-50">
            <Link href="/public">Teacher&apos;s Exams</Link>
          </li>
          <li className="p-3 rounded-md bg-customSkyLight">
            <Link href="/public">Teacher&apos;s Assignments</Link>
          </li>
        </ul>
      </div>
      <Performance />
      <Announcements announcements={announcementsDB} />
    </aside>
  );
}