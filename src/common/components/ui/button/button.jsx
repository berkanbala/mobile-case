import classNames from "classnames";
import styles from "./button.module.scss";

export const Button = (props) => {
  const { label, onClick, disabled, type } = props;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={classNames(styles.container, disabled && styles.disabled)}
    >
      {label}
    </button>
  );
};
