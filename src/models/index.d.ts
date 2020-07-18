import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum FoodCategory {
  NONVEG = "NONVEG",
  VEG = "VEG"
}



export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

export declare class FoodPost {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly category: FoodCategory | keyof typeof FoodCategory;
  readonly cuisineTags: string[];
  readonly cookingTime: string;
  readonly cookingDate: string;
  readonly createdAt: string;
  readonly uploadedImageUrl: string;
  readonly servings: number;
  constructor(init: ModelInit<FoodPost>);
  static copyOf(source: FoodPost, mutator: (draft: MutableModel<FoodPost>) => MutableModel<FoodPost> | void): FoodPost;
}