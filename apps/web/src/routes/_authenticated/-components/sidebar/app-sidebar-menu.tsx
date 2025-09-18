import {
  Database,
  Grid2x2CheckIcon,
  HomeIcon,
  type LucideIcon,
  User,
} from 'lucide-react';
import type { AppRoutePaths } from '@/types/route';

export interface Group {
  groupLabel: string;
  menus: {
    href?: AppRoutePaths;
    label: string;
    active?: boolean;
    icon: LucideIcon;
    submenus: {
      href?: AppRoutePaths;
      label: string;
      active: boolean;
      icon?: LucideIcon;
    }[];
  }[];
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'Home',
          active: pathname.includes('/dashboard'),
          icon: HomeIcon,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: '業務メニュー',
      menus: [
        {
          label: '商品管理',
          active: pathname.includes('/products') || pathname.includes('/report'),
          icon: Grid2x2CheckIcon,
          submenus: [
            {
              href: '/products',
              label: '商品一覧',
              icon: User,
              active: pathname.includes('/products'),
            },
            {
              href: '/report',
              label: 'Report',
              icon: Database,
              active: pathname.includes('/report'),
            },
          ],
        },
      ],
    },
  ];
}
