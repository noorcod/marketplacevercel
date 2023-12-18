import styles from "../styles/ScrollDown.module.css";

const ScrollDown = ({ className }: any) => {
  return (
    <div className={`${styles.arrows} ${className} d-flex justify-content-center `}>
      <svg className={`${styles.svg} d-flex justify-content-center `}>
        <path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
        <path className={styles.a2} d="M0 20 L30 52 L60 20"></path>
        <path className={styles.a3} d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>
  );
};

export default ScrollDown;
