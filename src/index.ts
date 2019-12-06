import minimist from 'minimist';
import * as util from './util';
import { init } from './commands/init';

var argv = minimist(process.argv.slice(2));
var commands:string[] = argv['_']
var command:string = commands[0]
var subcommands = commands.splice(1);
var options:{string:any} = argv; 
delete options["_"];

switch(command){
	case "init": init(subcommands, options);
				break;
	case undefined: console.log("Type a command");
				break;
	default: console.log("Invalid command", command);
				break;
}