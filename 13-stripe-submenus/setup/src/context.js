import React, { useState, useContext } from 'react'
import { FaFontAwesomeLogoFull } from 'react-icons/fa';
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebar,setIsSidebar] = useState(false);
    const [isSubMenu,setIsSubMenu] = useState(false);
    const [location,setLocation] = useState({});
    const [menuContent,setMenuContent] = useState({page:"",links:[]});

    const showSidebar = () => {
        setIsSidebar(true);
    }
    const hideSidebar = () => {
        setIsSidebar(false);
    }
    const showSubMenu = (name,orientationn) => {
        setIsSubMenu(true);
        setLocation(orientationn);
        const singleContent = sublinks.find((link)=>link.page === name);
        setMenuContent(singleContent);
    }
    const hideSubMenu = () => {
        setIsSubMenu(false);
    }

    return (
        <AppContext.Provider value={
            {isSidebar,
            isSubMenu,
            showSidebar,
            hideSidebar,
            showSubMenu,
            hideSubMenu,
            location,
            menuContent,}
        }>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
