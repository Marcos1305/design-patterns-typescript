import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class MealComposite implements MealCompositeProtocol {
  private readonly meals: MealCompositeProtocol[] = [];

  add(...meal: MealCompositeProtocol[]): void {
    meal.forEach((meal) => this.meals.push(meal));
  }

  getPrice(): number {
    return this.meals.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }
}
