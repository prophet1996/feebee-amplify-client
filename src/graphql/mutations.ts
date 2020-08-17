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
      uploadedImageUrl
      servings
      owner
      createdBy
      createdAt
      updatedAt
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
      uploadedImageUrl
      servings
      owner
      createdBy
      createdAt
      updatedAt
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
      uploadedImageUrl
      servings
      owner
      createdBy
      createdAt
      updatedAt
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
      orders {
        items {
          id
          userId
          price
          postId
          servings
          name
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
      orders {
        items {
          id
          userId
          price
          postId
          servings
          name
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
      orders {
        items {
          id
          userId
          price
          postId
          servings
          name
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      userId
      price
      postId
      servings
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      userId
      price
      postId
      servings
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      userId
      price
      postId
      servings
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
