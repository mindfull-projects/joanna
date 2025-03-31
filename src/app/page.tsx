import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className='flex min-h-screen flex-col items-center justify-center p-24'>
        <h1 className='text-center text-2xl font-bold sm:text-4xl'>
          Hello, I am Joanna!
        </h1>
        <p className='mt-4 text-center text-lg'>
          Welcome to my personal website.
        </p>
        <Image
          src='/images/joanna.jpg'
          alt='Profile Picture'
          width={200}
          height={300}
          className='mt-6 aspect-square rounded-full object-cover'
        />
      </div>
    </main>
  );
}
