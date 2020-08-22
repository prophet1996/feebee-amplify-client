import { FoodPost as FoodPostType, FnType } from "./types";
import { FoodPost as FoodPostModel, FoodPost } from "../models";
import { DataStore, Storage } from "aws-amplify";

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

export const uploadPostImage  = (file:any,path:string,userId:string)=>{
  
  return Storage.put(`${userId}/${path}-${file?.name}`, file, {
    contentType: file?.type,
}).then((result:any)=>{
  return Storage.get(result.key as string,{level:"public"})
})

}