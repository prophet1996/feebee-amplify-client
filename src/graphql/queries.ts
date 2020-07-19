/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFoodPost = /* GraphQL */ `
  query GetFoodPost($id: ID!) {
    getFoodPost(id: $id) {
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
export const listFoodPosts = /* GraphQL */ `
  query ListFoodPosts(
    $filter: ModelFoodPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoodPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      phoneNumber
      displayName
      firstName
      lastName
      aadharCardLink
      documentLink
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        phoneNumber
        displayName
        firstName
        lastName
        aadharCardLink
        documentLink
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
