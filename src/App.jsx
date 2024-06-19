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
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
          </div>

          <div>
            <Routes>
              <Route path="/" element="Ecommerce" />
              <Route path="/ecommerce" element="Ecommerce" />

              <Route path="/orders" element="Orders" />
              <Route path="/employees" element="Employees" />
              <Route path="/customers" element="Customers" />

              <Route path="/kanban" element="kanban" />
              <Route path="/editor" element="Editor" />
              <Route path="/calendar" element="Calendar" />
              <Route path="/color-picker" element="ColorPicker" />

              <Route path="/line" element="Line" />
              <Route path="/area" element="Area" />
              <Route path="/bar" element="Bae" />
              <Route path="/pie" element="Pie" />
              <Route path="/financial" element="Financial" />
              <Route path="/color-mapping" element="ColorMapping" />
              <Route path="/pyramid" element="Pyramid" />
              <Route path="/stacked" element="Stacked" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
