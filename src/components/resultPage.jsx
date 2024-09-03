import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { submitImage } from "../api";
import Loader from "./loader"; // A simple Loader component

const ResultPage = () => {
  const location = useLocation();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageFile = location.state?.imageFile;

    const fetchData = async () => {
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);
        const response = await fetch(formData);
        setResult(response);
      }
      setLoading(false);
    };

    fetchData();
  }, [location.state?.imageFile]);

  if (loading) {
    return <Loader />; // Show loader while fetching data
  }

  return (
    <div className="max-w-3xl mx-auto py-8 text-center">
      {result ? (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {result.title}
          </h2>
          <img
            src={URL.createObjectURL(location.state.imageFile)}
            alt="Analyzed"
            className="w-48 h-48 object-cover rounded-lg mx-auto mb-6"
          />
          <p className="text-lg text-gray-600">{result.description}</p>
        </>
      ) : (
        <p className="text-lg text-red-500">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
};

export default ResultPage;
