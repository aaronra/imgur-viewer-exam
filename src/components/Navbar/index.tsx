import { FC } from "react";
import styles from "./styles.module.scss";
/**
 * Navbar Component
 * @date 2022-06-01
 * @returns {ReactElement}
 * @component
 * @example
 * return(
 *      <Navbar />
 * )
 */
export const Navbar: FC = () => {
  return (
    <section className={styles.navbar}>
      <div className={styles.brand}>IMGUR Gallery viewer</div>
    </section>
  );
};
