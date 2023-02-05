import { BulbOnions, FrozenVegetables, Potato, RawMeat, Salt, SourCream, Spice } from '../Backbone/Ingredients'
import { Dish } from '../Backbone/Dish'
import { Knife, Pan } from '../Backbone/Utensils'



export class StewedMeatWithVegitables extends Dish
{
	static cook
	(
		pan: Pan,
		knife: Knife,
		bulbOnions: BulbOnions,
		rawMeat: RawMeat,
		salt: Salt,
		spice: Spice,
		potato: Potato,
		frozenVegetables: FrozenVegetables,
		sourCream: SourCream
	): Promise<Dish>
	{
		// Bulb onions
		bulbOnions.Cut(knife)					// TODO: Cut into cubes
		pan.Put(bulbOnions)
		pan.Mix()

		// Start mixing every minute
		setInterval(() => { pan.Mix() }, 60 * 1000)

		// Raw meat
		rawMeat.Wash()
		rawMeat.Cut(knife)
		pan.Put(rawMeat)
		pan.Mix()

		// Spices
		pan.Put(salt)
		pan.Put(spice)

		// Potato
		potato.Cut(knife)					// TODO: 1 cm by 1 cm
		pan.Put(potato)
		pan.Put(salt)
		pan.Mix()

		// Frozen vegetables
		pan.Put(frozenVegetables)
		pan.Mix()

		// Sour cream
		pan.Put(sourCream)					// TODO: Tablespoon
		pan.Mix()



		pan.Lid.Close()

		const cookTime: number = 30 * 60 * 1000
		return pan.Fire(cookTime, 225)
	}
}