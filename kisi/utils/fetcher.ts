import { logger } from "./logger";

type FetcherResponse<T> =
  | {
      success: true;
      result: T;
    }
  | { success: false };

export const fetcher = async <T>(
  url: string,
  init: RequestInit,
): Promise<FetcherResponse<T>> => {
  try {
    const response = await fetch(url, init);
    if (response.ok) {
      const data = await response.json();
      return { success: true, result: data as T };
    }
    return { success: false };
  } catch (error) {
    logger.error("src/utils/fetcher.ts - Unhandled exception", error as string);
    return { success: false };
  }
};
