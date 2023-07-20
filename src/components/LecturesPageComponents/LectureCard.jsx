import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchAuthUserThunk} from "../../redux/users/users.action";
import { Link } from "react-router-dom";

function LectureCard({ lecture}) {
  const user = useSelector((state) => state.users.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthUser = () => {
      return dispatch(fetchAuthUserThunk());
    };
    fetchAuthUser();
  }, [dispatch]);
  console.log("lecture card : ", lecture);

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl mt-8 mr-8">
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-2">{lecture.title}</div>
        <p className="text-gray-700 text-base">{lecture.user.firstName} {lecture.user.lastName}</p>
        <p className="text-gray-500 text-xs">{lecture.lecture_date}</p>
        <br></br>
        <p className="text-gray-700 text-md">Recording Password: {lecture.password}</p>
      </div>
      <div className="flex justify-start px-6 pt-4 pb-2">
        <a href={lecture.recordings} target="blank">
          <button className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white ml-2 mr-2 mb-2">
            Recording
          </button>
        </a>
        <a href={lecture.slides} target="blank">
          <button className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
            Slides
          </button>
        </a>
        {
          /*Only visible to TA/Admins */
          user.userType === "admin" ? (
            <Link to={`/lectures/edit/${lecture.id}`}>
            <button className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ml-16">
              Edit
            </button>
            </Link>
          ) : null
        }
      </div>
    </div>
  );
}

export default LectureCard;
