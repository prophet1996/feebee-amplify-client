// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const FoodCategory = {
  "NONVEG": "NONVEG",
  "VEG": "VEG"
};

const { Todo, FoodPost } = initSchema(schema);

export {
  Todo,
  FoodPost,
  FoodCategory
};