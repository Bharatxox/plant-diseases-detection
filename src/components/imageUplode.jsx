import { useState } from "react";
// import "./ImageUpload.css"; // Optionally, remove this if you fully migrate to Tailwind CSS
import { useNavigate } from "react-router-dom";

const ImageUpload = ({ onClose }) => {
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image) {
      navigate("/result", { imageFile: image });
    } else {
      alert("Please select an image first.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-0 right-0 bg-transparent border-none text-2xl cursor-pointer hover:bg-red-600 hover:text-white px-2 py-1"
          onClick={onClose}
        >
          ×
        </button>
        <form onSubmit={handleSubmit}>
          <div
            className={`border-2 border-dashed rounded-md mt-5 p-5 text-center h-80 w-72 cursor-pointer flex justify-center items-center ${
              dragActive ? "border-black" : "border-gray-300"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.querySelector(".file-input").click()}
          >
            {image ? (
              <img
                src={image}
                alt="Selected"
                className="mw-48 h-48 object-cover mt-2"
              />
            ) : (
              <div className="drop-content h-full w-full flex justify-center items-center ">
                <p className="flex flex-col">
                  Drag & drop an image here, or
                  <span className="t text-orange-500 font-semibold">
                    click to select one
                  </span>
                </p>
              </div>
            )}
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleImageChange}
              className="hidden file-input"
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition w-full flex justify-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;
