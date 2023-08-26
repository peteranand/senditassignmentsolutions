import React from 'react';
import {Header} from './components/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export function PageLayout(props: LayoutProps) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
