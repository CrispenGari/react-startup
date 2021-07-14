export enum Types {
  SET_USER = "SET_USER",
  SET_COUNTER = "SET_COUNTER",
}
type UserType =
  | {
      name: string;
      id: number;
    }
  | any;

export const userReducer = (
  state: UserType,
  action: ProductActions | ShoppingCartActions
) => {};
