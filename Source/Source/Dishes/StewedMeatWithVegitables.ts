import { BulbOnions, Chicken, Curry, FrozenVegetables, Potato, RawMeat, Salt, SourCream, Spice } from '../Backbone/Ingredients'
import { Dish } from '../Backbone/Dish'
import { Knife, Pan } from '../Backbone/Utensils'



export class StewedMeatWithVegitables extends Dish
{
	static async Cook(): Promise<Dish>
	{
		const pan: Pan = new Pan()
		const knife: Knife = new Knife()



		const bulbOnions: BulbOnions = new BulbOnions()
		bulbOnions.Cut(knife)					// Cut into cubes
		pan.Put(bulbOnions)
		pan.Mix()

		setInterval(() => { pan.Mix() }, 60 * 1000)

		const rawMeat: RawMeat = new RawMeat()
		rawMeat.Wash()
		rawMeat.Cut(knife)
		pan.Put(rawMeat)
		pan.Mix()

		pan.Put(new Salt())
		pan.Put(new (Chicken.prototype.isPrototypeOf(rawMeat) ? Curry : Spice)())

		const potato: Potato = new Potato()
		potato.Cut(knife)					// 1 cm by 1 cm
		pan.Put(potato)
		pan.Put(new Salt())
		pan.Mix()

		const frozenVegetables: FrozenVegetables = new FrozenVegetables()
		pan.Put(frozenVegetables)
		pan.Mix()

		const sourCream: SourCream = new SourCream()
		pan.Put(sourCream)					// Tablespoon
		pan.Mix()



		pan.Lid.Close()

		const Time: number = 30 * 60 * 1000
		return pan.Fire(Time)
	}
}