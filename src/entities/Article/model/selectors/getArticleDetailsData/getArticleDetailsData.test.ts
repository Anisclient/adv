import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from './getArticleDetailsData';
import { Article, ArticleBlockType, ArticleType } from '../../types/article';

describe('getArticleDetailsData', () => {
  const articleDetailsData: Article = {
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    img: 'https://',
    views: 100,
    createdAt: '10.01.2024',
    type: [ArticleType.IT],
    blocks: [
      {
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Title',
        paragraphs: ['ddd', 'ggg'],
      },
      {
        id: '2',
        type: ArticleBlockType.CODE,
        code: '<div></div>',
      },
    ],
  };

  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: articleDetailsData,
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(articleDetailsData);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});
