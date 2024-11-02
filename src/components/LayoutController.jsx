import { Atom, FileCode, Grid2X2, Layout } from "lucide-react";
import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const LayoutController = () => {
  const {
    mode,
    setMode,
    layout,
    setLayout,
    columns,
    setColumns,
    gap,
    setGap,
    setFlexDirection,
    setJustifyContent,
    setAlignItems,
    itemsCount,
    setItemsCount,
    wrap,
    setWrap,
  } = useContext(AppContext);

  const step = () => {
    if (gap < 4) {
      return 0.5;
    } else if (gap < 12) {
      return 1;
    } else if (gap < 16) {
      return 2;
    } else if (gap >= 16) {
      return 4;
    }
  };

  const handleLayout = () => {
    setLayout("grid");
    setColumns(columns > 12 ? 12 : columns);
  };

  return (
    <div className="bg-slate-50 px-6 py-6 md:px-10">
      <h1 className="text-2xl md:text-3xl text-purple-800 font-bold text-center uppercase">
        Layout Controller
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-6 my-10">
        {/* Layout Mode Toggle */}
        <div className="inline-flex space-x-2">
          <button
            onClick={handleLayout}
            className={`${
              layout === "grid"
                ? "bg-purple-500 text-white"
                : "bg-gray-300 text-gray-800"
            } font-bold py-2 px-4 flex items-center transition-all duration-300 ease-in-out rounded-lg hover:shadow-md`}
          >
            <Grid2X2 className="h-5" />
            <span className="ml-2">Grid</span>
          </button>
          <button
            onClick={() => setLayout("flex")}
            className={`${
              layout === "flex"
                ? "bg-purple-500 text-white"
                : "bg-gray-300 text-gray-800"
            } font-bold py-2 px-4 flex items-center transition-all duration-300 ease-in-out rounded-lg hover:shadow-md`}
          >
            <Layout className="h-5" />
            <span className="ml-2">Flex</span>
          </button>
        </div>

        {/* Mode Selection */}
        <div className="inline-flex space-x-2">
          <button
            onClick={() => setMode("html")}
            className={`${
              mode === "html"
                ? "bg-purple-500 text-white"
                : "bg-gray-300 text-gray-800"
            } font-bold py-2 px-4 flex items-center transition-all duration-300 ease-in-out rounded-lg hover:shadow-md`}
          >
            <FileCode className="h-5" />
            <span className="ml-2">HTML</span>
          </button>
          <button
            onClick={() => setMode("react")}
            className={`${
              mode === "react"
                ? "bg-purple-500 text-white"
                : "bg-gray-300 text-gray-800"
            } font-bold py-2 px-4 flex items-center transition-all duration-300 ease-in-out rounded-lg hover:shadow-md`}
          >
            <Atom className="h-5" />
            <span className="ml-2">React</span>
          </button>
        </div>
      </div>

      {/* Inputs for Items Count and Columns */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex flex-col items-center">
          <label className="uppercase text-gray-600 font-semibold">
            Items Count:
          </label>
          <input
            type="number"
            min="1"
            value={itemsCount}
            onChange={(e) => setItemsCount(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 w-20 text-center mt-1 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all"
          />
        </div>

        {layout === "grid" && (
          <div className="flex flex-col items-center">
            <label className="uppercase text-gray-600 font-semibold">
              Columns:
            </label>
            <input
              type="number"
              min="1"
              max={layout === "grid" ? 12 : null}
              value={columns}
              onChange={(e) => setColumns(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1 w-20 text-center mt-1 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all"
            />
          </div>
        )}

        <div className="flex flex-col items-center">
          <label className="uppercase text-gray-600 font-semibold">Gap:</label>
          <input
            type="number"
            min="0"
            step={step()}
            max={96}
            value={gap}
            onChange={(e) => setGap(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 w-20 text-center mt-1 focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all"
          />
        </div>
      </div>

      {/* Options for Flex Direction, Justify Content, and Align Items */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        {layout === "flex" && (
          <>
            <div className="flex flex-col items-center">
              <label className="uppercase text-gray-600 font-semibold">
                Flex Direction:
              </label>
              <select
                onChange={(e) => setFlexDirection(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-1 w-24 mt-1 text-center focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all"
              >
                <option value="">Row</option>
                <option value="flex-col">Column</option>
              </select>
            </div>
            <div className="flex flex-col items-center">
              <label className="uppercase text-gray-600 font-semibold">
                Flex Wrap:
              </label>
              <select
                onChange={(e) => setWrap(e.target.value)}
                className="border  border-gray-300 rounded-lg px-3 py-1 w-24 mt-1 text-center focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all"
              >
                <option value="">No Wrap</option>
                <option value="flex-wrap">Wrap</option>
                <option value="flex-wrap-reverse">Wrap Reverse</option>
              </select>
            </div>
          </>
        )}

        <div className="flex flex-col items-center">
          <label className="uppercase text-gray-600 font-semibold ">
            Justify Content:
          </label>
          <select
            onChange={(e) => setJustifyContent(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 w-24 mt-1 text-center focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all"
          >
            <option value="">Start</option>
            <option value="justify-center">Center</option>
            <option value="justify-end">End</option>
            <option value="justify-between">Space Between</option>
            <option value="justify-around">Space Around</option>
            <option value="justify-evenly">Space Around</option>
          </select>
        </div>

        <div className="flex flex-col items-center">
          <label className="uppercase text-gray-600 font-semibold">
            Align Items:
          </label>
          <select
            onChange={(e) => setAlignItems(e.target.value)}
            className="border border-gray-300  rounded-lg px-3 py-1 w-24 mt-1 text-center focus:border-purple-500 focus:ring focus:ring-purple-200 transition-all"
          >
            <option value="">Start</option>
            <option value="items-center">Center</option>
            <option value="items-end">End</option>
            <option value="items-stretch">Stretch</option>
            <option value="items-baseline">Baseline</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LayoutController;
