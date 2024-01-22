import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../types/sidebar';
import MainIcon from '../../../../shared/assets/icons/main-20-20.svg';
import AboutIcon from '../../../../shared/assets/icons/about-20-20.svg';
import ProfileIcon from '../../../../shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '../../../../shared/assets/icons/article.svg';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      Icon: MainIcon,
      text: 'navMain',
    },
    {
      path: RoutePath.about,
      Icon: AboutIcon,
      text: 'navAbout',
    },
  ];

  if (userData) {
    sidebarItemList.push(
      {
        path: RoutePath.profile + userData.id,
        Icon: ProfileIcon,
        text: 'navProfile',
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'navArticles',
        authOnly: true,
      },
    );
  }

  return sidebarItemList;
});
