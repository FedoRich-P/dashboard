import MainPage from '@/components/MainPage/MainPage';

export default function SingleStudentPage() {
  return (
    <MainPage
      name={'Piter Snyder'}
      description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
      cartInfo={{
        phone: '9035665850',
        data: 'January 2024',
        blood: 'B-',
        mail: 'user@gmail.com',
      }}
      image={'https://randomuser.me/api/portraits/men/1.jpg'}
    />
  );
}
