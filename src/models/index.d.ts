import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum FoodCategory {
  NONVEG = "NONVEG",
  VEG = "VEG"
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

export declare class User {
  readonly id: string;
  readonly phoneNumber: string;
  readonly displayName: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly aadharCardLink: string;
  readonly documentLink: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}