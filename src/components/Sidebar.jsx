import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import Logo from '../assets/logo.svg'

import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
    const { activeMenu, setactiveMenu, screenSize } = useStateContext()

    const handleCloseSidebar = () => {
        if (activeMenu && screenSize <= 900) {
            setactiveMenu(false)
        }
    }

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2'
    const normalLink =
        'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

    return (
        <div className=" h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <Link
                            to="/"
                            onClick={handleCloseSidebar}
                            className="my-8 mx-auto flex justify-center items-center max-w-[100px]"
                        >
                            <img src={Logo} alt="" />
                        </Link>
                        <TooltipComponent content="Menu" position="BottomCenter">
                            <button
                                type="button"
                                onClick={() => setactiveMenu((prevActiveMenu) => !prevActiveMenu)}
                                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                            >
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className="mt-10">
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                                {item.links.map((Link) => (
                                    <NavLink
                                        to={`/${Link.name}`}
                                        key={links.name}
                                        onClick={handleCloseSidebar}
                                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                    >
                                        {Link.icon}
                                        <span className="capitalize">{Link.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Sidebar
