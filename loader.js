let preload=() =>{
    const blocks=document.querySelectorAll('.preloader .blocks .block');
    let interval=0;
    blocks.forEach((block,i)=>{
        setTimeout(()=>{
        animate(block,i);
        }, interval);
        interval += 500;
    });
    function animate(block,index){
        let position=index;
        setInterval(()=>{
         switch(position){
            case 0:
                block.style.top="40px";
                position=3;
                break;
            case 1:
                block.style.left="40px";
                position=0;
                break;
             case 2:
                block.style.top="0px";
                position=1;
                break;
            case 3:
                block.style.left="0px";
                position =2;
                break;

         }
        },1500);
    }
    const preload_text=document.querySelector('.preloader .preload-text');
    let dots=1;
    setInterval(() => { 
        switch (dots) {
            case 1:
                preload_text.textContent="...FOLIO";
                dots =2;
                break;
            case 2:
                preload_text.textContent="..FOLIO.";
                dots ++;
                break;
            case 3:
                preload_text.textContent=".FOLIO..";
                dots ++;
                break;
            case 4:
                    preload_text.textContent="FOLIO...";
                    dots ++;
                    break;
            case 5:
             preload_text.textContent=".FOLIO..";
                        dots ++;
                        break;
            case 6:
                            preload_text.textContent="..FOLIO.";
                            dots =1;
                            break;
        }
    }, 500);

}
preload();
function finishedLoading(){
    setTimeout(()=>{
        document.getElementById('preloader').style.display="none";
        document.getElementById('ashish').style.display="block";
    },500);
}
window.onload=function(){
    setTimeout(()=>{
        finishedLoading();
        
    },5000);
}