import React from 'react'

function LectureCard() {
  return (
    <div class="max-w-sm rounded-lg overflow-hidden shadow-xl">
        <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-2">Lecture Name</div>
            <p class="text-gray-500 text-xs">
             07/07/2023
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Recording</span>
            <span class="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Slides</span>
        </div>
    </div>
  )
}

export default LectureCard