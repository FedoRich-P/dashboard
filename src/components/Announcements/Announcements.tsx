import { announcementsDB } from '@/components/Announcements/announcementsItemDB';
import AnnouncementsItem from '@/components/Announcements/AnnouncementsItem';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

export default function Announcements() {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Announcements</h2>
        <Link href={'/'} className="text-base flex items-center gap-2 text-gray-400">
          View All
          <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
        </Link>
      </div>
      <ul className="flex flex-col gap-4 mt-4">
        {announcementsDB.map((announcement) => (
          <AnnouncementsItem key={announcement.id} {...announcement} />
        ))}
      </ul>
    </div>
  );
}
