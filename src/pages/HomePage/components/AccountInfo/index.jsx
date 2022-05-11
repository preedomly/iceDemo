import * as React from 'react';
import { Divider, Typography, Grid, Button } from '@alifd/next';
import store from '@/pages/HomePage/store';
import styles from './index.module.css';

const { H1, H2 } = Typography;
const { Row, Col } = Grid;

const { useState } = React;

const Index = () => {
  const [
    { userInfo },
  ] = store.useModel('homepage');
  return (
    <>
      <div className={styles.bac}>
        <Typography>
          <H1>姓名: {userInfo.name}, 年龄: {userInfo.age}, 性别: {userInfo.sex}</H1>
        </Typography>
      </div>
    </>
  );
};

export default Index;
