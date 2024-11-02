import { createContext, useEffect, useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [mode, setMode] = useState("html");
  const [layout, setLayout] = useState("grid");
  const [columns, setColumns] = useState("0");
  const [gap, setGap] = useState("0");
  const [flexDirection, setFlexDirection] = useState("");
  const [justifyContent, setJustifyContent] = useState("");
  const [alignItems, setAlignItems] = useState("");
  const [itemsCount, setItemsCount] = useState(1);
  const [wrap, setWrap] = useState("");
  const items = Array.from({ length: itemsCount }, (_, i) => i + 1);
  let class_name = mode === "html" ? "class" : "className";
  return (
    <AppContext.Provider
      value={{
        mode,
        setMode,
        layout,
        setLayout,
        columns,
        setColumns,
        gap,
        setGap,
        flexDirection,
        setFlexDirection,
        justifyContent,
        setJustifyContent,
        alignItems,
        setAlignItems,
        items,
        setItemsCount,
        itemsCount,
        class_name,
        wrap,
        setWrap,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
