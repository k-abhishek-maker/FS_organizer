let fs = require("fs");
let path=require("path");
let types={
    media: ["mp4","mkv","mp3"],
    archives: ["zip","rar","7z","tar","gz","ar","iso","xz"],
    documents:["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex"],
    app:["exe","dmg","pkg","deb"]
}


function print1(srcpath){
    // console.log("organize command executed with path"+ src);
    if(srcpath==undefined){
        srcpath=process.cwd();
    }
    let organizedFilesPath= path.join(srcpath,"organized_files");
    if(fs.existsSync(organizedFilesPath)==false){
      fs.mkdirSync(organizedFilesPath);
    }
    let allTheFiles=fs.readdirSync(srcpath);
    for(let i=0;i<allTheFiles.length;i++){
     let fullPath=path.join(src,allTheFiles[i]);
       if(fs.lstatSync(fullPath).isFile()==true){
             let folderName=checkfileext(allTheFiles[i]);
             copyFileToDest(folderName,fullPath,srcpath);
       }
    }
}
function copyFileToDest(folderName,fullPath,srcpath){
let destFolderPath=path.join(srcpath,"organized_files",folderName);
  if(fs.existsSync(destFolderPath)==false){
   fs.mkdirSync(destFolderPath);
   }
   let originalFileName=path.basename(fullPath);
   let destFilePath=path.join(destFolderPath,originalFileName);
   fs.copyFileSync(fullPath,destFilePath);
  
}
function checkfileext(fileName){
   let extName= path.extname(fileName);
   extName=extName.slice(1);
   for(let key in types){
       for(let i=0;i<types[key].length;i++){
           if(types[key][i]==extName){
               return key;
           }
       }
   }
   return "others";
}

module.exports={
    fn: print1,
}