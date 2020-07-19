export const USER_AGENT = process.browser ?window.navigator.userAgent:'Browser';
//this collection contains all the account details execpt the phone number  which we use to uniquely identify an account
export const USER_ACCOUNTS_COLLECTION = 'userAccounts';
export const FOOD_POSTS_COLLECTION = 'foodPosts';
export const FOOD_POSTS_SUB_COLLECTION = 'foodPostsSubCollections';
export const CUISINES_COLLECTION = 'cuisines';
export const FOOD_POST_IMAGES_REF = 'foodPostImages';
export const KYC_IMAGES_REF = 'KYCImages';
export const PROFILE_IMAGES_REF = 'ProfileImages';

//UI message code
export enum CODE{
SUCCESS=1,
FAILED=-1,
LOADING=0,
NO_INFO=2,
}

export {default as LABELS} from './i18_const';