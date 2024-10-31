import React from "react";
const Preview = ({ snippet }) => {
 
  return (
    <div className="w-4/5 h-screen mx-auto my-4 border  rounded-md p-4  overflow-y-auto">
      <div className="preview" dangerouslySetInnerHTML={{ __html: snippet.replaceAll('className', 'class') }} />
    </div>
  );
};

export default Preview;
