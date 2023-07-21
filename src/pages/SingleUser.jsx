import React, {useEffect} from "react";
import SingleUserCard from "../components/UserPageComponents/SingleUserCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleUserThunk } from "../../src/redux/users/users.action"
import SideNavBar from "../components/SideNavBar";

function SingleUser() {
  const user = useSelector((state) => state.users.singleUser);

  //gets current user id from the path
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log("id ", id);

  useEffect(() => {
    const fetchSingleUser = () =>{
        return dispatch(fetchSingleUserThunk(id));
    }
    fetchSingleUser();
  }, [dispatch]);

  console.log("user: ", user);


  return (
    <div>
      <SideNavBar />
      <div className="p-4 sm:ml-64">
        <SingleUserCard key={user.id} user={user}/>
      </div>
    </div>
  );
}

export default SingleUser;
