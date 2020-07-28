import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { LABELS } from "../../src/utils/const";

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
  activeStep,
  totalSteps,
  stepContent,
  formData = {},
  handleNext,
  handleReset,
  handleBack,
}: {
  activeStep: number;
  totalSteps: number;
  stepContent: string;
  formData: any;
  handleNext: (formData: any) => void;
  handleReset: () => void;
  handleBack: () => void;
}) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) =>
    handleNext({ ...formData, personalInfo: data });
  const initialValue = formData.personalInfo || {};
  return (
    <>
      Personal Info
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="firstName"
          name="firstName"
          label="firstName"
          error={errors.firstName}
          defaultValue={initialValue.firstName}
          variant="outlined"
          inputRef={register({ required: true })}
          helperText={errors.firstName ? LABELS.fillThisField:null}
        />

        <TextField
          id="lastName"
          name="lastName"
          label="lastName"
          error={errors.lastName}
          defaultValue={initialValue.lastName}
          inputRef={register({ required: true })}
          variant="outlined"
          helperText={errors.lastName ? LABELS.fillThisField:null}
        />

        <TextField
          id="username"
          name="username"
          inputRef={register({ required: true })}
          error={errors.username}
          defaultValue={initialValue.username}
          label="username"
          variant="outlined"
          helperText={errors.username ? LABELS.fillThisField:null}
        />
        <TextField
          id="phoneNumber"
          name="phoneNumber"
          value="+919380556186"
          label="Phone Number"
          error={errors.firstName}
          variant="outlined"
          disabled
        />

        <div>
          {activeStep === totalSteps ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {stepContent}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  {activeStep === totalSteps - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};
