let i=document.getElementById("i");
i.disabled=true;
const passwordChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '.', ',', ';', ':', '/', '?', '<', '>', '[', ']', '{', '}', '|', '~', '`'];
var upassoword;
function passwordGenerator(list) {
let password="";
const n = Math.floor(Math.random()*(4)+8);
const a=shuffle(list).slice(0,n);
for (let name of a) {
    password+=name;
}
return password
}

function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
//shuffle function written by chatGPT

b=document.getElementById("gen");
b.addEventListener("click",function(){

i.value=passwordGenerator(passwordChars);
});


d=document.getElementById("s");
d.addEventListener("click",function(){
if(d.textContent==="show"){
    i.setAttribute("type","text");
    d.textContent="hide";
}
    else{
        i.setAttribute("type","password");
        d.textContent="show";
    }
});

c=document.getElementById("c");
c.addEventListener("click",function(){


  
i.disabled=false;
i.setAttribute("type","text");
i.select();
document.execCommand("copy");
i.setAttribute("type","password");
i.disabled=true;

c.textContent = 'Done!';
setTimeout(() => {
    c.textContent = 'Ctrl+C';
  }, 1000);
    
});
