const TO_DOWNLOAD = [
	"/profile.json",
	"/posts/",
	"/votes/"
];

export default async function seed(userURL, DatArchive) {
	const followedURLs = new Set();

	const profileArchive = await DatArchive.load(userURL);

	await follow(userURL);

	const evts = profileArchive.watch("profle.json");

	evts.addEventListener('invalidated', () => {
		loadFollows();
	});

	await loadFollows();

	async function loadFollows() {
		const rawProfile = await profileArchive.readFile("/profile.json", "utf8");

		const profileData = JSON.parse(rawProfile);

		const follows = profileData.follows || [];

		for (let following of follows) {
			const followingURL = following.url || following;
			await follow(followingURL);
		}
	}

	async function follow(url) {
		if(followedURLs.has(url)) return;
		console.log(`Seeding ${url}`);
		try {
			const followArchive = await DatArchive.load(url)
			for(let path of TO_DOWNLOAD) {
				try {
					await followArchive.download(path);

				} catch(e) {
					console.error(`Unable to seed ${path} in ${url}`);
				}
			}
		} catch (e) {
			console.error(e);
		}
	}
}