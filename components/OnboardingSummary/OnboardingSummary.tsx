import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

export default ({
  handleSaveOnBoarding,
  handleBack,
  // formData,
}: {
  // formData: any;
  handleSaveOnBoarding: () => void;
  handleBack: () => void;
}) => {
  const classes = useStyles();
  return (
    <>
      OnBoarding Summary
      <div>
        <div>
          <Typography className={classes.instructions}>
            All steps completed Did we get this right?
          </Typography>
          <Button onClick={handleSaveOnBoarding}>Yes</Button>
          <Button onClick={handleBack}>No</Button>
        </div>
      </div>
    </>
  );
};
