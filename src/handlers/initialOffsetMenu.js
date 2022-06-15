import Sizing from "./Sizing";

const initialOffsetMenu = () => {
    let desktop = Sizing();
    if(!desktop) {return {initialOffset:'300px', desktop: false}}
    else {return {initialOffset:'0px', desktop: true}}
}

export default initialOffsetMenu