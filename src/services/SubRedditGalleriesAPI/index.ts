import { apiInstance } from "services/apiInstance";

export const getSubredditGalleriesRequest = async (subreddit: string) => {
  const url = `/gallery/r/${subreddit}`;
  return await apiInstance(url);
};
