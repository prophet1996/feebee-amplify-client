/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const putOrder = /* GraphQL */ `
  query PutOrder {
    putOrder {
      Username
      UserAttributes {
        Name
        Value
      }
      UserCreateDate
      UserLastModifiedDate
      Enabled
      UserStatus
      MFAOptions {
        DeliveryMedium
        AttributeName
      }
      PreferredMfaSetting
      UserMFASettingList
    }
  }
`;
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
      nextToken
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      state
      value
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        state
        value
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const cartByOwner = /* GraphQL */ `
  query CartByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    CartByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        state
        value
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
