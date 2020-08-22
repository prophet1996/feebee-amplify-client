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
      uploadedImageUrl
      servings
      owner
      createdBy
      createdAt
      updatedAt
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
      uploadedImageUrl
      servings
      owner
      createdBy
      createdAt
      updatedAt
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
      uploadedImageUrl
      servings
      owner
      createdBy
      createdAt
      updatedAt
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
      cart {
        id
        state
        value
        owner
        createdAt
        updatedAt
      }
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
      cart {
        id
        state
        value
        owner
        createdAt
        updatedAt
      }
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
      cart {
        id
        state
        value
        owner
        createdAt
        updatedAt
      }
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart($owner: String!) {
    onCreateCart(owner: $owner) {
      id
      state
      value
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart($owner: String!) {
    onUpdateCart(owner: $owner) {
      id
      state
      value
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart($owner: String!) {
    onDeleteCart(owner: $owner) {
      id
      state
      value
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String!) {
    onCreateOrder(owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String!) {
    onUpdateOrder(owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String!) {
    onDeleteOrder(owner: $owner) {
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
