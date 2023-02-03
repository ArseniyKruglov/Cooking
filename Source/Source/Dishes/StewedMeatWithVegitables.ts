import { BulbOnions, Chicken, Curry, FrozenVegetables, Potato, RawMeat, Salt, SourCream, Spice } from '../Backbone/Ingredients'
import { Dish } from '../Backbone/Dish'
import { Knife, Pan } from '../Backbone/Utensils'



export class StewedMeatWithVegitables extends Dish
{
	static Time: number = 30 * 60 * 1000

	static async Cook(): Promise<Dish>
	{
		const pan: Pan = new Pan()
		const knife: Knife = new Knife()



		const bulbOnions: BulbOnions = new BulbOnions()
		await bulbOnions.Cut(knife)		// На кубики
		await pan.Put(bulbOnions)
		await pan.Mix()

		setInterval(() => { pan.Mix() }, 60 * 1000)

		const rawMeat: RawMeat = new RawMeat()
		await rawMeat.Wash()
		await rawMeat.Cut(knife)
		await pan.Put(rawMeat)
		await pan.Mix()

		await pan.Put(new Salt())
		await pan.Put(new (Chicken.prototype.isPrototypeOf(rawMeat) ? Curry : Spice)())

		const potato: Potato = new Potato()
		await potato.Cut(knife)			// 1 см на 1 см
		await pan.Put(potato)
		await pan.Put(new Salt())
		await pan.Mix()

		const frozenVegetables: FrozenVegetables = new FrozenVegetables()
		await pan.Put(frozenVegetables)
		await pan.Mix()

		const sourCream: SourCream = new SourCream()
		await pan.Put(sourCream)		// Столовая ложка
		await pan.Mix()



		await pan.Lid.Close()

		return pan.Fire(StewedMeatWithVegitables.Time)
	}
}