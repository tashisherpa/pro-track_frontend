import React from "react";
import { parseISO,format} from "date-fns";

function DashboardStudentView({ post }) {
  console.log(post);
  const img_link =
    "https://i.pinimg.com/564x/b2/45/2b/b2452bd4499ed406e6f0dfc14138f182.jpg";
  return (
    <div className=" rounded-lg overflow-hidden shadow-md m-2">
      <div className="px-6 py-4">
        <div className="flex items-center space-x-4">
          <img
            className="w-8 h-8 rounded-full"
            src={img_link}
            alt="Rounded avatar"
          />
          <div className="font-medium text-zinc-700">
            <div className="text-lg mb-2">
              {post.user.firstName} {post.user.lastName}
            </div>
          </div>
        </div>
        {/* <span>
          {post.user.firstName} {post.user.lastName}
        </span> */}
        <div className="font-bold text-2xl mb-2">{post.title}</div>
        <p className="text-gray-500 text-xs">{format(parseISO(post.createdAt), 'yyyy-MM-dd')}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default DashboardStudentView;
