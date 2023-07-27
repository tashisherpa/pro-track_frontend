import React from 'react'

function SoloCard({user}) {
  return (
    <div className="max-w-md w-80 rounded overflow-hidden shadow-lg mt-8 mr-8 ">
      <div className="flex-col px-4 py-4">
        <div className="">
          <div className="flex justify-between w-full font-bold text-3xl text-left mb-2">
            {user.user.firstName} {user.user.lastName}
              <div>
                {user.status === true ? (
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
            <a href={user.submission} target="blank">
            <span className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ml-16" >GitHub Repo Link</span>
            </a>
        </div>
      </div>
    </div>
  )
}

export default SoloCard