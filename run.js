// This is made to be used with https://github.com/RangerMauve/webrun

import seed from "./follow-seeder.js";

const url = new URL(import.meta.url);

const toSeed = url.searchParams.get("url");

seed(toSeed, DatArchive);