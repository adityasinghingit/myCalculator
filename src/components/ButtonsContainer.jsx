import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({onButtonClick}) => {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div key={onButtonClick.id} className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => {
        return <button className={styles.button} onClick={() => onButtonClick(buttonName)}>{buttonName}</button>;
      })}
    </div>
  );
};

export default ButtonsContainer;
