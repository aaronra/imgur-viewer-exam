import { apiInstance } from "services/apiInstance";
/**
 * Function to fetch subreddit galleries data
 * @param {string} subreddit - subreddit name
 * @returns a request promise that will return subreddit galleries response data
 */
export const getSubredditGalleriesRequest = async (
  subreddit: string,
  sort: "time" | "top",
  window: "day" | "week" | "month" | "year" | "all",
  page: number
) => {
  const url = `/gallery/r/${subreddit}/${sort}/${window}/${page}`;
  return await apiInstance(url);
};
