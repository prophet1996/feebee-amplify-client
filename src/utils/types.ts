export interface PersonalInfo {
  phoneNumber: string;
  displayName: string;
  firstName: string;
  lastName: string;
  address: string;
}
export interface preferences {
  // phoneNumber:string;
  // displayName:string;
}

export interface KYC {
  // phoneNumber:string,
  // displayName:string,
  aadharCardLink: string;
  documentLink: string;
}
export interface User extends PersonalInfo, preferences, KYC {
  id?: string;
  owner?: string;
}

export const foodCategory = {
  VEG: "VEG",
  "NONVEG": "NONVEG",
};

export type FoodCategory = "VEG" | "NONVEG";

export interface FoodPost {
  name: string;
  price: number;
  description: string;
  category: FoodCategory;
  cuisineTags: string[];
  cookingTime: string;
  cookingDate: string;
  uploadedImageUrl: string;
  servings: number;
  createdBy: string;
}

export interface FoodPostDocument {
  foodPost: FoodPost;
  authUid: string;
  createdBy: string;
  id: string;
}

export interface CustomFile extends File {
  preview: string;
  path: string;
}

export interface CartItem extends FoodPostDocument {}

export interface CartState {
  items: CartItem[];
  isCartShowing: boolean;
  totalCartAmount: number;
}

export interface CartContextType {
  items: CartItem[] | [];
  additem: (_: CartItem | undefined) => void;
  removeItem: (_: string) => void;
  clearCart: () => void;
  isCartShowing: boolean;
  toggleCart: () => void;
  updateCart: (_: CartState | undefined) => void;
  totalCartAmount: number;
}

export type FnType =()=>void;