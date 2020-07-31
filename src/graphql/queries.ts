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
      uploadedImageUrl
      servings
      owner
      createdBy
      createdAt
      updatedAt
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
        uploadedImageUrl
        servings
        owner
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const userByOwner = /* GraphQL */ `
  query UserByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    UserByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
