//This is the main componne
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { PersonalInfo, OnboardingSummary, Preferences } from "..";
import {User as UserModel} from '../../src/models';
import {listUsers} from '../../src/graphql/queries';
import KYC from "../KYC";
import { DataStore,API, graphqlOperation  } from 'aws-amplify';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return "You Information";
    case 1:
      return "Some info to help us service you better";
    case 2:
      return "Trying to become a cook?";
    default:
      return "Unknown stepIndex";
  }
}

const initialFormValues = {
  personalInfo: { firstName: "", lastName: "", username: "" },
  preferences: { firstName: "", lastName: "", username: "" },
  KYC: { uploadedKYCImageUrl: "", uploadedProfileImageUrl: "" },
};

export default () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(initialFormValues);
  const handleNext = (newFormData: any) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setFormData(newFormData);
  };

  const handleSaveOnboarding = async () => {
    try {
      await DataStore.save(
        new UserModel(formData)
      );
      console.log("Post saved successfully!");
      const a = await API.graphql(graphqlOperation(listUsers))
      console.log('bruh',a)

    } catch (error) {
      console.log("Error saving post", error);
    }
    //Actual kekw moment just reload lol
    // window.location.reload();
  };

  const handleFinish = (newFormData: any) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setFormData(newFormData);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const defautlProps = {
    activeStep,
    totalSteps: 4,
    handleNext,
    stepContent: getStepContent(activeStep),
    handleReset,
    handleBack,
    formData,
  };

  const steps = [
    { label: "Personal Info", component: <PersonalInfo {...defautlProps} /> },
    { label: "Preferences", component: <Preferences {...defautlProps} /> },
    {
      label: "KYC",
      component: <KYC handleFinish={handleFinish} {...defautlProps} />,
    },
    {
      label: "Summary",
      component: (
        <OnboardingSummary
          handleSaveOnBoarding={handleSaveOnboarding}
          handleBack={handleBack}
          formData={formData}
        />
      ),
    },
  ];
  let currentStep: any = null;
  switch (activeStep) {
    case 0:
      currentStep = steps[0].component;
      break;
    case 1:
      currentStep = steps[1].component;
      break;
    case 2:
      currentStep = steps[2].component;
      break;
    case 3:
      currentStep = steps[3].component;
      break;
    default:
      break;
  }
  return (
    <div className={classes.root}>
      <div>
        Hi It looks like you're new here Please fill these to help us getting to
        know you better
      </div>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(({ label, component }) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {currentStep}
    </div>
  );
};
