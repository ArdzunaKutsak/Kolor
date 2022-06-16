import login from "./login"

 function navClick(e, admin, desktop, offset, setOffset){
    login(e,admin)
    if(!desktop)
    {
        if(offset !== '0px') {setOffset('0px')}
        else {setOffset('300px')}
        
    }
    else {
        e.preventDefault()
        const menuArray = ['#contacts', '#price', '#work', '#about']
        document.querySelector('#tagline').style.opacity = 0;
        menuArray.forEach(each => {
            const elem = document.querySelector(each)
            elem.style.opacity = 0;
            elem.style.transform = 'translateX(200%)';
        })
        const component = document.querySelector(`${e.target.hash}`)
        if(component.style.transform !== 'translateX(0px)') {
            component.style.opacity = 1;
            component.style.transform = 'translateX(0px)'
        }
        else {
            component.style.opacity = 0;
            component.style.transform = 'translateX(200%)';}
    }
  
}

export default navClick