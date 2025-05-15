import Image from 'next/image';
import BigCalendar from '@/components/BigCalendar/BigCalendar';
import { HeaderCarts } from '@/components/MainPage/HeaderCarts';
import { MainPageSidebar } from '@/components/MainPage/MainPageSidebar';
import { MainCartInfo, MainCartProps } from '@/components/MainPage/MainCartInfo';
import FormModal from '@/components/FormModal';
import { role } from '@/components/Menu/menuItems';

type Props = {
  name: string;
  description: string;
  image: string;
  cartInfo: MainCartProps
}

export default function MainPage({ name, image, cartInfo, description }: Props) {
  return (
    <section className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      <h1 className={'sr-only'}>Main page</h1>
      <div className="w-full xl:w-2/3">
        <header className="w-full grid grid-cols-1 lg:grid-cols-[60%_39%] items-start gap-2">
          <article className="bg-customPurpleLight py-6 px-4 rounded-md w-full flex flex-col md:flex-row gap-4">
            <Image
              src={image}
              alt={name}
              width={144}
              height={144}
              className="h-full w-1/3 rounded-md object-cover object-center"
            />
            <div className="w-full md:w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                {role === "admin" && <FormModal
                  table="teacher"
                  type="update"
                  data={{
                    id: 1,
                    username: "deanguerrero",
                    email: "deanguerrero@gmail.com",
                    password: "password",
                    firstName: "Dean",
                    lastName: "Guerrero",
                    phone: "+1 234 567 89",
                    address: "1234 Main St, Anytown, USA",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  }}
                />}
              </div>
              <p className="text-sm text-gray-500">{description}</p>
              <MainCartInfo {...cartInfo} />
            </div>
          </article>
          <HeaderCarts />
        </header>
        <main className="mt-4 bg-white rounded-md p-4 h-[800px] w-full">
          <h2>Teacher&apos;s Schedule</h2>
          <BigCalendar />
        </main>
      </div>
      <MainPageSidebar />
    </section>
  );
}
