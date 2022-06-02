import { FC, useCallback, useEffect, useState } from "react";
import { getSubredditGalleriesRequest } from "services/SubRedditGalleriesAPI";
import { Thumbnail } from "components/Thumbnail";
import { SubredditImageType } from "Types/SubredditImageType";
import { Loader } from "components/Loader";
import { MessageBox } from "components/MessageBox";
import styles from "./styles.module.scss";

/**
 * Gallery Page
 * @date 2022-06-01
 * @returns {ReactElement}
 * @component
 * @example
 * return(
 *    <Gallery/>
 * )
 */
export const Gallery: FC = () => {
  const [imgList, setImgList] = useState<SubredditImageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const getSubredditGalleries = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getSubredditGalleriesRequest(
        "earthporn",
        "time",
        "all",
        page
      );
      const data = response?.data;
      if (data) {
        setImgList((prevState) => [...prevState, ...data?.data]);
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  }, [page]);

  /**
   * mapImgGallery - map subreddit galleries data
   */
  const mapImgGallery = imgList.map((img: SubredditImageType) => {
    return (
      <div className="col" key={img.id}>
        <Thumbnail imgPath={img.link} />
      </div>
    );
  });

  /**
   * handleScroll - function that will handle the image list scroll when it reached the bottom
   */
  const handleScroll = (e: any) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setPage((prevState) => prevState + 1);
    }
  };

  useEffect(() => {

    getSubredditGalleries();
  }, [getSubredditGalleries]);

  return (
    <>
      <h3>Earthporn</h3>
      {isLoading && <Loader />}
      {errorMessage ? (
        <MessageBox type="error" message={errorMessage}>
          <div className={styles.refetch__btn} onClick={getSubredditGalleries}>
            Re-fetch
          </div>
        </MessageBox>
      ) : (
        <div
          className={`${styles.thumbnail__wrapper} row`}
          onScroll={handleScroll}
          style={{ overflowY: "scroll" }}
        >
          {mapImgGallery}
        </div>
      )}
    </>
  );
};
