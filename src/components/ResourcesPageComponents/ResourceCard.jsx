import React from 'react';

function ResourceCard() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">
        <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">Resource Title</div>
            <p className="text-gray-500 text-m">
                Resource description here 
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <a href="https://www.npmjs.com/package/@dhaiwat10/react-link-preview" target="blank">
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Link</span>
            </a>
        </div>
    </div>
  )
}

export default ResourceCard