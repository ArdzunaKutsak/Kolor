
const login = (event, admin) => {
    if(!admin.login)
    {
        switch (event.target.hash){
            case '#contacts': admin.setParole(1);break;
            case '#price': admin.setParole(2);break;
            case '#about': admin.setParole(3);break;
            case '#work': admin.setParole(4);break;
            default: admin.setParole(0);break;
        }
        admin.setLogin(admin.parole)
    }
}

export default login