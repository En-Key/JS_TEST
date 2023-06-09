import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Layouts.module.scss'

type TProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: TProps) => {
  return <div className={styles.postPageWrapper}>

        <Header />
        {children}
        <Footer />

    </div>;
}
