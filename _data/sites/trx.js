module.exports = {
	name: "trx.li", // optional, falls back to object key
	description: "The sites that get tested",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://axai.trx.li/",
		"https://synergy.trx.li/"
	]
};