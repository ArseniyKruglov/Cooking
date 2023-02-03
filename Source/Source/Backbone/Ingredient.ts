import { Knife } from './Utensils'
import { Wait } from './Util'



export abstract class Ingredient
{
	Cut(knife: Knife): Promise<void>
	{
		const Time: number = 10 * 1000

		return Wait(Time)
	}

	Wash(): Promise<void>
	{
		const Time: number = 10 * 1000

		return Wait(Time)
	}
}