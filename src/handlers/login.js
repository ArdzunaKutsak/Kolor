
const login = (event, admin) => {
    if(!admin.login)
    {
        switch (event.target.hash){
            case '#promo': admin.setParole(1);break;
            case '#contacts': admin.setParole(2);break;
            case '#price': admin.setParole(3);break;
            case '#about': admin.setParole(4);break;
            case '#work': admin.setParole(5);break;
            default: admin.setParole(0);break;
        }
        admin.setLogin(admin.parole)
    }
}

export default login