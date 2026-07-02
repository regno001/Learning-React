import { useState } from "react";

const Form = () => {
  const submitHandle = (e) => {
    e.preventDefault();
    console.log("Form Submitted by",title);
    settitle('')
  };
 
  const [title, settitle] = useState('')


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submitHandle}
        className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-5 w-96"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Contact Form
        </h2>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value);
            console.log(title);
            
            
            
          }}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;