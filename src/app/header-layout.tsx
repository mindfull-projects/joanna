'use client';

import { useState } from 'react';
import Header from '@/components/header';

export default function HeaderLayout() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />;
}
