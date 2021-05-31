
    let items=document.querySelectorAll(".timeline li>div");
    window.addEventListener("load",()=>{console.log("load");isInViewport(items);});
    document.addEventListener("scroll",()=>{isInViewport(items);});

function isInViewport(items)
{
    console.log("yr");
    items.forEach(function(item,indx){
        const dim=item.getBoundingClientRect();
        console.log(dim);
        if(dim.top>=0 && dim.left>=0 && dim.bottom<=window.innerHeight && dim.right<=window.innerWidth)
        {
            console.log("here");
            if((indx+1)%2!=0)
                item.classList.add("showodd");
            else
                item.classList.add("showeven");
        }
    })
}