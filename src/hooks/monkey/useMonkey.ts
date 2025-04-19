import {useCallback, useEffect, useState} from "react";
import Monkey from "../../types/model/Monkey.ts";

const useMonkey = () => {

    const [monkeys, setMonkeys] = useState<Monkey[]>()

    const loadMonkeys = useCallback(() => {
        setMonkeys([
            {name: 'first', age: 10, gender: 'male'},
            {name: 'second', age: 10, gender: 'male'},
            {name: 'monkey 1', age: 20, gender: 'male'},
            {name: 'monkey 2', age: 23, gender: 'male'},
            {name: 'last', age: 13, gender: 'male'},
        ])
    }, [])

    useEffect(() => {
        loadMonkeys()
    }, [])

    const addMonkey = useCallback((newMonkey: Monkey) => {
        setMonkeys(prevState => {
            return prevState ? [...prevState, newMonkey] : [newMonkey]
        })
    }, [])

    return {
        monkeys,
        loadMonkeys,
        addMonkey,
    }

}


export default useMonkey;