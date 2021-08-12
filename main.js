let helpobj = require("./command/help");
let orgobj=require("./command/organize");
let treeobj=require("./command/tree");
let inputArr=process.argv.slice(2);
switch(inputArr[0]){
    case "help":helpobj.fxn();
    break;
    case "tree":treeobj.fxn(inputArr[1]);
    break;
    case "organize":orgobj.fn(inputArr[1]);
    break;
    default:
        console.log("wrong command");
    break;
}
