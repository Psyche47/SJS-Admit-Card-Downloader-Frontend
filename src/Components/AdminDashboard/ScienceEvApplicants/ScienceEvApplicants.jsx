import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const ScienceEvApplicants = () => {
  const businessStudiesInfo = async () => {
    const response = await fetch("http://localhost:8800/science_applicants_ev");
    return response.json();
  };
  const { isLoading, data, error, refetch } = useQuery(
    "businessInfo",
    businessStudiesInfo
  );
  console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="shadow-lg rounded-lg mx-auto mt-2 border-2 border-zinc-500 p-3 mb-2">
      <h1 className="text-lg md:text-3xl text-center mt-3 font-semibold">
        Science EV Applicant Information
      </h1>
      <table className="overflow-x-auto text-xs md:text-base text-left text-gray-500 table-auto mx-auto">
        <thead className="text-xs md:text-base text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="p-2 md:p-4">
              Admission Roll
            </th>
            <th scope="col" className="p-2 md:p-4">
              Name
            </th>
            <th scope="col" className="p-2 md:p-4">
              Picture
            </th>
            <th scope="col" className="p-2 md:p-4">
              Board
            </th>
            <th scope="col" className="p-2 md:p-4">
              SSC Roll
            </th>
            <th scope="col" className="p-2 md:p-4">
              Father's Name
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr className="text-center">
              <td>
                <button
                  type="button"
                  className="rounded-lg bg-white-300 px-2 py-2"
                  disabled
                >
                  <svg
                    className="h-7 w-7 animate-spin text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
          )}
          {error && (
            <tr>
              <td>Could not fetch information, network error</td>
            </tr>
          )}
          {data?.length > 0 ? (
            data.map((info) => (
              <tr
                className="bg-white border-b hover:bg-gray-200"
                key={info?.user_id}
              >
                <th
                  scope="row"
                  className="w-6 p-2 font-medium text-gray-900 break-words"
                  style={{ maxWidth: "140px" }}
                >
                  {info?.user_id}
                </th>
                <th
                  scope="row"
                  className="w-6 p-2 font-medium text-gray-900 break-words"
                  style={{ maxWidth: "140px" }}
                >
                  {info?.full_name}
                </th>
                <td className="w-8 p-2 md:p-4 font-medium text-gray-900 whitespace-nowrap">
                  <img
                    src={`http://localhost:8800/${info?.photo_path}`}
                    alt={info?.photo_path}
                    className="w-20 h-20 rounded-lg"
                  />
                </td>
                <th
                  scope="row"
                  className="w-6 p-2 font-medium text-gray-900 break-words"
                  style={{ maxWidth: "140px" }}
                >
                  {info?.board}
                </th>
                <th
                  scope="row"
                  className="w-6 p-2 font-medium text-gray-900 break-words"
                  style={{ maxWidth: "140px" }}
                >
                  {info?.exam_roll}
                </th>
                <th
                  scope="row"
                  className="w-6 p-2 font-medium text-gray-900 break-words"
                  style={{ maxWidth: "140px" }}
                >
                  {info?.father_name}
                </th>

                <td className="p-1 md:p-4">
                  <Link to={`downloadAdmitCard/${info?.auth_uid}`}>
                    <button
                      // onClick={() => handleDelete(image?.image_id)}
                      type="button"
                      className="text-white bg-emerald-700 hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 font-medium rounded-full text-xs md:text-sm px-4 md:px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Download Admit Card
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-4 text-red-500 font-semibold">No Data Found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ScienceEvApplicants;
