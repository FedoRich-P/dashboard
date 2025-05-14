import {ReactNode} from "react";
import Link from "next/link";
import Image from 'next/image';
import Menu from "@/components/Menu/Menu";
import { Navbar } from '@/components/Navbar';

type Props = {
    children: ReactNode
}

export default function DashboardLayout({ children }: Props) {
    return <div className={'h-screen flex'}>
        <aside className={'w-[15%] md:w-[8%] lg:w-[16%] xl:w-[15%] p-4'}>
            <Link href={'/'} className={'flex items-center justify-center gap-2 lg:justify-start overflow-x-hidden'}>
                <Image src="/logo.png" width={32} height={32} alt={'logo'}/>
                <span className={'hidden text-nowrap lg:block'}>School Dashboard</span>
            </Link>
            <Menu>

            </Menu>
        </aside>
        <div className={'w-[85%] md:w-[92%] lg:w-[84%] xl:w-[85%] bg-[#f7f8fa] overflow-y-auto flex flex-col gap-3'}>
          <Navbar/>
          {children}
        </div>
    </div>
}
