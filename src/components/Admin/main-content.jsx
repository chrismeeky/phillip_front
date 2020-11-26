import React, { useState } from "react";
import SunEditor from "suneditor-react";
import buttonList from "../../constants/button-list";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

import BusinessService from "../../services/business.service";
const MainContent = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");

  const [initialDescription, setInitialDescription] = useState("");

  const handleChange = (event) => {
    setBusinessName(event.target.value);
  };

  const createBusiness = async () => {
    const result = await BusinessService.createBusiness({
      businessName,
      businessDescription,
    });
    console.log("new business1", result)
    if (result.data) {
      console.log("new business", result.data);
    }
  };
  return (
    <div className="main-content">
      <div className="main-content__publish">
        <div className="input-group">
          <input
            type="text"
            className="input-group__input"
            id="input"
            placeholder="Business Name"
            name="businessName"
            onChange={handleChange}
          />
          <label htmlFor="input" className="input-group__label">
            Business Name
          </label>
        </div>

        <SunEditor
          onChange={(content) => setBusinessDescription(content)}
          name="my-editor"
          placeholder="Enter business description"
          setContents={initialDescription}
          height="50vh"
          setDefaultStyle="font-family: cursive; font-size: 16px;"
          setOptions={{
            buttonList,
          }}
        />

        <button className="btn btn--publish" onClick={createBusiness}>Publish</button>
      </div>
    </div>
  );
};

export default MainContent;
