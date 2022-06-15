import { observer } from "mobx-react-lite";
import Sizing from "../handlers/Sizing";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";
import Tablet from "./Tablet/Tablet";


const Screen = observer(() => {
    if(window.screen.width < 600) return <Mobile />
    if(window.screen.width < 1024) return <Tablet />
    else return <Desktop />
        
    
})

export default Screen;