import { FoodPost as FoodPostType, FnType } from "./types";
import { FoodPost as FoodPostModel, FoodPost } from "../models";
import { DataStore } from "aws-amplify";

export const addFoodPost = async (
  foodPost: FoodPostType,
  onSucess: FnType,
  onError: (err: string) => {}
) => {
  try {
    await DataStore.save(new FoodPostModel(foodPost));
    onSucess();
  } catch (err) {
    onError(err);
  }
};

export const getFoodPosts = async (
  // onSucess: FnType,
  // onError: (err: string) => {}
)  => {
  let foodPosts:FoodPost[] =[];
  try {
    foodPosts = await DataStore.query(FoodPostModel);
    // onSucess();
  } catch (err) {
    // onError(err);
  }
  return foodPosts;
};