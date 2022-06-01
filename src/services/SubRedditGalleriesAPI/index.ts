import { apiInstance } from "services/apiInstance";
/**
 * @param  {string} subreddit - subreddit name
 */
export const getSubredditGalleriesRequest = async (subreddit: string) => {
  const url = `/gallery/r/${subreddit}`;
  return await apiInstance(url);
};
