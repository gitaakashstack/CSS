window.addEventListener("load",function(){
    console.log("here");
    console.log(document.getElementById("hammenu").nodeName);
    document.getElementById("hammenu").addEventListener("click",showMenu);
});

function showMenu(event){
    console.log("gotcha");
    if(document.querySelector(".menu>div:nth-child(1)").style.opacity==0)
    {    
        document.getElementById("hammenu").classList.toggle("cross");
        document.querySelector(".menu>div:nth-child(1)").style.opacity=1;
        document.querySelector(".menu>div:nth-child(1)").style.transform="scale(1,1)";
        
    }

    else
    {   
        document.querySelector(".menu>div:nth-child(1)").style.transform="scale(0,0)";
        document.querySelector(".menu>div:nth-child(1)").style.opacity=0;
        document.getElementById("hammenu").classList.toggle("cross");
    }

    console.log("then");
}
/*function showMenu(event){
    console.log("gotcha");
    $(".menu").fadeToggle(2000);
   

    console.log("then");
}*/
/*function showMenu(event){
    console.log("gotcha");
    if(document.styleSheets[0].cssRules[6].style.getPropertyValue("animation")=="")
    {    
        document.styleSheets[0].cssRules[6].style.setProperty("animation","animate1 1s forwards");
        
    }

    else
    {   
        document.styleSheets[0].cssRules[6].style.setProperty("animation","animate2 1s forwards");
        console.log("yup");
        window.setTimeout(function(){
            document.styleSheets[0].cssRules[6].style.removeProperty("animation");
            console.log("done");
        },1000);
        
    }

    console.log("then");
}*/