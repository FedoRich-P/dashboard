'use client';

import { Search, MessageCircle, Megaphone, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type NavbarProps = {
  avatarUrl?: string;
};

export function Navbar({ avatarUrl }: NavbarProps) {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm">
      <form
        className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-mainText px-2"
        role="search">
        <Search className="w-4 h-4 text-gray-500" aria-hidden="true" />
        <label htmlFor="navbar-search" className="sr-only">
          Search
        </label>
        <input
          id="navbar-search"
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none text-sm"
        />
      </form>

      <div className="flex items-center justify-end w-full gap-6">
        <nav aria-label="Quick actions">
          <ul className="flex items-center gap-6">
            <li>
              <button
                type="button"
                aria-label="Messages"
                className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer focus:ring-2 focus:ring-offset-1 focus:ring-primary">
                <MessageCircle className="w-5 h-5 text-gray-600" aria-hidden="true" />
              </button>
            </li>
            <li>
              <button
                type="button"
                aria-label="Announcements"
                className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer focus:ring-2 focus:ring-offset-1 focus:ring-primary">
                <Megaphone className="w-5 h-5 text-gray-600" aria-hidden="true" />
                <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
                  1
                </span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col text-right">
          <span className="text-xs font-medium leading-3">John Doe</span>
          <span className="text-[10px] text-mainText">Admin</span>
        </div>

        <Link href={'/'}
          className="relative bg-white rounded-full w-10 h-10 border border-primary p-2 flex items-center justify-center cursor-pointer focus:ring-1 focus:ring-offset-1 focus:ring-primary">
          {avatarUrl ? (
            <Image src={avatarUrl} alt="Avatar" className="w-9 h-9 rounded-full object-cover" />
          ) : (
            <User className="w-7 h-7 text-primary" aria-hidden="true" />
          )}
        </Link>
      </div>
    </header>
  );
}
