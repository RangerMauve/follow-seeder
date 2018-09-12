# follow-seeder
A basic library that loads a fritter profile's follows and loads their dat archives for seeding their Dats. Works with Webrun.

## Usage

```javascript
// Load through your favorite means
import seed from "https://unpkg.com/follow-seeder/follow-seeder.js";
import seed from "https://follow-seeder.hashbase.io/follow-seeder.js";
import seed from "dat://follow-seeder.hashbase.io/follow-seeder.js";

main();

async function main(){
	await seed("dat://fritter-rangermauve.hashbase.io", DatArchive);
}
```

Alternately you can run it with [Webrun](https://github.com/RangerMauve/webrun)

```
npm install -g webrun

webrun "dat://follow-seeder.hashbase.io/run.js?url=dat://fritter-rangermauve.hashbase.io"
```