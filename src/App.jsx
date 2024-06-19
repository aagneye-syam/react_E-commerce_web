import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed bottom-4 right-4 z-index: 1000">
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                style={{
                  background: "blue",
                  borderRadius: "50%",
                  padding: "5px",
                }}
                className="text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">sidebar w-0</div>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
