import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { TextField, Button } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "@date-io/date-fns";
// import {
//   getCuisines,
//   addFoodPost,
//   uploadPostImage,
// } from "../../utils/service/firestore"  ;
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { foodCategory, FoodCategory,CustomFile } from "../../src/utils/types";
import DateFnsUtils from "@date-io/date-fns";
//Retrun code from successful post submission
import { CODE } from "../../src/utils/const";

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    addFoodForm: {
      display: "flex",
      flexDirection: "column",
    },
    chipArray: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    photoUploadSection: {
      //Add styels here maybe set the background as new picture
    },
  })
);

const AddFood = ({
  onCloseAddFood,
}: {
  onCloseAddFood: (statusCode: CODE) => void;
}) => {
  const { register, handleSubmit } = useForm();
  //use this save in the food post
  let [uploadedImageUrl, setuploadedImageUrl] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<
  CustomFile | null
  >(null);
  const onDrop = useCallback(async (acceptedFiles) => {
    uploadPostImage(acceptedFiles[0], uuidv4()).then((upload) => {
      setPreviewImage({
        ...acceptedFiles[0],
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
      console.log("acc", acceptedFiles[0]);
      setuploadedImageUrl(upload.metadata.fullPath);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const [
    foodTypeRadioValue,
    setFoodTypeRadioValue,
  ] = useState<FoodCategory | null>();
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const [cuisineSelectOpen, setCuisineSelectOpen] = useState(false);
  const [cuisineOptions, setCuisineOptions] = useState<string[]>([]);
  const loading = cuisineSelectOpen && cuisineOptions.length === 0;
  const [currentSelectedCuisines, setCurrentSelectedCuisines] = useState<
    Set<string>
  >(new Set([]));
  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }
    (async () => {
      // const cuisineList = (await getCuisines()).data();
      //TODO: implement this
      const cuisineList = {foodList:[]};
      if (active) setCuisineOptions(cuisineList?.foodList);
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setCuisineOptions([]);
    }
  }, [open]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const onSubmit = (data: any) => {
    //TODO: implement/fix this
    // addFoodPost({
    //   ...data,
    //   cuisineTags: Array.from(currentSelectedCuisines),
    //   uploadedImageUrl,
    // })
    //   .then(() => {
    //     onCloseAddFood(CODE.SUCCESS);
    //   })
    //   .catch((err) => {
    //     throw new Error(err);
    //   });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.addFoodForm}>
        <div {...getRootProps()} className={classes.photoUploadSection}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
          <aside>
            <div id={previewImage?.name}>
              <div>
                <img src={previewImage?.preview} />
              </div>
            </div>
          </aside>
        </div>
        <TextField
          id="name"
          name="name"
          label="Food name"
          variant="outlined"
          inputRef={register()}
        />
        <TextField
          id="price"
          name="price"
          label="Price"
          inputRef={register()}
          variant="outlined"
        />
         <TextField
          id="servings"
          type="number"
          name="servings"
          label="Food Servings"
          variant="outlined"
          inputRef={register()}
        />
        <TextField
          id="description"
          name="description"
          label="Description"
          inputRef={register()}
          variant="outlined"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            name="cookingDate"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            inputRef={register()}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            name="cookingTime"
            id="time-picker"
            inputRef={register()}
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </MuiPickersUtilsProvider>
        <FormLabel component="legend">Type</FormLabel>
        <RadioGroup
          aria-label="category"
          name="category"
          value={foodTypeRadioValue}
          onChange={() => {
            return setFoodTypeRadioValue((prevVal: any) =>
              prevVal === foodCategory["NON-VEG"]
                ? (foodCategory.VEG as any)
                : (foodCategory["NON-VEG"] as any)
            );
          }}
        >
          <FormControlLabel
            value={foodCategory.VEG}
            control={<Radio inputRef={register()} />}
            label={foodCategory.VEG}
          />
          <FormControlLabel
            value={foodCategory["NON-VEG"]}
            control={<Radio inputRef={register()} />}
            label={foodCategory["NON-VEG"]}
          />
        </RadioGroup>{" "}
        <Autocomplete
          id="categories"
          multiple
          style={{ width: 300 }}
          open={cuisineSelectOpen}
          onOpen={() => {
            setCuisineSelectOpen(true);
          }}
          onClose={() => {
            setCuisineSelectOpen(false);
          }}
          getOptionSelected={(option: string, value: string) =>
            option === value
          }
          onChange={(_: any, value: string[]) => {
            setCurrentSelectedCuisines((prevVal) => {
              return new Set([...prevVal, ...value]);
            });
          }}
          getOptionLabel={(option) => option}
          options={cuisineOptions}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Categories"
              name="Categories"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
        <Button
          type="submit"
          // disabled={!uploadedImageUrl}
          variant="contained"
          color="primary"
        >
          Add Food
        </Button>
      </form>
    </>
  );
};
export default AddFood;
