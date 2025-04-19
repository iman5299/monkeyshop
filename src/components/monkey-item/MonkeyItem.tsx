import Monkey from "../../types/model/Monkey.ts";

const MonkeyItem = ({name, gender, age} : Monkey) => {
    return (<div>
        <span>{name}</span>
        <span>{age}</span>
        <span>{gender}</span>
    </div>)
}

export default MonkeyItem;