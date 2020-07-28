/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFoodPost = /* GraphQL */ `
  mutation CreateFoodPost(
    $input: CreateFoodPostInput!
    $condition: ModelFoodPostConditionInput
  ) {
    createFoodPost(input: $input, condition: $condition) {
      id
      name
      price
      description
      category
      cuisineTags
      cookingTime
      cookingDate
      createdAt
      uploadedImageUrl
      servings
      updatedAt
      owner
    }
  }
`;
export const updateFoodPost = /* GraphQL */ `
  mutation UpdateFoodPost(
    $input: UpdateFoodPostInput!
    $condition: ModelFoodPostConditionInput
  ) {
    updateFoodPost(input: $input, condition: $condition) {
      id
      name
      price
      description
      category
      cuisineTags
      cookingTime
      cookingDate
      createdAt
      uploadedImageUrl
      servings
      updatedAt
      owner
    }
  }
`;
export const deleteFoodPost = /* GraphQL */ `
  mutation DeleteFoodPost(
    $input: DeleteFoodPostInput!
    $condition: ModelFoodPostConditionInput
  ) {
    deleteFoodPost(input: $input, condition: $condition) {
      id
      name
      price
      description
      category
      cuisineTags
      cookingTime
      cookingDate
      createdAt
      uploadedImageUrl
      servings
      updatedAt
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      phoneNumber
      displayName
      firstName
      lastName
      aadharCardLink
      documentLink
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      phoneNumber
      displayName
      firstName
      lastName
      aadharCardLink
      documentLink
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      phoneNumber
      displayName
      firstName
      lastName
      aadharCardLink
      documentLink
      owner
      createdAt
      updatedAt
    }
  }
`;
