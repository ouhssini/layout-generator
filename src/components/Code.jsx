import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import CodeResult from "./CodeResult";
import Preview from "./Preview";

const Code = () => {
  const {
    layout,
    columns,
    gap,
    flexDirection,
    justifyContent,
    alignItems,
    items,
    class_name,
    wrap,
  } = useContext(AppContext);

  const content = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, dolorum?",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, lorem 20 is more longer dolorum?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae fuga maxime aliquid ratione consectetur nostrum, reiciendis animi sequi temporibus quas alias repellat! Quasi adipisci, ipsum molestias et quaerat tempora!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae fuga maxime aliquid ratione consectetur nostrum, reiciendis elit. Enim beatae fuga maxime aliquid ratione consectetur nostrum, reiciendis animi sequi temporibus quas alias repellat! Quasi adipisci, ipsum molestias et quaerat tempora animi sequi temporibus quas alias repellat! Quasi adipisci, ipsum molestias et quaerat tempora!",
  ];

  const colors = [
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-indigo-200",
    "bg-red-200",
  ];

  const divs = () =>
    items
      .map((item) => {
        const bgColor = colors[Math.floor(Math.random() * colors.length)];
        const textContent = content[Math.floor(Math.random() * content.length)];
        return `
          <div ${class_name}="item-${item} ${bgColor} px-10 py-5 rounded-md">
            <h1 ${class_name}="font-bold text-2xl">Item ${item}</h1>
            <p ${class_name}="text-base mt-2">${textContent}</p>
          </div>`;
      })
      .join("\n");
  const gridSnippet = () => {
    const classes = [
      `grid`,
      `grid-cols-${columns}`,
      justifyContent,
      alignItems,
      gap !== "0" ? `gap-${gap}` : "",
    ]
      .filter(Boolean) // Remove empty values
      .join(" "); // Join with a single space
    return `<div ${class_name}="${classes}">${divs()}\n</div>`;
  };

  const flexSnippet = () => {
    const classes = [
      `flex`,
      flexDirection,
      justifyContent,
      alignItems,
      gap !== "0" ? `gap-${gap}` : "",
      wrap,
    ]
      .filter(Boolean) // Remove empty values
      .join(" "); // Join with a single space
    return `<div ${class_name}="${classes}">${divs()}\n</div>`;
  };

  const snippet = layout === "grid" ? gridSnippet() : flexSnippet();

  return (
    <>
      <Preview snippet={snippet} />
      <CodeResult code={snippet} language="html" />
    </>
  );
};

export default Code;
