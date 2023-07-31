import React from "react";
import { parseISO, format } from "date-fns";
import { deleteFeedThunk } from "../../redux/feed/feed.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function DashboardStudentView({ post, user }) {
  const dispatch = useDispatch();
  const img_link =
    "https://i.pinimg.com/564x/b2/45/2b/b2452bd4499ed406e6f0dfc14138f182.jpg";

  const handleDelete = () => {
    dispatch(deleteFeedThunk(post.id));
  };

  return (
    <div className=" rounded-lg overflow-hidden bg-white shadow-md m-2">
      <div className="px-6 py-4">
        <div className="flex items-center  space-x-4">
          <img
            className="w-8 h-8 rounded-full"
            src={img_link}
            alt="Rounded avatar"
          />
          <div className="font-medium text-zinc-700">
            <div className="text-lg mb-2">
              {post?.user?.firstName} {post?.user?.lastName}
            </div>
          </div>
        </div>
        <div className="font-bold text-2xl mb-2">{post.title}</div>
        <p className="text-gray-500 text-xs">
          {format(parseISO(post.createdAt), "MM-dd-yyyy")}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p>{post.content}</p>
      </div>
      {user.id === post.userId ? (
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full items-center m-2 py-2 px-4 max-w-fit"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default DashboardStudentView;
