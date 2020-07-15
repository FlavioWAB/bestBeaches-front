
import firebase from 'firebase';

class Firebase {

	firebaseConfig = {
		apiKey: 'AIzaSyDE0NuvpysR27oNczmjDcfBom1xVC8zfIY',
		authDomain: 'bestbeaches-fee91.firebaseapp.com',
		databaseURL: 'https://bestbeaches-fee91.firebaseio.com',
		projectId: 'bestbeaches-fee91',
		storageBucket: 'bestbeaches-fee91.appspot.com',
		messagingSenderId: '182796250126',
		appId: '1:182796250126:web:86b43ca19e393fc94ee05f',
		measurementId: 'G-FK77023E5L'
	}

	firebaseStorage: firebase.storage.Storage;

	constructor() {
		try {
			firebase.initializeApp(this.firebaseConfig);
		} catch (e) {
			console.log(e);
		}
		this.firebaseStorage = firebase.storage();
	}

	async getImageURL(url: string):Promise<string> {
		return this.firebaseStorage.refFromURL(url).getDownloadURL();
	}
}

export default Firebase;