import { FC, useCallback, useEffect, useState } from "react";
import { getSubredditGalleriesRequest } from "services/SubRedditGalleriesAPI";
import { Thumbnail } from "components/Thumbnail";
import { SubredditImageType } from "Types/SubredditImageType";
import { Loader } from "components/Loader";
import { MessageBox } from "components/MessageBox";
import styles from "./styles.module.scss";

export const Gallery: FC = () => {
  const [imgList, setImgList] = useState<SubredditImageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const getSubredditGalleries = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getSubredditGalleriesRequest("earthporn");
      const data = response?.data;
      if (data) {
        setImgList(data?.data);
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  }, []);

  const mapImgGallery = imgList.map((img: SubredditImageType) => {
    return (
      <div className="col" key={img.id}>
        <Thumbnail imgPath={img.link} />
      </div>
    );
  });

  useEffect(() => {
    getSubredditGalleries();
  }, [getSubredditGalleries]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : errorMessage ? (
        <MessageBox type="error" message={errorMessage}>
          <div className={styles.refetch__btn} onClick={getSubredditGalleries}>
            Re-fetch
          </div>
        </MessageBox>
      ) : (
        <div className="row">{mapImgGallery}</div>
      )}
    </>
  );
};
