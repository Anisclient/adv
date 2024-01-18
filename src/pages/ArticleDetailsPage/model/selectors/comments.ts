import { StateSchema } from 'app/providers/StoreProvider';

// eslint-disable-next-line max-len
export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
