
        // var counter = 1;
        // setInterval(function(){
        //   document.getElementById('radio' + counter).checked = true;
        //   counter++;
        //   if(counter > 4){
        //     counter = 1;
        //   }
        // }, 5000);
        let menuIcon=document.querySelector('#menu-icon');
        let navbar=document.querySelector('.navbar');
        
        menuIcon.onclick=()=>{
            menuIcon.classList.toggle('fa-x');
            navbar.classList.toggle('active');
        };
        
        
        
        // //sticky navbar
        // let header=document.querySelector('header');
        // header.classList.toggle('sticky', window.scrollY>100);
        
        
        // menuIcon.classList.remove('fa-x');
        // navbar.classList.remove('.active');