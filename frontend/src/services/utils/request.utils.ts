import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query';
import type { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query';

export function BaseQueryWithRetryExceptions(baseUrl: string, statusToIgnoreRetry: number[] = [401, 403]): BaseQueryFn {
  return retry(
    async (args: string | FetchArgs, api, extraOptions) => {
      const result = await fetchBaseQuery({ baseUrl, mode: 'cors' })(
        args,
        api,
        extraOptions
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const extraStatusToIgnoreRetry = (extraOptions as any)?.statusToIgnoreRetry as number[];
      if (extraStatusToIgnoreRetry) statusToIgnoreRetry = statusToIgnoreRetry.concat(extraStatusToIgnoreRetry.filter((status) => status !== undefined));

      if (result.error && typeof result.error.status === 'number' && statusToIgnoreRetry.includes(result.error.status)) retry.fail(result.error);

      return result;
    },
    {
      maxRetries: 3,
    }
  );
}
