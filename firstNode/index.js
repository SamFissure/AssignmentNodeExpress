
const readline = require("readline");

const fs=require("fs");

//array for filenames
var filenames=[]

//main
function main(){
    try {  
        
        var data = fs.readFileSync('files.txt', 'utf8');
        
        var readfilenames=data.toString();
        
        if(readfilenames!==""){
            
            readfilenames=readfilenames.split("\n");
            readfilenames=readfilenames.map(filename=>{
                filenames.push(filename.replace("\r",""));
            })
            
            userinput();
        }
       
        else{
            userinput();
        }
    } catch(e) {
        console.log('Error : ', e.stack);
    }
}

main()



function userinput(){
    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question("Enter name of file : ", function(filename) {
        
        if(filenames.includes(filename)){
            
            console.log("File exists, no new file will be made");
            
            rl.close();
           
            return userinput();
        }
        
        else{
           
            filenames.push(filename);
            
            editFileNames(filenames)
            
            createNewFile(filename);
            rl.close();
        }
    });
}

function editFileNames(files){
    
    var str="";
    for(let i=0;i<files.length;i++){
        str=str+files[i]+'\n';
    }
   
    fs.writeFile("./files.txt", str, function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
}

function createNewFile(filename){
    fs.writeFile(filename+'.txt', 'You are awesome', function (err) {
        if (err) throw err;
    });
}