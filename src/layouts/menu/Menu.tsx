import {ChildContainerProps} from "../../types";
import {MenuProvider} from "./MenuContext.tsx";

const Menu = ({children}: ChildContainerProps) => {
    return (
        <MenuProvider>
            <div>
                <div>slam</div>
                <div>{children}</div>
            </div>
        </MenuProvider>
    )
}

export default Menu