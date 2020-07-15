export interface IBeach {
    description: string;
    location: string;
    name: string;
    picture: string;
    state: string;
}

export interface IFilterData{
	selectedState: string;
	query: string;
}

export interface IBeachesFilter {
	states: string[];
	setFilter: (filter: IFilterData) => void;
}
export interface IBeachCard {
	beach: IBeach;
}