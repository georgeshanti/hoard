import fs from 'fs';
import path from 'path';

import * as util from '../util';

function init(subcommands:string[], options:{string:any}):void{
	var currentDirectory:string = process.cwd();
	util.getHoardDirectory(currentDirectory)
	.then((hoardDirectory:string)=>{
		console.log("Already in hoard repositiory '"+hoardDirectory+"'");
	})
	.catch(()=>{
		fs.mkdir(path.resolve(currentDirectory, ".hoard"),()=>{
			console.log("Initialized empty hoard repository in '"+currentDirectory+"'");			
		});
	})
}

export { init }