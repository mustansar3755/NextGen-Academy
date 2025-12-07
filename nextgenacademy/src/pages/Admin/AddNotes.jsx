import React, { useState } from "react";

const CLASS_OPTIONS = [
  "9th","10th",
  "1st Year","2nd Year",
];

const AddNotes = () => {
  const [noteName, setNoteName] = useState("");
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [medium, setMedium] = useState("");
  const [chapters, setChapters] = useState([""]);

  const handleChapterChange = (value, index) => {
    const updated = [...chapters];
    updated[index] = value;
    setChapters(updated);
  };

  const addChapterField = () => {
    setChapters([...chapters, ""]);
  };

  const removeChapterField = (index) => {
    const updated = chapters.filter((_, i) => i !== index);
    setChapters(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      noteName,
      className,
      subject,
      medium,
      chapters: chapters.filter((c) => c.trim() !== ""),
    };

    console.log("SUBMITTED => ", finalData);

    alert("Notes Added Successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-[#111111] p-8 rounded-lg border border-gray-800 text-white shadow-lg">

      <h1 className="text-3xl font-bold mb-6 text-indigo-400">
        Add Notes
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        {/* Notes Name */}
        <input
          type="text"
          placeholder="Notes Name"
          value={noteName}
          onChange={(e) => setNoteName(e.target.value)}
          required
          className="px-4 py-3 bg-[#0c0c0c] border outline-none border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500"
        />

        {/* Class Dropdown */}
        <select
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
          className="px-4 py-3 bg-[#0c0c0c] border outline-none border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Class</option>
          {CLASS_OPTIONS.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>

        {/* Subject */}
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="px-4 py-3 bg-[#0c0c0c] border outline-none border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500"
        />

        {/* Medium Selection */}
        <div>
          <label className="block text-gray-300 mb-1">Medium *</label>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="medium"
                value="english"
                checked={medium === "english"}
                onChange={(e) => setMedium(e.target.value)}
              />
              English Medium
            </label>

            <label className="flex items-center gap-2">
              <input
              className=""
                type="radio"
                name="medium"
                value="urdu"
                checked={medium === "urdu"}
                onChange={(e) => setMedium(e.target.value)}
              />
              Urdu Medium
            </label>
          </div>
        </div>

        {/* Chapters (optional) */}
        <div>
          <label className="block text-gray-300 font-semibold mb-2">
            Chapters (Optional)
          </label>

          {chapters.map((chapter, index) => (
            <div key={index} className="flex gap-3 mb-3">
              <input
                type="text"
                value={chapter}
                placeholder={`Chapter ${index + 1}`}
                onChange={(e) =>
                  handleChapterChange(e.target.value, index)
                }
                className="flex-1 px-4 py-3 bg-[#0c0c0c] border outline-none border-gray-700 rounded-md focus:ring-2 focus:ring-indigo-500"
              />

              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeChapterField(index)}
                  className="px-3 bg-red-700 hover:bg-red-800 rounded-md"
                >
                  X
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addChapterField}
            className="mt-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md"
          >
            + Add Chapter
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md mt-3 shadow-xl"
        >
          Add Notes
        </button>

      </form>
    </div>
  );
};

export default AddNotes;
