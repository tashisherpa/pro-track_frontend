import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editHelpRequestThunk,
  fetchSingleHelpRequestThunk,
} from "../../redux/helprequest/helprequest.action";
function EditHelpRequest() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const helpRequest = useSelector(
    (state) => state.helpRequests.singleHelpRequest
  );
  const [newRequest, setNewRequest] = useState();
  const { id } = useParams();
  //change the value of the editForm, this is also used to handle the text field changes
  const handleInputChange = (event) => {
    setNewRequest({
      [event.target.name]: event.target.value,
    });
    //console.log("editForm: ", editForm);
  };

  useEffect(() => {
    const fetchSingleHelpRequest = () => {
      return dispatch(fetchSingleHelpRequestThunk(id));
    };
    fetchSingleHelpRequest();
  }, [dispatch, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("RUNNING DISPATCH FROM EDITUSERTHUNK");
    console.log("FORM", newRequest);
    dispatch(
      editHelpRequestThunk({ ...helpRequest, request: newRequest.request })
    ).then(() => {
      navigate("/helprequests");
    });
  };

  const handleCancel = () => {
    navigate("/helprequests");
  };

  console.log(newRequest);
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-2/4 my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Help Request</h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
              >
                <label>From: Old Request</label>
                <p className="text-ellipsis overflow-hidden shadow appearance-none border rounded w-full py-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  {helpRequest.request}
                </p>
                <label>To: New Request</label>
                <input
                  className="text-ellipsis overflow-hidden shadow appearance-none border rounded w-full py-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Request"
                  name="request"
                  onChange={handleInputChange}
                />
                <button
                  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  type="submit"
                >
                  Edit Request
                </button>
              </form>
              <br />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditHelpRequest;
