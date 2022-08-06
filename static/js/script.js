window.addEventListener('DOMContentLoaded',function () {
    window.addEventListener('scroll',function() {
        const header =document.querySelector('header');
        header.classList.toggle('sticly',window.scrollY>0)
    })


    const menuBtn = document.querySelector('.menu-btn')
    const navigation=document.querySelector('.navbar')
    const navigationItems=document.querySelectorAll('.navbar a')
    menuBtn.addEventListener('click',()=>{
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')

    })
    navigationItems.forEach(navItem=>{
        navItem.addEventListener('click',()=>{
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
        })
    })
    const scrollBtn=document.querySelector('.scroll-btn')
    window.addEventListener('scroll',()=>{
        scrollBtn.classList.toggle('active',window.scrollY>500)
    })
    scrollBtn.addEventListener('click',()=>{
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;

    })
    window.addEventListener('scroll', ()=>{
        let reavels = document.querySelectorAll('.reavel')

        for(let i=0;i<reavels.length; i++){
            let windowHeight=window.innerHeight;
            let revealTop=reavels[i].getBoundingClientRect().top;
            let revealPoint = 50;
            if(revealTop < windowHeight - revealPoint){
                reavels[i].classList.add('active')
            }
        }
    })
    
})
