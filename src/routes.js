import { lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Hp = lazy(() => import('@/pages/HomePage'));
const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/t1',
        component: Hp,
      },
      {
        path: '/',
        component: Dashboard,
      },
    ],
  },
];
export default routerConfig;
