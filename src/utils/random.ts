export default (min: number, max: number, excluding?: number): number => {
	let randomNumber = Math.floor(Math.random() * (+max + 1 - +min)) + min;
	if(excluding){
		while(excluding === randomNumber){
			randomNumber = Math.floor(Math.random() * (+max + 1 - +min)) + min;
		}
	}
	return randomNumber;
};