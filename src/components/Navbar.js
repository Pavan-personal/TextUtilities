// var i = 1;
import React, { useState } from "react";
import handleMode from '../App';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [dropdown, setdropdown] = useState('hidden')
  const handleDropdown = ()=>{
    if(dropdown == 'hidden'){
      setdropdown('block')
    }else{
      setdropdown('hidden')
    }
  }
  const handleTheme1 = (event) => {
    if (document.body.style.background != 'rgb(0, 0, 0)') {
      document.body.style.background = 'rgb(0, 0, 0)'
    }else{
      document.body.style.background = 'white'
    }
  };
  const handleTheme2 = () => {
    if (document.body.style.background != 'rgb(63, 63, 107)') {
      document.body.style.background = 'rgb(63, 63, 107)'
    }else{
      document.body.style.background = 'white'
    }
  };
  const handleTheme3 = () => {
    if (document.body.style.background != 'rgb(68, 120, 68)') {
      document.body.style.background = 'rgb(68, 120, 68)'
    }else{
      document.body.style.background = 'white'
    }
  };
  const handleTheme4 = () => {
    if (document.body.style.background != 'rgb(145, 38, 38)') {
      document.body.style.background = 'rgb(145, 38, 38)'
    }else{
      document.body.style.background = 'white'
    }
  };
  return (
    
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="inline-flex items-center gap-x-2 text-3xl font-bold dark:text-white"
            href="#"
          >
            {props.title}
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none f ocus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-image-and-text-2"
              aria-controls="navbar-image-and-text-2"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-image-and-text-2"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <Link
              className="font-medium text-blue-500"
              to='/'
              aria-current="page"
            >
              {props.p1}
            </Link>
            <Link
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              to='/about'
            >
              {props.p2}
            </Link>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
            >
              {props.p3}
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              href="#"
            >
              {props.p4}
            </a>
            
<button onClick={handleDropdown} id="dropdownToggleButton" data-dropdown-toggle="dropdownToggle" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Themes<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<div id="dropdownToggle" className={`z-10 -mr-16 ${dropdown} absolute mt-[14.5rem] bg-white divide-y divide-gray-100 rounded-lg shadow w-[14rem] dark:bg-gray-700 dark:divide-gray-600}`}>
    <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownToggleButton">
      <li>
        <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <label class="relative inline-flex items-center w-full cursor-pointer">
            <input onChange={handleTheme1} type="checkbox" value="" class="sr-only peer"/>
            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Theme</span>
          </label>
        </div>
      </li>
      <li>
        <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <label class="relative inline-flex items-center w-full cursor-pointer">
            <input onChange={handleTheme2} type="checkbox" value="" class="sr-only peer"/>
            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Blue Theme</span>
          </label>
        </div>
      </li>
      <li>
        <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <label class="relative inline-flex items-center w-full cursor-pointer">
            <input onChange={handleTheme3} type="checkbox" value="" class="sr-only peer"/>
            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Green Theme</span>
          </label>
        </div>
      </li>
      <li>
        <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <label class="relative inline-flex items-center w-full cursor-pointer">
            <input onChange={handleTheme4} type="checkbox" value="" class="sr-only peer"/>
            <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Red Theme</span>
          </label>
        </div>
      </li>
    </ul>
</div>


          </div>
        </div>
      </nav>
    </header>
  );
}

Navbar.defaultProps = {title : 'Pavan'}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  p1: PropTypes.string,
  p2: PropTypes.string,
  p3: PropTypes.string,
  p4: PropTypes.string,
};
