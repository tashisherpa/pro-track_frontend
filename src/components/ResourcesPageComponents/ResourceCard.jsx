import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchAuthUserThunk} from "../../redux/users/users.action";
import { Link } from "react-router-dom";
import { deleteResourceThunk } from "../../redux/resources/resources.action";


function ResourceCard({resource}) {
  //const [isAdmin, setIsAdmin] = useState(true);

  const user = useSelector((state) => state.users.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthUser = () => {
      return dispatch(fetchAuthUserThunk());
    };
    fetchAuthUser();
  }, [dispatch]);
  console.log("resource card : ", resource);

  const handleDelete = (event) => {
    event.preventDefault();
    console.log("RUNNING DISPATCH FROM EDITUSERTHUNK");

    dispatch(deleteResourceThunk(resource.id)).then(() => {
      console.log("resource delted")
      // navigate(`/resources`);
    });
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-xl mt-8 mr-8">
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-2">{resource.title}</div>
        <p className="text-gray-700 text-base">{resource.user.firstName} {resource.user.lastName}</p>
       
        <p className="text-gray-500 text-xs">{resource.category}</p>
        <p className="text-gray-500 text-xs">{resource.description}</p>
        <br></br>
      </div>
      <div className="flex justify-start px-6 pt-4 pb-2">
        <a href={resource.content} target="blank">
          <button className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white ml-2 mr-2 mb-2">
            Link
          </button>
        </a>
        {
          /*Only visible to TA/Admins */
          user.userType === "admin" || "student" ? (
            <a>
            <button className=" bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ml-16"
            onClick={handleDelete}> DELETE
            </button>
          </a>
          ) : null
        }
        {
          /*Only visible to TA/Admins */
          user.userType === "admin" ? (
            <Link to={`/resource/edit/${resource.id}`}>
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

export default ResourceCard;
