let fs=require("fs");
let path=require("path");

function print(srcpath){
if(srcpath==undefined){
    srcpath=process.cwd();
}
let content= fs.readdirSync(srcpath);
let parentfolder=path.basename(srcpath);
let completePath="|__"+parentfolder;
for(let i=0;i<content.length;i++){
   completePath=completePath+"\n\t"+"|--"+content[i];
 }
   console.log(completePath); 
}
module.exports={
    fxn: print
}