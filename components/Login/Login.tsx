import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Register } from "..";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {},
  title: {
    fontWeight: "lighter",
  },
});


export default ({authData}:{authData:any}) => {
  const classes = useStyles();
  const [user, setUser] = useState({ username: "", phoneNumber: "", code: "" });

  if (authData.smsSent)
    return (
      <>
        <input
          value={user.code}
          name="code"
          placeholder="Please Enter SMS code"
          onChange={(e) => setUser({ ...user, code: e.target.value })}
        ></input>
        <Button
          variant="contained"
          onClick={() => authData.initVerification(user.code)}
        >
          Verify
        </Button>
      </>
    );
  return (
    <div className={classes.root}>
      <Register
        reCaptchaSolved={authData.reCaptchaSolved}
        initSignUp={authData.initSignUp}
      />
    </div>
  );
};

