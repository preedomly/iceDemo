import React, { useEffect } from 'react';
import { ResponsiveGrid, Divider } from '@alifd/next';
import AccountInfo from './components/AccountInfo';
import pageStore from '@/pages/HomePage/store';
import styles from './index.module.css';

const { Cell } = ResponsiveGrid;

const Welcome = () => {
  const [useSt, uDis] = pageStore.useModel('homepage');

  useEffect(() => {
    uDis.asyncQuery();
  }, []);
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <AccountInfo />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Welcome;
