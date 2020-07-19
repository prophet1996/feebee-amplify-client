import AddIcon from "@material-ui/icons/AddBox";
import RemoveIcon from "@material-ui/icons/IndeterminateCheckBox";
import IconButton from "@material-ui/core/IconButton";
import { TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textInput: {
      width: theme.spacing(4),
      padding: 0,
      border: "none",
      ['& > div > input']:{
        textAlign: "center",
        marginTop:"3px",
        padding:0,
      }
    },
    noPadding: {
      padding: "0px",
    },
  })
);

const CustomSlider = ({
  name,
  value,
  handleSliderChange,
  ...rest
}: {
  name: string;
  value: number;
  handleSliderChange: (value: number) => void;
}) => {
  const classes = useStyles();

  //TODO fix styles of input
  return (
    <div>
      
      
      <IconButton
        onClick={() => {
          handleSliderChange(value - 1);
        }}
        className={classes.noPadding}
        color="primary"
        aria-label="upload picture"
        component="span"
      >
        <RemoveIcon />
      </IconButton>
      <TextField
        className={classes.textInput}
        id={`slider${name}`}
        value={value}
        type="number"
        {...rest}
        disabled

      />
      <IconButton
        onClick={() => {
          handleSliderChange(value + 1);
        }}
        className={classes.noPadding}
        color="primary"
        aria-label="upload picture"
        component="span"
      >
        <AddIcon />
      </IconButton>
    </div>
  );
};
export default CustomSlider;
