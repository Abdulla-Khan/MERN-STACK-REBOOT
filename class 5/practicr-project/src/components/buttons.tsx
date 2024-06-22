function Button(props: {
  onClick: () => void;
  buttonValue: string;
    className: string;
}) {
  return (
    <button
      onClick={props.onClick}
      className={props.className + "rounded-2 m-3"}
    >
      {props.buttonValue}
    </button>
  );
}
export default Button;
