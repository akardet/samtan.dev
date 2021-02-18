import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import { throttle } from "../../utils/throttle";

const Navigation = ({}) => {
  const navContainerRef = useRef(null);
  const pageYOffsetRef = useRef(0);

  const showNavigation = () => {
    const { current: prevScrollPos } = pageYOffsetRef;
    const { pageYOffset: currentScrollPos } = window;

    if (
      currentScrollPos === 0 ||
      prevScrollPos >= currentScrollPos ||
      currentScrollPos === prevScrollPos
    ) {
      navContainerRef.current.style.bottom = "0";
    } else {
      navContainerRef.current.style.bottom = "-100px";
    }

    pageYOffsetRef.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle(showNavigation, 200));

    return () => {
      window.removeEventListener("scroll", throttle(showNavigation), 200);
    };
  }, []);

  return (
    <nav className={styles["nav"]}>
      <Link href="/">
        <div className={styles["logo"]}>
          <a tabIndex={0}>ST</a>
          <img
            src="/images/squircle.png"
            className={styles["logo__background"]}
          />
        </div>
      </Link>
      <ul ref={navContainerRef} className={styles["container"]} tabIndex={0}>
        <Link href="/about">
          <li className={styles["item"]}>
            <a className={styles["item-about"]} tabIndex={0}>
              About
            </a>
          </li>
        </Link>
        <Link href="/writing">
          <li className={styles["item"]}>
            <a className={styles["item-writing"]} tabIndex={0}>
              Writing
            </a>
          </li>
        </Link>
        <Link href="/work">
          <li className={styles["item"]}>
            <a className={styles["item-work"]} tabIndex={0}>
              Work
            </a>
          </li>
        </Link>
        <Link href="/contact">
          <li className={styles["item"]}>
            <a className={styles["item-contact"]} tabIndex={0}>
              Contact
            </a>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
