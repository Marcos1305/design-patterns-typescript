import { Beans, Rice, Beverage, Dessert } from './meals';
import { MealComposite } from './meal-composite';
import { MealBuilderProtocol } from './../interfaces/meal-builder-protocol';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealComposite = new MealComposite();

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    this._meal.add(rice, beans);

    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage('Vinho', 150);
    this._meal.add(beverage);

    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('Sobremesa', 50);
    this._meal.add(dessert);

    return this;
  }

  getMeal(): MealComposite {
    return this._meal;
  }

  reset(): this {
    this._meal = new MealComposite();

    return this;
  }
}
