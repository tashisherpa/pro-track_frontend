import React, {useEffect} from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch} from "react-redux";
import { fetchAuthUserThunk } from "../../redux/users/users.action";
import { Link } from "react-router-dom";

function AddAssignmentBtn() {
   const user = useSelector((state)=> state.users.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAuthUser = () => {
      return dispatch(fetchAuthUserThunk());
    };
    fetchAuthUser();
  }, [dispatch]);

  return (
    <div>
    {
      /*Only visible to Admins */
      user.userType==="admin" ? (
        <Link to={`/assignments/add`}>
          <div className="flex justify-end mb-8">
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Add Assignment
            </button>
          </div>
        </Link>
      ) : null
    }
  </div>
  );
}

export default AddAssignmentBtn;