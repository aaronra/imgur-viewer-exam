import { apiInstance } from "services/apiInstance";
/**
 * Function to fetch subreddit galleries data
 * @param {string} subreddit - subreddit name
 * @returns a request promise that will return subreddit galleries response data
 */
export const getSubredditGalleriesRequest = async (subreddit: string) => {
  const url = `/gallery/r/${subreddit}`;
  return await apiInstance(url);
};
