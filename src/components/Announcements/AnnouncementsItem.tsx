type Props = {
  title: string;
  description: string;
  date: string;
};

export default function AnnouncementsItem({ title, description, date }: Props) {
  return (
    <li className="odd:bg-primary even:bg-customSky rounded-md p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-medium">{title}</h2>
        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">{date}</span>
      </div>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
    </li>
  );
}
