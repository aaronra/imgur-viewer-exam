import { FC, ReactElement } from "react";
import styles from "./styles.module.scss";

interface MessageBoxProps {
  message: string;
  type: "error" | "info" | "success";
  children?: ReactElement | ReactElement[];
}
/**
 * MessageBox Component
 * @date 2022-06-01
 * @param {string} message Label that will be displayed
 * @param {"error" | "info" | "success"} type MessageBox enum type
 * @param {ReactElement} children Childred of this component
 * @returns {ReactElement}
 * @component
 * @example
 * return(
 *    <MessageBox type="error" message={errorMessage}>
 *        <div className={styles.refetch__btn} onClick={getSubredditGalleries}>
 *           Re-fetch
 *         </div>
 *       </MessageBox>
 * )
 */
export const MessageBox: FC<MessageBoxProps> = ({
  message,
  type,
  children,
}) => {
  return (
    <div className={`${styles.message__box} ${styles[type]}`}>
      <div className={styles.message}>{message}</div>
      <div>{children}</div>
    </div>
  );
};
