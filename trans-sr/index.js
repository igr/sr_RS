#!/usr/bin/env node

var chalk = require('chalk');
var fs = require('fs');
var path = require('path');
var program = require('commander');
var request = require('superagent');
const util = require('util');
const cyr2latin = require("./lib/cyr2latin");

// transcode the string using given conversion map
function trans(str, map) {
	var out = "";

	for (i = 0; i < str.length; i++) {
		const c = str[i];

		var transChar = map[c];
		if (transChar == undefined) {
			transChar = c;
		}

		out += transChar;
	}
	return out;
}

console.log('\n' + chalk.bold.bgBlue.white(' trans') + chalk.bold.white('-') + chalk.bold.bgRed.white('sr ') + '\n');

program
	.version('0.1.0')
	.option('-q, --quiet', 'Quiet mode')
	.option('-f, --file', 'Input is a file')
	.option('-o, --output <outFile>', 'Optional output file name')
	.option('-m, --map <mapName>', 'Transliteration map name.')
	.arguments('<input>', 'Input content')
	.action(function(input) {
		if (!program.quiet) {
			console.log(chalk.yellow('Converting input...\n'));
		}

		const currentDir = process.cwd();

		// read input file or input string
		var content = input;
		if (program.file) {
			content = fs.readFileSync(path.join(currentDir, input));
		}

		// define translitarion conversion map
		var mapName = 'cyr2latin';
		if (program.map) {
			mapName = program.map;
		}
		var realMap = eval(mapName);

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
