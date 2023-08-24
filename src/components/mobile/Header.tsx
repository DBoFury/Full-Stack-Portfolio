import Link from 'next/link';

const HeaderMobile = () => {
  return (
    <header className='self-start'>
      <nav>
        <Link href='/' className='w-fit'>
          <h1 className='p-3 text-5xl font-medium uppercase w-fit text-pine-green'>
            Oleg D.
          </h1>
        </Link>
      </nav>
    </header>
  );
};

export default HeaderMobile;
