import Sidebar from './Sidebar';
import Products from './Products';

export default function Layout() {
    return (
      <section className='container mx-auto py-12 flex mobile:flex-row flex-col'>
        <Sidebar />
        <Products />
      </section>
    );
}
