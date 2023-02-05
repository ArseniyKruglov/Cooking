import { Dish } from './Dish'
import { Ingredient } from './Ingredient'
import { Utensil } from './Utensil'



export class Pan extends Utensil
{
	content: Ingredient[] = []
	lid: Lid = new Lid()

	put(ingredient: Ingredient): void		// TODO: Amount
	{

	}

	mix(): void
	{

	}

	fire(time: number, angle: number): Promise<Dish>
	{
		return new Promise((Resolve) =>
		{
			setTimeout(() => { Resolve(new Dish()) }, time);
		})
	}
}

class Lid
{
	open(): void
	{

	}

	close(): void
	{

	}
}



export class Knife extends Utensil
{

}