/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id?: string | null,
};

export type CreateFoodPostInput = {
  name: string,
  price: number,
  description: string,
  category: FoodCategory,
  cuisineTags: Array< string | null >,
  cookingTime: string,
  cookingDate: string,
  createdAt?: string | null,
  uploadedImageUrl: string,
  servings: number,
};

export enum FoodCategory {
  NONVEG = "NONVEG",
  VEG = "VEG",
}


export type ModelFoodPostConditionInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  category?: ModelFoodCategoryInput | null,
  cuisineTags?: ModelStringInput | null,
  cookingTime?: ModelStringInput | null,
  cookingDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  uploadedImageUrl?: ModelStringInput | null,
  servings?: ModelIntInput | null,
  and?: Array< ModelFoodPostConditionInput | null > | null,
  or?: Array< ModelFoodPostConditionInput | null > | null,
  not?: ModelFoodPostConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFoodCategoryInput = {
  eq?: FoodCategory | null,
  ne?: FoodCategory | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateFoodPostInput = {
  name?: string | null,
  price?: number | null,
  description?: string | null,
  category?: FoodCategory | null,
  cuisineTags?: Array< string | null > | null,
  cookingTime?: string | null,
  cookingDate?: string | null,
  createdAt?: string | null,
  uploadedImageUrl?: string | null,
  servings?: number | null,
};

export type DeleteFoodPostInput = {
  id?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFoodPostFilterInput = {
  name?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  category?: ModelFoodCategoryInput | null,
  cuisineTags?: ModelStringInput | null,
  cookingTime?: ModelStringInput | null,
  cookingDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  uploadedImageUrl?: ModelStringInput | null,
  servings?: ModelIntInput | null,
  and?: Array< ModelFoodPostFilterInput | null > | null,
  or?: Array< ModelFoodPostFilterInput | null > | null,
  not?: ModelFoodPostFilterInput | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFoodPostMutationVariables = {
  input: CreateFoodPostInput,
  condition?: ModelFoodPostConditionInput | null,
};

export type CreateFoodPostMutation = {
  createFoodPost:  {
    __typename: "FoodPost",
    name: string,
    price: number,
    description: string,
    category: FoodCategory,
    cuisineTags: Array< string | null >,
    cookingTime: string,
    cookingDate: string,
    createdAt: string,
    uploadedImageUrl: string,
    servings: number,
    updatedAt: string,
  } | null,
};

export type UpdateFoodPostMutationVariables = {
  input: UpdateFoodPostInput,
  condition?: ModelFoodPostConditionInput | null,
};

export type UpdateFoodPostMutation = {
  updateFoodPost:  {
    __typename: "FoodPost",
    name: string,
    price: number,
    description: string,
    category: FoodCategory,
    cuisineTags: Array< string | null >,
    cookingTime: string,
    cookingDate: string,
    createdAt: string,
    uploadedImageUrl: string,
    servings: number,
    updatedAt: string,
  } | null,
};

export type DeleteFoodPostMutationVariables = {
  input: DeleteFoodPostInput,
  condition?: ModelFoodPostConditionInput | null,
};

export type DeleteFoodPostMutation = {
  deleteFoodPost:  {
    __typename: "FoodPost",
    name: string,
    price: number,
    description: string,
    category: FoodCategory,
    cuisineTags: Array< string | null >,
    cookingTime: string,
    cookingDate: string,
    createdAt: string,
    uploadedImageUrl: string,
    servings: number,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFoodPostQueryVariables = {
  id: string,
};

export type GetFoodPostQuery = {
  getFoodPost:  {
    __typename: "FoodPost",
    name: string,
    price: number,
    description: string,
    category: FoodCategory,
    cuisineTags: Array< string | null >,
    cookingTime: string,
    cookingDate: string,
    createdAt: string,
    uploadedImageUrl: string,
    servings: number,
    updatedAt: string,
  } | null,
};

export type ListFoodPostsQueryVariables = {
  filter?: ModelFoodPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFoodPostsQuery = {
  listFoodPosts:  {
    __typename: "ModelFoodPostConnection",
    items:  Array< {
      __typename: "FoodPost",
      name: string,
      price: number,
      description: string,
      category: FoodCategory,
      cuisineTags: Array< string | null >,
      cookingTime: string,
      cookingDate: string,
      createdAt: string,
      uploadedImageUrl: string,
      servings: number,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo:  {
    __typename: "Todo",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFoodPostSubscription = {
  onCreateFoodPost:  {
    __typename: "FoodPost",
    name: string,
    price: number,
    description: string,
    category: FoodCategory,
    cuisineTags: Array< string | null >,
    cookingTime: string,
    cookingDate: string,
    createdAt: string,
    uploadedImageUrl: string,
    servings: number,
    updatedAt: string,
  } | null,
};

export type OnUpdateFoodPostSubscription = {
  onUpdateFoodPost:  {
    __typename: "FoodPost",
    name: string,
    price: number,
    description: string,
    category: FoodCategory,
    cuisineTags: Array< string | null >,
    cookingTime: string,
    cookingDate: string,
    createdAt: string,
    uploadedImageUrl: string,
    servings: number,
    updatedAt: string,
  } | null,
};

export type OnDeleteFoodPostSubscription = {
  onDeleteFoodPost:  {
    __typename: "FoodPost",
    name: string,
    price: number,
    description: string,
    category: FoodCategory,
    cuisineTags: Array< string | null >,
    cookingTime: string,
    cookingDate: string,
    createdAt: string,
    uploadedImageUrl: string,
    servings: number,
    updatedAt: string,
  } | null,
};
