import MainPage from '@/components/MainPage/MainPage';

export default function SingleTeacherPage() {
  return (
    <MainPage
      name={'Leonard Snyder'}
      description={
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur elit.'
      }
      cartInfo={{
        phone: '9265775850',
        data: 'November 2025',
        blood: 'A+',
        mail: 'teacher@gmail.com',
      }}
      image={'https://randomuser.me/api/portraits/men/9.jpg'}
    />
  );
}
