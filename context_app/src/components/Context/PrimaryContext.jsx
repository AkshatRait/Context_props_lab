import { createContext, useState } from "react";

// create context
export const primaryContext = createContext();

// create provider (add states)
// return providerJSX

const PrimaryProvider = (props) => {
    const [localProducts, setLocalProducts] = useState([]);

    return (
        <primaryContext.Provider value={{
            localProducts,
            setLocalProducts
        }}>
                {props.children}
        </primaryContext.Provider>
    )
}

export default PrimaryProvider;