import { formatPhoneRu } from '@/shared/lib/format/formatPhoneRu';
import { CalendarDays, Droplet, Mails, Phone } from 'lucide-react';

export type MainCartProps = {
  blood: string;
  data: string;
  mail: string;
  phone: string;
};

export function MainCartInfo({ blood, mail, phone, data }: MainCartProps) {
  return (
    <ul className="flex flex-wrap gap-3 text-xs font-medium bg-customPurple p-3 rounded-md overflow-hidden">
      <li className="w-full md:w-[48%] lg:w-full 2xl:w-[48%] flex items-center gap-2 border-b border-customPurpleLight pb-1">
        <Droplet className={'w-4 h-4'} />
        <span>{blood}</span>
      </li>
      <li className="w-full md:w-[48%] lg:w-full 2xl:w-[48%] flex items-center gap-2 border-b border-customPurpleLight pb-1">
        <CalendarDays className={'w-4 h-4'} />
        <span>{data}</span>
      </li>
      <li className="w-full md:w-[48%] lg:w-full 2xl:w-[48%] flex items-center gap-2 border-b border-customPurpleLight pb-1">
        <Mails className={'w-4 h-4'} />
        <a href={`mailto:${mail}`} className={'line-clamp-1'}>
          {mail}
        </a>
      </li>
      <li className="w-full md:w-[48%] lg:w-full 2xl:w-[48%] flex items-center gap-2 border-b border-customPurpleLight pb-1">
        <Phone className={'w-4 h-4'} />
        <a href={`tell:${phone}`} className={'line-clamp-1'}>
          {formatPhoneRu(phone)}
        </a>
      </li>
    </ul>
  );
}
