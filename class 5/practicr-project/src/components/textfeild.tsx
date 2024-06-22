function InputFeild(props: any) {
  return (
    // <form>
    <label>
      {props.name}
      <input type="text" name="name" onChange={props.onChange} />
    </label>
    // </form>
  );
}

export default InputFeild;
