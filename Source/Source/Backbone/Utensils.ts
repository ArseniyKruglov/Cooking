import { Dish } from './Dish'
import { Ingredient } from './Ingredient'
import { Utensil } from './Utensil'
import { Wait } from './Util'



export class Pan extends Utensil
{
	Content: Ingredient[] = []
	Lid: Lid = new Lid()

	Put(ingredient: Ingredient): Promise<void>
	{
		this.Content.push(ingredient)


		const Time: number = 15 * 1000

		return Wait(Time)
	}

	Mix(): Promise<void>
	{
		const Time: number = 10 * 1000

		return Wait(Time)
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
	Open(): Promise<void>
	{
		const Time: number = 10 * 1000

		return Wait(Time)
	}

	Close(): Promise<void>
	{
		const Time: number = 10 * 1000

		return Wait(Time)
	}
}



export class Knife extends Utensil
{

}