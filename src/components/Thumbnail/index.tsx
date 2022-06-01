import { FC } from "react";
import styles from "./styles.module.scss";


interface ThumbnailProps {
  imgPath: string;
}
/**
 * Thumbnail Component - Can be use to display image thumbnail
 * @date 2022-06-01
 * @param {string} imgPath url path of the image to be displayed
 * @returns {ReactElement} 
 * @component
 * @example
 * return(
 *      <Thumbnail imgPath={img.link} />)
 */
export const Thumbnail: FC<ThumbnailProps> = ({ imgPath }) => {
  return (
    <div className="card">
      <img className={styles.thumbnail} src={imgPath} alt="thumbnail" />
    </div>
  );
};
