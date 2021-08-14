import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.system'),
    orderNo: 90000,
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('/@/views/sys/about/index.vue'),
      meta: {
        title: t('routes.dashboard.system'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;
