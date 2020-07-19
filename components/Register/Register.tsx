
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontWeight: "lighter",
  },
});

export default ({ reCaptchaSolved,initSignUp }: { reCaptchaSolved: boolean ,initSignUp:(phoneNumber:string)=>void}) => {
  const classes = useStyles();
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <>
      <form onSubmit={(e)=>e.preventDefault()} className={classes.root} noValidate autoComplete="off">
        <Typography variant="h4" className={classes.title}>
          Create your account
        </Typography>

        <TextField
          value={phoneNumber}
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            ),
          }}
          label="Phone no."
          name="phoneNumber"
          onChange={(e) => setPhoneNumber( e.target.value )}
        ></TextField>


        <Button variant="contained" onClick={()=>initSignUp(phoneNumber)} disabled={!reCaptchaSolved}>
          Sign Up
        </Button>
      </form>
    </>
  );
};
