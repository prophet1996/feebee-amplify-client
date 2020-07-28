/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFoodPost = /* GraphQL */ `
  subscription OnCreateFoodPost($owner: String!) {
    onCreateFoodPost(owner: $owner) {
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
export const onUpdateFoodPost = /* GraphQL */ `
  subscription OnUpdateFoodPost($owner: String!) {
    onUpdateFoodPost(owner: $owner) {
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
export const onDeleteFoodPost = /* GraphQL */ `
  subscription OnDeleteFoodPost($owner: String!) {
    onDeleteFoodPost(owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
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
