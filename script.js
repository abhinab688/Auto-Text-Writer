const text="I am Abhinab and I am a Backend Developer";

let index=0;

function writeText(){
    document.body.innerHTML=text.slice(0,index);

    index++;

    if (index > text.length){
        index=0;
    }

}
setInterval(writeText,100);