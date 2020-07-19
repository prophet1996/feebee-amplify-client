import React, { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useDropzone } from "react-dropzone";
import { CustomFile } from "../../src/utils/types";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
// import { uploadImage } from "../../utils/service/firestore";
import { KYC_IMAGES_REF, PROFILE_IMAGES_REF } from "../../src/utils/const";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    photoUploadSection: {
      //Add styels here maybe set the background as new picture
    },
    previewImage: {
      width: "500px",

      height: "500px",
    },
    hiddenInput: {
      display: "none",
    },
  })
);

const KYC = ({
  activeStep,
  totalSteps,
  stepContent,
  formData = {},
  handleFinish,
  handleReset,
  handleBack,
}: {
  activeStep: number;
  totalSteps: number;
  stepContent: string;
  formData: any;
  handleFinish: (formData: any) => void;
  handleReset: () => void;
  handleBack: () => void;
}) => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    handleFinish({ ...formData, KYC: data });
  };

  //save and show KYC image
  let [uploadedKYCImageUrl, setUploadedKYCImageUrl] = useState<string | null>(
    null
  );
  const [previewKYCImage, setPreviewKYCImage] = useState<CustomFile | null>(
    null
  );

  const onDropKYCImage = useCallback(async (acceptedFiles) => {
    //TODO: implement this
    // uploadImage(acceptedFiles[0], uuidv4(), KYC_IMAGES_REF).then(
    //   (upload) => {
    //     setPreviewKYCImage({
    //       ...acceptedFiles[0],
    //       preview: URL.createObjectURL(acceptedFiles[0]),
    //     });
    //     setUploadedKYCImageUrl(upload.metadata.fullPath);
    //   }
    // );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropKYCImage,
  });

  let [uploadedProfileImageUrl, setuploadedProfileImageUrl] = useState<
    string | null
  >(null);

  //save and show profle pic image
  const [
    previewProfileImage,
    setPreviewProfileImage,
  ] = useState<CustomFile | null>(null);

  const onDropProfileImage = useCallback(async (acceptedFiles) => {
    uploadImage(acceptedFiles[0], uuidv4(), PROFILE_IMAGES_REF).then(
      (upload) => {
        setPreviewProfileImage({
          ...acceptedFiles[0],
          preview: URL.createObjectURL(acceptedFiles[0]),
        });
        setuploadedProfileImageUrl(upload.metadata.fullPath);
      }
    );
  }, []);

  const {
    getRootProps: getProfileImageRootProps,
    getInputProps: getProfileImageInputProps,
    isDragActive: isDragProfileImageActive,
  } = useDropzone({ onDrop: onDropProfileImage });

  return (
    <>
      Personal Info
      <form onSubmit={handleSubmit(onSubmit)}>
        <div {...getRootProps()} className={classes.photoUploadSection}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
          <aside>
            <div id={previewKYCImage?.name}>
                <img
                  className={classes.previewImage}
                  src={previewKYCImage?.preview}
                />
            </div>
          </aside>
        </div>

        <TextField value={previewKYCImage?.path} disabled variant="outlined" />
        <TextField
          value={uploadedKYCImageUrl}
          name="uploadedKYCImageUrl"
          className={classes.hiddenInput}
          inputRef={register()}
        />
        <div
          {...getProfileImageRootProps()}
          className={classes.photoUploadSection}
        >
          <input {...getProfileImageInputProps()} />
          {isDragProfileImageActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some Photo here, or click to select Photo</p>
          )}
          <aside>
            <div id={previewProfileImage?.path}>
                <img 
                  className={classes.previewImage}
                  src={previewProfileImage?.preview} />
            </div>
          </aside>
        </div>
        <div>
          <TextField
            disabled
            value={previewProfileImage?.path}
            variant="outlined"
          />
          <TextField
            value={uploadedProfileImageUrl}
            name="uploadedProfileImageUrl"
            className={classes.hiddenInput}
            inputRef={register()}
          />
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

export default KYC;
