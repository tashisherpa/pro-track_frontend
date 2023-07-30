import React, { useEffect } from "react";
import { parseISO, format } from "date-fns";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAuthUserThunk } from "../../redux/users/users.action";
import { Link } from "react-router-dom";
import { deleteLectureThunk } from "../../redux/lectures/lectures.action";

function LectureCard({ lecture }) {
  const user = useSelector((state) => state.users.authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthUser = () => {
      return dispatch(fetchAuthUserThunk());
    };
    fetchAuthUser();
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(deleteLectureThunk(lecture.id));
    navigate("/lectures");
  };

  return (
    <div className="max-w-xs bg-white hover:scale-110 text-black rounded-lg overflow-hidden shadow-xl mt-8 mr-8">
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-2">{lecture.title}</div>
        <p className="text-gray-700 text-base">
          {lecture.user.firstName} {lecture.user.lastName}
        </p>
        <p className="text-gray-500 text-xs">{format(parseISO(lecture.lecture_date), "MM-dd-yyyy")}</p>
        <br></br>
        <p className="text-gray-500 text-xs">
          {lecture.description}
        </p>
        <p className="text-gray-700 text-md">
          Recording Password: {lecture.password}
        </p>
      </div>
      <div className="flex justify-between px-6 pt-4 pb-2">
        <a href={lecture.recordings} target="blank">
          <button className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-1 mb-2">
            Recording
          </button>
        </a>
        <a href={lecture.slides} target="blank">
          <button className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-1 mb-2">
            Slides
          </button>
        </a>
        {
          /*Only visible to TA/Admins */
          user.userType === "admin" ? (
            <div className="flex mb-2 ml-2">
              <Link to={`/lectures/edit/${lecture.id}`}>
                <button className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-1">
                  Edit
                </button>
              </Link>
              <button
                className=" bg-gray-200 dark:bg-gray-700 rounded-full py-1 text-sm font-semibold text-white px-2 mr-1"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          ) : null
        }
      </div>
    </div>
  );
}

export default LectureCard;
