import axios from 'axios';

class Api {
	private routes = {
		BEACHES: '/beaches'
	}

	private api = axios.create({
		baseURL: 'https://us-central1-bestbeaches-fee91.cloudfunctions.net/api',
	});

	getBeachesData() {
		return this.api.get(this.routes.BEACHES);
	}
}

export default new Api();
