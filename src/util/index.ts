import path from 'path';
import fs from 'fs';

function getHoardDirectory(directory):Promise<string>{
	return new Promise((resolve, reject)=>{
		fs.readdir(directory, function(err, items) {
			if(directory=="/" && !items.includes(".hoard")){
				reject();
			}
			else if(items.includes(".hoard"))
				resolve(directory);
			else{
				var parentDirectory:string = path.resolve(directory, "..");
				getHoardDirectory(parentDirectory)
				.then((hoardDirectory)=>{
					resolve(hoardDirectory);
				})
				.catch(()=>{
					reject();
				})
			}
		});
	})
}

export { getHoardDirectory }