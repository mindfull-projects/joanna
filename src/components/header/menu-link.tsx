import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import type { MenuItem } from './menu-items';

interface MenuLinkProps {
  menuItem: MenuItem;
  navbarOpen: boolean;
  onClick?: () => void;
}

export default function MenuLink({
  menuItem,
  navbarOpen,
  onClick,
}: MenuLinkProps) {
  const pathname = usePathname();

  const linkClass = classNames({
    'flex lg:mr-0 lg:inline-flex lg:px-0 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:transition-transform after:duration-300 after:ease-in-out hover:text-accent':
      true,
    'text-accent after:bg-accent after:scale-x-100': pathname === menuItem.path,
    'text-primary-content after:bg-accent after:scale-x-0 hover:after:scale-x-100':
      pathname !== menuItem.path,
    'py-0 gap-5': navbarOpen,
  });

  return (
    <Link href={menuItem.path} className={linkClass} onClick={onClick}>
      {menuItem.title}
    </Link>
  );
}
