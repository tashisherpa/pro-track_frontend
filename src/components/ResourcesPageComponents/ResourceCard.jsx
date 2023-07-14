import React from 'react';

function ResourceCard() {
  return (
    <div class="max-w-sm rounded-lg overflow-hidden shadow-xl">
        <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-2">Resource Title</div>
            <p class="text-gray-500 text-m">
                Resource description here 
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <a href="https://www.npmjs.com/package/@dhaiwat10/react-link-preview" target="_blank">
                <span class="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Link</span>
            </a>
        </div>
    </div>
  )
}

export default ResourceCard