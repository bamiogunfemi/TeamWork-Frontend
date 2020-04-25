import React from "react";

const FormInput = ({
  handleChange,
  label,
  searchInput,
  postInput,
  ...otherFormProps
}) => {
  return (
    <div className="group">
      <input
        className={`${searchInput ? 'searchInput': ""}
          ${postInput ? "postInput" : ""} `}
        onChange={handleChange}
        {...otherFormProps}
      />

      {label ? (
        <label
          className={`${otherFormProps.value.length} ? 'shrink': ''} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
