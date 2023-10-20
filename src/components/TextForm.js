import React, { useState } from "react";
export default function TextFrom(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowerClick = () => {
    setText(text.toLowerCase());
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const clear = () => {
      setpreviewText('Enter any text to appear here!')
      setText("");
  };
  const preview = () => {
    let t = text
    if(t == ''){
      setpreviewText('Enter anything first to see preview!!')
    }else{
      setpreviewText(t)
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const [previewText, setpreviewText] = useState('Enter any text to appear here!')
  return (
    <>
      <div className="w-10/12 m-auto mt-6 mb-10 ccc3 rounded-xl border-slate-600 border-2 px-7 py-7">
        <label
          htmlFor="message"
          className="block mb-3 text-3xl font-bold text-gray-900"
        >
          {props.heading}
        </label>
        <textarea
          id="message"
          rows="8"
          onChange={handleOnChange}
          className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
          placeholder="Write your thoughts here..."
          value={text}
        ></textarea>
        <button
          onClick={handleUpClick}
          className=" active:scale-95 bg-sky-600 p-2 rounded-md mr-4 mt-4 font-normal text-sm"
        >
          Convert to Uppercase
        </button>
        <button
          onClick={handleLowerClick}
          className=" active:scale-95 p-2 rounded-md bg-green-500 mr-4 mt-4 font-normal text-sm"
        >
          Convert to lowercase
        </button>
        <button
          onClick={handleCopy}
          className=" active:scale-95 p-2 rounded-md bg-orange-500 mr-4 mt-4 font-normal text-sm"
        >
          Copy text
        </button>
        <button
          onClick={preview}
          className=" active:scale-95 p-2 rounded-md bg-yellow-500 mr-4 mt-4 font-normal text-sm"
        >
          Preview
        </button>
        <button
          onClick={clear}
          className=" active:scale-95 p-2 rounded-md bg-red-600 mr-4 mt-4 font-normal text-sm"
        >
          Clear
        </button>
        <div className="w-5/6 mt-8">
          <h1 className="text-2xl font-semibold">Your text summary</h1>
          {text.length + " characters and " + text.split(" ").length + " words"}
        </div>
        <div className="w-5/6 mt-4">
          <h1 className="text-2xl font-semibold">Preview</h1>
          {previewText}
        </div>
      </div>
    </>
  );
}