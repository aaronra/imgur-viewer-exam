import styles from "./styles.module.scss";

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};
