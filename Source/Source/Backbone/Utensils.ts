import { Dish } from './Dish'
import { Ingredient } from './Ingredient'
import { Utensil } from './Utensil'



export class Pan extends Utensil
{
	Content: Ingredient[] = []
	Lid: Lid = new Lid()

	Put(ingredient: Ingredient): void
	{

	}

	Mix(): void
	{

	}

	Fire(Time: number): Promise<Dish>
	{
		return new Promise((Resolve) =>
		{
			setTimeout(() => { Resolve(new Dish()) }, Time);
		})
	}
}

class Lid
{
	Open(): void
	{

	}

	Close(): void
	{

	}
}



export class Knife extends Utensil
{

}