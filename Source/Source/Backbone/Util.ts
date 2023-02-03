export function Wait(Time: number): Promise<void>
{
	return new Promise((Resolve) =>
	{
		setTimeout(() => { Resolve() }, Time)
	})
}