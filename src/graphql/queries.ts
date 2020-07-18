/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFoodPost = /* GraphQL */ `
  query GetFoodPost($id: ID!) {
    getFoodPost(id: $id) {
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
      }
      nextToken
    }
  }
`;
