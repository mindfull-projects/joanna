export interface MenuItem {
  id: number;
  title: string;
  path: string;
}

const menuData: MenuItem[] = [
  {
    id: 1,
    title: 'Who am I',
    path: '/who-am-i',
  },
  {
    id: 2,
    title: 'My Poems',
    path: '/my-poems',
  },
  {
    id: 3,
    title: 'My Travels',
    path: '/my-travels',
  },
  {
    id: 4,
    title: 'Contact Me',
    path: '/contact-me',
  },
];

export default menuData;
