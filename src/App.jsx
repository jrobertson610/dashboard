import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Sidebar, ThemeSettings } from './components'
import { Dashboard, Sales, Contact, Donos, SalesReports } from './pages'

import { useStateContext } from './contexts/ContextProvider'

const App = () => {
    const { activeMenu, themeSettings, setthemeSettings, currentMode } = useStateContext()

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button
                                type="button"
                                className="text-3xl p-3 hover:drop-shadow-xl rounded-full"
                                onClick={() => {
                                    setthemeSettings(true)
                                }}
                            >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="mt-8 w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white dark:text-white">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                    )}
                    <div
                        className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
                            activeMenu ? 'md:ml-72' : 'flex-2'
                        }`}
                    >
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                        </div>

                        <div>
                            {themeSettings && <ThemeSettings />}

                            <Routes>
                                {/* Dashboard */}
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/dashboard" element={<Dashboard />} />

                                {/* Tables */}
                                <Route path="/sales" element={<Sales />} />
                                <Route path="/contact" element={<Contact />} />

                                {/* Reports */}
                                <Route path="/donos" element={<Donos />} />
                                <Route path="/salesreports" element={<SalesReports />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
