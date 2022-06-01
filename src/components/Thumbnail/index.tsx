import { FC } from "react";
import styles from "./styles.module.scss";

interface ThumbnailProps {
  imgPath: string;
}
export const Thumbnail: FC<ThumbnailProps> = ({ imgPath }) => {
  return (
    <div className="card">
      <img className={styles.thumbnail} src={imgPath} alt="thumbnail" />
    </div>
  );
};
