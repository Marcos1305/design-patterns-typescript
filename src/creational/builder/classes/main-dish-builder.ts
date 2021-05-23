import { Beans, Meat, Rice, Beverage, Dessert } from './meals';
import { MealComposite } from './meal-composite';
import { MealBuilderProtocol } from './../interfaces/meal-builder-protocol';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealComposite = new MealComposite();

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    const meat = new Meat('Carne', 20);
    this._meal.add(rice, beans, meat);

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
