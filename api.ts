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
  cookingTime: number,
  cookingDate: number,
  uploadedImageUrl: string,
  servings: number,
  owner: string,
  createdBy: string,
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
  cookingTime?: ModelIntInput | null,
  cookingDate?: ModelIntInput | null,
  uploadedImageUrl?: ModelStringInput | null,
  servings?: ModelIntInput | null,
  createdBy?: ModelStringInput | null,
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
  cookingTime?: number | null,
  cookingDate?: number | null,
  uploadedImageUrl?: string | null,
  servings?: number | null,
  owner?: string | null,
  createdBy?: string | null,
};

export type DeleteFoodPostInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  phoneNumber: string,
  displayName: string,
  firstName: string,
  lastName: string,
  aadharCardLink: string,
  documentLink: string,
  owner: string,
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
  id: string,
  phoneNumber?: string | null,
  displayName?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  aadharCardLink?: string | null,
  documentLink?: string | null,
  owner?: string | null,
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
  cookingTime?: ModelIntInput | null,
  cookingDate?: ModelIntInput | null,
  uploadedImageUrl?: ModelStringInput | null,
  servings?: ModelIntInput | null,
  owner?: ModelIDInput | null,
  createdBy?: ModelStringInput | null,
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
  id?: ModelIDInput | null,
  phoneNumber?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  aadharCardLink?: ModelStringInput | null,
  documentLink?: ModelStringInput | null,
  owner?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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
    cookingTime: number,
    cookingDate: number,
    uploadedImageUrl: string,
    servings: number,
    owner: string,
    createdBy: string,
    createdAt: string,
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
    id: string,
    name: string,
    price: number,
    description: string,
    category: FoodCategory,
    cuisineTags: Array< string | null >,
    cookingTime: number,
    cookingDate: number,
    uploadedImageUrl: string,
    servings: number,
    owner: string,
    createdBy: string,
    createdAt: string,
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
    id: string,
    name: string,
    price: number,
    description: string,
    category: FoodCategory,
    cuisineTags: Array< string | null >,
    cookingTime: number,
    cookingDate: number,
    uploadedImageUrl: string,
    servings: number,
    owner: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    phoneNumber: string,
    displayName: string,
    firstName: string,
    lastName: string,
    aadharCardLink: string,
    documentLink: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    phoneNumber: string,
    displayName: string,
    firstName: string,
    lastName: string,
    aadharCardLink: string,
    documentLink: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    phoneNumber: string,
    displayName: string,
    firstName: string,
    lastName: string,
    aadharCardLink: string,
    documentLink: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
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
    cookingTime: number,
    cookingDate: number,
    uploadedImageUrl: string,
    servings: number,
    owner: string,
    createdBy: string,
    createdAt: string,
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
      id: string,
      name: string,
      price: number,
      description: string,
      category: FoodCategory,
      cuisineTags: Array< string | null >,
      cookingTime: number,
      cookingDate: number,
      uploadedImageUrl: string,
      servings: number,
      owner: string,
      createdBy: string,
      createdAt: string,
      updatedAt: string,
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
    id: string,
    phoneNumber: string,
    displayName: string,
    firstName: string,
    lastName: string,
    aadharCardLink: string,
    documentLink: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
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
      id: string,
      phoneNumber: string,
      displayName: string,
      firstName: string,
      lastName: string,
      aadharCardLink: string,
      documentLink: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type UserByOwnerQueryVariables = {
  owner?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByOwnerQuery = {
  UserByOwner:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      phoneNumber: string,
      displayName: string,
      firstName: string,
      lastName: string,
      aadharCardLink: string,
      documentLink: string,
      owner: string,
      createdAt: string,
      updatedAt: string,
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
    cookingTime: number,
    cookingDate: number,
    uploadedImageUrl: string,
    servings: number,
    owner: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string,
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
    cookingTime: number,
    cookingDate: number,
    uploadedImageUrl: string,
    servings: number,
    owner: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string,
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
    cookingTime: number,
    cookingDate: number,
    uploadedImageUrl: string,
    servings: number,
    owner: string,
    createdBy: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner: string,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    phoneNumber: string,
    displayName: string,
    firstName: string,
    lastName: string,
    aadharCardLink: string,
    documentLink: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner: string,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    phoneNumber: string,
    displayName: string,
    firstName: string,
    lastName: string,
    aadharCardLink: string,
    documentLink: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner: string,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    phoneNumber: string,
    displayName: string,
    firstName: string,
    lastName: string,
    aadharCardLink: string,
    documentLink: string,
    owner: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
