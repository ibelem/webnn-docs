"use client"

import React, { useState, useEffect } from 'react';
import { Sandpack } from "@codesandbox/sandpack-react";
import { useTheme } from 'nextra-theme-docs';
import { themeDark, themeLight } from '../../config.js';
import { onnxruntimeEditorFiles  } from '../../editor-files-onnxruntime.js';
import { Html5Icon, VanillaIcon, SvelteIcon, ReactIcon, VueIcon } from '../../../../_components/icons/js_frameworks.jsx'
import { TransformersjsIcon, OnnxIcon, WebNNIcon, LiteRTIcon } from '../../../../_components/icons/editor.jsx'
import { extractIdFromOnnxRuntimePath } from '../../utils.js';

export default function Page() {
  const { theme, setTheme } = useTheme();
  let editorTheme = themeLight;
  console.log(`theme: ${theme}`);
  (theme === 'dark') ? editorTheme = themeDark : editorTheme = themeLight;

  const [js, setJs] = useState(() => {
    const saved = localStorage.getItem('selectedJs');
    return saved || 'static';
  });

  const [framework, setFramework] = useState(() => {
    const saved = localStorage.getItem('selectedFramework');
    return 'webnn';
  });

  useEffect(() => {
    localStorage.setItem('selectedJs', js);
  }, [js]);

  useEffect(() => {
    localStorage.setItem('selectedFramework', framework);
  }, [framework]);

  const id = extractIdFromOnnxRuntimePath();

  let files;
  let title;
  try {
    if (onnxruntimeEditorFiles[id] && onnxruntimeEditorFiles[id][js]) {
      files = onnxruntimeEditorFiles[id][js];
      title = onnxruntimeEditorFiles[id].title;
      console.log(`Successfully loaded files for ${id}/${js}`);
    } else {
      console.error(`Requested combination of ${id}/${js} does not exist`);
      window.location.href = './image-classification-mobilenet-v2';
    }
  } catch (error) {
    console.error("Error accessing files:", error);
    window.location.href = './image-classification-mobilenet-v2';
  }

  const isSelected = (type, value) => {
    return type === 'js' ? js === value : framework === value;
  };

  const handleJsChange = (newJs) => {
    setJs(newJs);
  };

  const handleFrameworkChange = (newFramework) => {
    setFramework(newFramework);
  };

  const [selectedItem, setSelectedItem] = useState('');
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedItem(selectedValue);
    if (selectedValue) {
      window.location.href = `./${selectedValue}`;
    }
  };

  return (
    <div className="md:px-8 xl:px-8 mb-8">
      <div className="mx-1 md:mx-0 playground-nav">
        <div className='self-center playground-nav-12'>
          <div className="flex flex-row">
            <h2 className="pl-4 text-xl md:text-2xl font-title light-color py-1">
              Playground
            </h2>
            <div className="selected-framework-js ml-4 self-center">
              {/* Only show currently selected icons */}
              {framework === 'webnn' && <WebNNIcon />}
              {framework === 'onnxruntime' && <OnnxIcon />}
              {framework === 'transformersjs' && <TransformersjsIcon />}
              {framework === 'litert' && <LiteRTIcon />}
              {js === 'static' && <Html5Icon />}
              {js === 'vanilla' && <VanillaIcon />}
              {js === 'svelte' && <SvelteIcon />}
              {js === 'react' && <ReactIcon />}
              {js === 'vue' && <VueIcon />}
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-end text-sm self-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            <div className='self-center'>{title}</div>
            <div className="dropdown-container pr-4">
              <select
                id="webnn-select"
                value={selectedItem}
                onChange={handleChange}
                className="p-2"
              >
                <option value="">-- Examples --</option>
                {Object.entries(onnxruntimeEditorFiles).map(([id, data]) => (
                  <option key={id} value={id}>
                    {data.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="self-center">
          <div className={`pg-js ${js}`}>
            <button
              className="static hover:cursor-pointer"
              onClick={() => handleJsChange('static')}
            >
              <Html5Icon className="static" />
              <span className={`ml-[4px] text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 ${js === 'static' ? 'text-gray-800 dark:text-gray-200' : ''
                }`}>
                HTML5
              </span>
            </button>
            <button
              className="vanilla hover:cursor-pointer"
              onClick={() => handleJsChange('vanilla')}
            >
              <VanillaIcon className="vanilla" />
              <span className={`ml-[4px] text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 ${js === 'vanilla' ? 'text-gray-800 dark:text-gray-200' : ''
                }`}>
                Vanilla
              </span>
            </button>
            <button
              className="svelte hover:cursor-pointer"
              onClick={() => handleJsChange('svelte')}
            >
              <SvelteIcon className="svelte" />
              <span className={`ml-[4px] text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 ${js === 'svelte' ? 'text-gray-800 dark:text-gray-200' : ''
                }`}>
                Svelte
              </span>
            </button>
            <button
              className="react hover:cursor-pointer"
              onClick={() => handleJsChange('react')}
            >
              <ReactIcon className="react" />
              <span className={`ml-[4px] text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 ${js === 'react' ? 'text-gray-800 dark:text-gray-200' : ''
                }`}>
                React
              </span>
            </button>
            <button
              className="vue hover:cursor-pointer"
              onClick={() => handleJsChange('vue')}
            >
              <VueIcon className="vue" />
              <span className={`ml-[4px] text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 ${js === 'vue' ? 'text-gray-800 dark:text-gray-200' : ''
                }`}>
                Vue
              </span>
            </button>
          </div>
        </div>
      </div>
      <Sandpack className="!mx-1 md:!mx-0"
        template={js}
        theme={editorTheme}
        options={{
          editorHeight: 538,
          showLineNumbers: true
        }}
        customSetup={{
          dependencies: {
            // "svelte": "^5.22.6",
            // "@huggingface/transformers": "^3.4.0"
          }
        }}
        files={files}
      />
    </div>
  )
}