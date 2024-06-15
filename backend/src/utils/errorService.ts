import { IError } from '../models';

import { ErrorStatus } from '../enums';

export const ErrorService = Object.fromEntries(
  Object.keys(ErrorStatus)
    .filter((key) => isNaN(Number(key)))
    .map((key) => [
      key,
      (message: string): IError => ({ code: ErrorStatus[key as keyof typeof ErrorStatus], message }),
    ])
) as {
    [K in keyof typeof ErrorStatus]: (message: string) => IError;
  };
