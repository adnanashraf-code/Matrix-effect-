let para =document.querySelector('p')
let text= para.innerText

let letters="ABCDEFGHIJKLMNOPURSTUVWXYZabcdefghijklmnopurstuvwxyz"


para.addEventListener('mouseenter',function(dets){
    let flag=0
    
  let interval=  setInterval(() => {
    function addon(){
        let str =text.split("").map((char,index)=>{
            if (flag>index) {
                return char
            }
            return letters.split("")[Math.floor(Math.random()*52)]
        }).join("")
        para.innerText=str
        flag+=0.25

        if (flag>=text.length) {
            para.innerText=text;
            clearInterval(interval);
        }
    }
    addon()
    
    }, 10);
    
})

