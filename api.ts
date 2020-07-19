/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFoodPostInput = {
  id?: string | null,
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
  id: string,
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

export type CreateUserInput = {
  phoneNumber: string,
  displayName: string,
  firstName: string,
  lastName: string,
  aadharCardLink: string,
  documentLink: string,
};

export type ModelUserConditionInput = {
  phoneNumber?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  aadharCardLink?: ModelStringInput | null,
  documentLink?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  phoneNumber?: string | null,
  displayName?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  aadharCardLink?: string | null,
  documentLink?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type ModelFoodPostFilterInput = {
  id?: ModelIDInput | null,
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

export type ModelUserFilterInput = {
  phoneNumber?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  aadharCardLink?: ModelStringInput | null,
  documentLink?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type CreateFoodPostMutationVariables = {
  input: CreateFoodPostInput,
  condition?: ModelFoodPostConditionInput | null,
};

export type CreateFoodPostMutation = {
  createFoodPost:  {
    __typename: "FoodPost",
    id: string,
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
    owner: string | null,
  } | null,
};

export type UpdateFoodPostMutationVariables = {
  input: UpdateFoodPostInput,
  condition?: ModelFoodPostConditionInput | null,
};

export type UpdateFoodPostMutation = {
  updateFoodPost:  {
    __typename: "FoodPost",
    id: string,
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
    owner: string | null,
  } | null,
};

export type DeleteFoodPostMutationVariables = {
  input: DeleteFoodPostInput,
  condition?: ModelFoodPostConditionInput | null,
};

export type DeleteFoodPostMutation = {
  deleteFoodPost:  {
    __typename: "FoodPost",
    id: string,
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
    owner: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    phoneNumber: string,
    displayName: string,
    firstName: string,
    lastName: string,
    aadharCardLink: string,
    documentLink: string,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    phoneNumber: string,
    displayName: string,
    firstName: string,
    lastName: string,
    aadharCardLink: string,
    documentLink: string,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    phoneNumber: string,
    displayName: string,
    firstName: string,
    lastName: string,
    aadharCardLink: string,
    documentLink: string,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetFoodPostQueryVariables = {
  id: string,
};

export type GetFoodPostQuery = {
  getFoodPost:  {
    __typename: "FoodPost",
    id: string,
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
    owner: string | null,
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
      id: string,
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
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    phoneNumber: string,
    displayName: string,
    firstName: string,
    lastName: string,
    aadharCardLink: string,
    documentLink: string,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      phoneNumber: string,
      displayName: string,
      firstName: string,
      lastName: string,
      aadharCardLink: string,
      documentLink: string,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateFoodPostSubscriptionVariables = {
  owner: string,
};

export type OnCreateFoodPostSubscription = {
  onCreateFoodPost:  {
    __typename: "FoodPost",
    id: string,
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
    owner: string | null,
  } | null,
};

export type OnUpdateFoodPostSubscriptionVariables = {
  owner: string,
};

export type OnUpdateFoodPostSubscription = {
  onUpdateFoodPost:  {
    __typename: "FoodPost",
    id: string,
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
    owner: string | null,
  } | null,
};

export type OnDeleteFoodPostSubscriptionVariables = {
  owner: string,
};

export type OnDeleteFoodPostSubscription = {
  onDeleteFoodPost:  {
    __typename: "FoodPost",
    id: string,
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
    owner: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner: string,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    phoneNumber: string,
    displayName: string,
    firstName: string,
    lastName: string,
    aadharCardLink: string,
    documentLink: string,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner: string,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    phoneNumber: string,
    displayName: string,
    firstName: string,
    lastName: string,
    aadharCardLink: string,
    documentLink: string,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner: string,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    phoneNumber: string,
    displayName: string,
    firstName: string,
    lastName: string,
    aadharCardLink: string,
    documentLink: string,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};
