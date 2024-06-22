import { TextField } from "@mui/material";

export default function BATextArea(props: any) {
  const { label, onChange, row, value } = props;
  return (
    <div>
      <TextField
        label={label}
        onChange={onChange}
        multiline={true}
        rows={row ?? 4}
        variant="outlined"
        fullWidth={true}
      />
    </div>
  );
}
