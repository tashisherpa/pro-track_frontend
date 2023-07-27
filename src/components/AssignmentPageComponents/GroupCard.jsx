import React from 'react'

function GroupCard({group}) {
  return (
    <div className="max-w-md w-80 rounded overflow-hidden shadow-lg mt-8 mr-8 ">
      <div className="flex-col px-4 py-4">
        <div className="">
          <div className="flex justify-between w-full font-bold text-3xl text-left mb-2">
            Group {group[0].groupId}
              <div>
                {group[0].assignment_status.status === true ? (
                  <span className="bg-green-600 rounded-full px-2 py-2  text-sm font-semibold text-white mr-2 mb-12  ">
                    Completed
                  </span>
                ) : (
                  <span className="bg-red-600 rounded-full px-2 py-2  text-sm font-semibold text-white mr-2 mb-12  ">
                    Incomplete
                  </span>
                )}
              </div>
          </div>
        </div>
        <div>
            <a href={group[0].assignment_status.submission} target="blank">
            <span className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ml-16" >GitHub Repo Link</span>
            </a>
        </div>
      </div>
    </div>
  )
}

export default GroupCard