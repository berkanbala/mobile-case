import styles from "./button.module.scss";

export const Button = (props) => {
  const { label, onClick } = props;

  return (
    <button onClick={onClick} className={styles.container}>
      {label}
    </button>
  );
};
