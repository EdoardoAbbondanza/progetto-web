//rafce
import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import '.App.css'

const App = () => {
    constactiveMenu = true;


  return (
    <div>
        <BrowserRouter>
        <div>
            <div>
                <TooltipComponent content="Settings" position="Top">
                    <button type="button" className="text-3x1 p-3 hover: drop-shadow-x1 text-white" style={{ background: 'blue', borderRadius: '50%'}}>
                        <FiSettings />
                    </button>
                </TooltipComponent>
            </div>
            {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark bg-white">
                    Sidebar
                </div>
            )}
            <div className={
                activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full'
                : 'dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2'
            }>
                <div className>

                </div>
            </div>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default App