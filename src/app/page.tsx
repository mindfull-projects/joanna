import Image from 'next/image';

export default function Home() {
  return (
    <section
      className='flex flex-col gap-4 lg:flex-row lg:gap-6'
      style={{
        height: 'calc(100vh - 80px)',
      }}
    >
      <div className='relative h-[500px] w-full lg:h-auto lg:w-1/2'>
        <Image
          src='/images/joanna-shadow.webp'
          alt='Profile Picture'
          fill
          className='w-1/2 object-cover'
        />
      </div>
      <div className='flex flex-col items-center justify-center p-4 lg:w-1/2 lg:items-start'>
        <h1 className='text-accent text-center text-4xl font-bold'>
          Hi, I am Joanna Pop
        </h1>
        <p className='text-primary-content mt-2 text-center text-lg'>
          Welcome to my personal website!
        </p>
      </div>
    </section>
  );
}
