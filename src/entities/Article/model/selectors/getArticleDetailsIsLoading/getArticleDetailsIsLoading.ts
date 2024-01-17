import { StateSchema } from 'app/providers/StoreProvider';

// eslint-disable-next-line max-len
export const getArticleDetailsIsLoading = (state: StateSchema) => state?.articleDetails?.isLoading || false;
