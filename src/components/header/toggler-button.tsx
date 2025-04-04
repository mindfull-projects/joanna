import { Dispatch, SetStateAction } from 'react';

interface TogglerButtonProps {
  navbarOpen: boolean;
  setNavbarOpen: Dispatch<SetStateAction<boolean>>;
  togglerRef: React.Ref<HTMLButtonElement>;
}

export default function TogglerButton({
  navbarOpen,
  setNavbarOpen,
  togglerRef,
}: TogglerButtonProps) {
  return (
    <button
      ref={togglerRef}
      onClick={event => {
        event.stopPropagation();
        setNavbarOpen(prevState => !prevState);
      }}
      id='navbarToggler'
      aria-label='Mobile Menu'
      className='ring-primary-content -mr-1 rounded-sm p-2 focus:ring-2 lg:hidden'
    >
      <span
        className={`bg-primary-content relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
          navbarOpen ? 'top-[7px] rotate-45' : ' '
        }`}
      />
      <span
        className={`bg-primary-content relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
          navbarOpen ? 'opacity-0' : ' '
        }`}
      />
      <span
        className={`bg-primary-content relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
          navbarOpen ? 'top-[-8px] -rotate-45' : ' '
        }`}
      />
    </button>
  );
}
