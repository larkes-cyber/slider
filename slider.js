function sliders(){
    const next=document.querySelector('.offer__slider-next'),
        prev=document.querySelector('.offer__slider-prev'),
        wind=document.querySelector('.offer__slider-wrapper'),
        wrapper=document.querySelector('.wrapper'),
        slids=document.querySelectorAll('.offer__slide'),
        width=window.getComputedStyle(wind).width,
        span=document.querySelector('#current'),
        title=document.querySelector('#total'),
        slider=document.querySelector('.offer__slider');
        title.textContent=(slids.length>=10)?slids.length:'0'+slids.length;
        slids.forEach(item=>{
                item.style.width='100%';
        });
        wrapper.style.width= (100 * slids.length) + '%';
        wrapper.style.display='flex';
        wind.style.overflow='hidden';
        wrapper.style.transition="0.5s all";
        let often=0;
        let index=1;
        slider.style.position='relative';
        const wrapperNav=document.createElement('ol');
        wrapperNav.style.cssText=`
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
        `;
        slider.append(wrapperNav);
        let arrDots=[];
        for(let i=0; i < slids.length;i++){
            const dot=document.createElement('li');
            dot.style.cssText=`
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
            `;
            dot.setAttribute('data-to',i+1);
            arrDots.push(dot);
            wrapperNav.append(dot);
        };
        arrDots.forEach(item=>item.style.opacity='0.5');
        arrDots[index-1].style.opacity='1';
        span.textContent=(index>10)?index:'0'+index;
        next.addEventListener('click',()=>{
            if (often == width.slice(0,-2) * (slids.length-1)){
                often=0;
            }else{
                often+=+width.slice(0,-2);
            }

        
            wrapper.style.transform=`translateX(-${often}px)`;
            if(index==slids.length){
                index=1;
            }else{
                index++;
            }
            span.textContent=(index>10)?index:'0'+index;
            arrDots.forEach(item=>item.style.opacity='0.5');
            arrDots[index-1].style.opacity='1';
            console.log(index)
    
        });
        prev.addEventListener('click',()=>{
            if(often==0){
                often=width.slice(0,-2) * (slids.length-1);
            }
            else{
                often-=width.slice(0,-2);
            }
            if(index==1){
                index=slids.length;
            }else{
                index--;
            }
            span.textContent=(index>10)?index:'0'+index;


            wrapper.style.transform=`translateX(-${often}px)`;
            arrDots.forEach(item=>item.style.opacity='0.5');
            arrDots[index-1].style.opacity='1';
    
        });
        arrDots.forEach(item=>{
            item.addEventListener('click',(e)=>{
            const elem=e.target.getAttribute('data-to')-1;
                wrapper.style.transform=`translateX(-${+width.slice(0,-2)*elem}px)`;
                arrDots.forEach(item=>item.style.opacity='0.5');
                often=+width.slice(0,-2)*elem;
                index=elem+1;
                span.textContent=(index>10)?index:'0'+index;
                arrDots[index-1].style.opacity='1';
        
            });
        });
    }
    export default sliders;