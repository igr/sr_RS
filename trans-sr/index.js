#!/usr/bin/env node

let chalk = require('chalk');
let fs = require('fs');
let path = require('path');
let program = require('commander');
const util = require('util');
const cyr2lat = require("./lib/cyr2latin");
const lat2cyr = require("./lib/latin2cyr");

// transcode the string using given conversion map
function trans(str, map) {
	let out = "";

	for (i = 0; i < str.length; i++) {
		const c = str[i];

		let transChar = map[c];
		if (!transChar) {
			transChar = c;
		}

		out += transChar;
	}
	return out;
}

console.log('\n' + chalk.bold.bgBlue.white(' trans') + chalk.bold.white('-') + chalk.bold.bgRed.white('sr ') + '\n');

program
	.version('1.1.0')
	.option('-q, --quiet', 'Quiet mode')
	.option('-f, --file', 'Input is a file')
	.option('-o, --output <outFile>', 'Optional output file name')
	.arguments('<mapName>', 'Transliteration map name: cyr2lat, lat2cyr')
	.arguments('<input>', 'Input content')
	.action(function(mapName, input) {
		if (!program.quiet) {
			console.log(chalk.yellow(`Converting input with ${mapName}:\n`));
		}

		const currentDir = process.cwd();

		// read input file or input string
		let content = input;
		if (program.file) {
			content = fs.readFileSync(path.join(currentDir, input));
		}

		// conversion map
		let realMap = eval(mapName);

		out = trans(content.toString(), realMap.map);

		// write to output
		if (program.output) {
			fs.writeFileSync(path.join(currentDir, program.output), out);
			console.log("Result written to: %s", program.output);
		}
		else {
			console.log(out);
		}

	})
	.parse(process.argv);
