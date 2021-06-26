import React, { useState, useContext } from 'react'

const HelloWorld = React.createContext();

const HelloPeople = ({children}) => {
    const [isSidebar,setIsSidebar] = useState(false);
    const [isModal,setIsModal] = useState(false);

    const showSidebar = () => {
        setIsSidebar(true);
    }
    const hideSidebar = () => {
        setIsSidebar(false);
    }
    const showModal = () => {
        setIsModal(true);
    }
    const hideModal = () => {
        setIsModal(false);
    }
    return (
        <HelloWorld.Provider value={{isSidebar,isModal,showModal,hideModal,showSidebar,hideSidebar}}>{children}</HelloWorld.Provider>
    )
}

export {HelloWorld,HelloPeople};


