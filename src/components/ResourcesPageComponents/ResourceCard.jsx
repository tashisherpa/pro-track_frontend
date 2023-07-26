import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchAuthUserThunk } from "../../redux/users/users.action";
import { Link } from "react-router-dom";
import { deleteResourceThunk } from "../../redux/resources/resources.action";

function ResourceCard({ resource }) {
  const user = useSelector((state) => state.users.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthUser = () => {
      return dispatch(fetchAuthUserThunk());
    };
    fetchAuthUser();
  }, [dispatch]);

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteResourceThunk(resource.id));
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl mt-8 mr-8">
      <div className="px-6 py-4">
        {resource.image && <img src={resource.image} alt="Link Preview" />}
        <div className="font-bold text-3xl mb-2">{resource.title}</div>
        <p className="text-gray-700 text-base">
          {resource.user.firstName} {resource.user.lastName}
        </p>

        <p className="text-gray-500 text-xs">{resource.category}</p>
        <p className="text-gray-500 text-xs">{resource.description}</p>
        <br></br>
        {/* {resource.image && <img src={resource.image} alt="Link Preview" />} */}
      </div>
      <div className="flex justify-start px-6 pt-4 pb-2">
        <a href={resource.link} target="_blank" rel="noopener noreferrer">
          <button className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white ml-2 mr-2 mb-2">
            Link
          </button>
        </a>
        {user.userType === "admin" ? (
          <a>
            <button
              className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ml-16"
              onClick={handleDelete}
            >
              DELETE
            </button>
          </a>
        ) : null}
        {user.userType === "admin" ? (
          <Link to={`/resources/edit/${resource.id}`}>
            <button className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ml-16">
              Edit
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default ResourceCard;
