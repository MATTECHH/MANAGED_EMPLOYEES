import { useReducer, useRef, useState } from "react";

export const useForm = (url) => {
    const initialState = {
        status: "Parado"
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "Escrevendo":
                return {...state, status: "Escrevendo"}
            case "Parado":
                return {...state, status: "Parado"}
            case "Enviando":
                return {...state, status: "Enviando"}
            case "Enviado":
                return {...state, status: "Enviado"}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const{status} = state
    
    const timeoutof = useRef(null)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [chave, setChave] = useState("")
    const [numero, setNumero] = useState("")

    const onName = (e) => {
        setName(e.target.value)

        clearTimeout(timeoutof.current)

        dispatch({type: "Escrevendo"})

        timeoutof.current =  setTimeout(() => {
            dispatch({type: "Parado"})
        }, 1000);
    }
    const onEmail = (e) => {
        setEmail(e.target.value)

        clearTimeout(timeoutof.current)

        dispatch({type: "Escrevendo"})

        timeoutof.current =  setTimeout(() => {
            dispatch({type: "Parado"})
        }, 1000);
    }
    const onCpf = (e) => {
        setCpf(e.target.value)

        clearTimeout(timeoutof.current)

        dispatch({type: "Escrevendo"})

        timeoutof.current =  setTimeout(() => {
            dispatch({type: "Parado"})
        }, 1000);
    }
    const onChave = (e) => {
        setChave(e.target.value)

        clearTimeout(timeoutof.current)

        dispatch({type: "Escrevendo"})

        timeoutof.current =  setTimeout(() => {
            dispatch({type: "Parado"})
        }, 1000);
    }
    const onNumero = (e) => {
        setNumero(e.target.value)

        clearTimeout(timeoutof.current)

        dispatch({type: "Escrevendo"})

        timeoutof.current =  setTimeout(() => {
            dispatch({type: "Parado"})
        }, 1000);
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        dispatch(({type: "Enviando"}))

        const add = {
            name,
            email,
            cpf,
            chave,
            numero
        }

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(add)
            });

            if(!res.ok){
                console.log("Erro ao buscar dados");
            }

            await res.json();
            
            setTimeout(() => {
                dispatch({ type: "Enviado" });
            }, 1000);

            setName("")
            setEmail("")
            setCpf("")
            setChave("")
            setNumero("")
        } catch (e) {
            console.log("Erro ao criar novo usuario", e);
        }
    };

    return {
        status,
        name,
        email,
        cpf,
        chave,
        numero,
        onName,
        onEmail,
        onCpf,
        onChave,
        onNumero,
        handleSubmit
    }
}