import { menuItems, role } from '@/components/Menu/menuItems';
import Link from 'next/link';

export default function Menu() {
  return (
    <nav aria-label="Main menu" className="mt-4 text-sm">
      <ul>
        {menuItems.map(({ title, items }) => (
          <li key={title} className="flex flex-col gap-2">
            <span className="hidden lg:block text-mainText font-light my-4">{title}</span>
            <ul className="flex flex-col gap-2">
              {items
                .filter((item) => item.visible.includes(role))
                .map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className={'nav-link'}>
                      <item.icon className={'w-5 h-5 flex-shrink-0'} aria-hidden="true" />
                      <span className="hidden lg:block">{item.label}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
