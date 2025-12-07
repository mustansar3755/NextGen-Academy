import React, { useState } from "react";

const AddBooks = () => {
  const [bookType, setBookType] = useState("");
  const [medium, setMedium] = useState("");

  const classes = [
    " 9th",
    " 10th",
    " 1st Year",
    " 2nd Year",
  ];

  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "English",
    "Urdu",
    "Islamiyat",
    "Pakistan Studies",
    "General Science",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = {
      bookType,
      bookName: e.target.bookName.value,
      className: e.target.className.value,
      subject: e.target.subject.value,
      medium,
    };

    console.log("Book Submitted:", bookData);
    alert("Book Published Successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-[#111111] p-6 rounded-lg shadow-lg border border-gray-800">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">Publish a Book</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* --- Book Type --- */}
        <div>
          <label className="text-gray-300 font-semibold">Book Type</label>
          <select
            required
            value={bookType}
            onChange={(e) => setBookType(e.target.value)}
            className="w-full mt-1 bg-gray-900 border outline-none border-gray-700 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Book Type</option>
            <option value="Text Book">Text Book</option>
            <option value="Helping Book">Helping / Guide Book</option>
          </select>
        </div>

        {/* --- Book Name --- */}
        <div>
          <label className="text-gray-300 font-semibold">Book Name</label>
          <input
            type="text"
            name="bookName"
            required
            placeholder="Enter Book Name"
            className="w-full mt-1 bg-gray-900 border outline-none border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* --- Class Name --- */}
        <div>
          <label className="text-gray-300 font-semibold">Class</label>
          <select
            name="className"
            required
            className="w-full mt-1 bg-gray-900 border outline-none border-gray-700 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Class</option>
            {classes.map((cls, i) => (
              <option key={i} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>

        {/* --- Subject Name --- */}
        <div>
          <label className="text-gray-300 font-semibold">Subject</label>
          <select
            name="subject"
            required
            className="w-full mt-1 bg-gray-900 border outline-none border-gray-700 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Subject</option>
            {subjects.map((sub, i) => (
              <option key={i} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        {/* --- Medium (English / Urdu) --- */}
        <div className="flex gap-4">
          <label className="text-gray-300 font-semibold">Medium:</label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="medium"
              value="English"
              onChange={(e) => setMedium(e.target.value)}
              className="text-indigo-600"
            />
            <span className="text-gray-400">English Medium</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="medium"
              value="Urdu"
              onChange={(e) => setMedium(e.target.value)}
              className="text-indigo-600"
            />
            <span className="text-gray-400">Urdu Medium</span>
          </label>
        </div>

        {/* --- Submit Button --- */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 text-white font-bold rounded-md transition shadow-lg"
        >
          Publish Book
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
