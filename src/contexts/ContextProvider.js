import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
    userProfile: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setactiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentMode, setcurrentMode] = useState('Light')
    const [themeSettings, setthemeSettings] = useState(false)

    const setMode = (e) => {
        setcurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)
    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setactiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentMode,
                setcurrentMode,
                themeSettings,
                setthemeSettings,
                setMode
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
