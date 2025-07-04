export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  createdAt: Date;
  updatedAt: Date;
}