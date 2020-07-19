// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const FoodCategory = {
  "NONVEG": "NONVEG",
  "VEG": "VEG"
};
let FoodPost;
let User;
let models;

if (typeof window !== "undefined") {
  models = initSchema(schema);
  FoodPost=models.FoodPost;
  User=models.User;
}

export {
  FoodPost,
  User,
  FoodCategory
};