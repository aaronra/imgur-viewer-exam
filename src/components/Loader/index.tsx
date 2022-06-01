import { FC, ReactElement } from "react";
import styles from "./styles.module.scss";

/**
 * Loader Component - Can be use to display the loading state
 * @date 2022-06-01
 * @returns {ReactElement} 
 * @component
 * @example
 * return(
 *      <Loader />)
 */
export const Loader: FC = (): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};
