import { FC, ReactElement } from "react";
import styles from "./styles.module.scss";

interface MessageBoxProps {
  message: string;
  type: "error" | "info" | "success";
  children?: ReactElement | ReactElement[];
}
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
