import { FC } from "react";
import styles from "./styles.module.scss";

export const Navbar: FC = () => {
  return (
    <section className={styles.navbar}>
      <div className={styles.brand}>IMGUR Gallery viewer</div>
    </section>
  );
};
