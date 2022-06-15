import {makeAutoObservable}  from 'mobx'

const check = (list)=>{
    return (
        list[0] === 1 && list[1] === 1 
        && 
        list[2] === 4 && list[3] === 2)
}

export class Admin {

    constructor() {
        this._parole = [];
        this._isLogin = false;
        makeAutoObservable(this);
    }
    setParole(num) {
        if(!this._isLogin)
        {
            if(this._parole.length < 4)
                {
                this._parole.push(num)
                } 
            else this._parole = []
        }
    }

    setLogin(parole) {
        if(check(parole)) {this._isLogin = true}
    }

    get parole() {return this._parole}
    get login() {return this._isLogin}
} 