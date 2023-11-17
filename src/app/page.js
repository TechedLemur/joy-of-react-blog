import React from 'react';


import styles from './homepage.module.css';
import Blogs from '@/components/Blogs';

function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>
      <Blogs />
    </div>
  );
}

export default Home;
