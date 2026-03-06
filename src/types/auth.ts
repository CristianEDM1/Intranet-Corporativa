export type UserRole =
  | "admin"
  | "ti"
  | "capital_humano"
  | "juridica"
  | "retail"
  | "ecommerce";
  
  export interface User {
  id: number;
  name: string;
  role: UserRole;
}