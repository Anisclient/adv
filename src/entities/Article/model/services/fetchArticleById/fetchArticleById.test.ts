import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';
import { Article, ArticleBlockType, ArticleType } from '../../types/article';

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

describe('fetchArticleById', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: articleDetailsData }));
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(articleDetailsData);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('1');
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
