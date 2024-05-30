import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";
import jsPDF from "jspdf";
import Logo from "../../../assets/logo.png";
import { useForm } from "react-hook-form";

const AdmitCard = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const { id } = useParams();

  const [applicationGroup, setApplicationGroup] = useState("");
  let fetchUrl = "";
  const [singleApplicantData, setSingleApplicantData] = useState([]);
  if (applicationGroup === "Science Bangla Version") {
    fetchUrl = `http://localhost:8800/fetchSci/${id}`;
  } else if (applicationGroup === "Science English Version") {
    fetchUrl = `http://localhost:8800/fetchSciEv/${id}`;
  } else if (
    applicationGroup === "Group Change (Science To Business Studies)"
  ) {
    fetchUrl = `http://localhost:8800/fetchSciBus/${id}`;
  } else if (applicationGroup === "Group Change (Science To Humanities)") {
    fetchUrl = `http://localhost:8800/fetchSciHum/${id}`;
  } else if (applicationGroup === "Business Studies") {
    fetchUrl = `http://localhost:8800/fetchBus/${id}`;
  } else if (
    applicationGroup === "Group Change (Business Studies to Humanities)"
  ) {
    fetchUrl = `http://localhost:8800/fetchBusHum/${id}`;
  } else if (applicationGroup === "Humanities") {
    fetchUrl = `http://localhost:8800/fetchHum/${id}`;
  }
  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setSingleApplicantData(data[0]));
  }, [applicationGroup]);
  console.log(singleApplicantData);
  const {
    user_id,
    applicant_group,
    app_group_full,
    ssc_group,
    full_name,
    father_name,
    mother_name,
    exam_roll,
    gpa,
    photo_path,
    school_name,
    reg_number,
  } = singleApplicantData || {};
  console.log(photo_path);
  let app_group_short = "";
  if (app_group_full === "GC(Business Studies to Humanities)") {
    app_group_short = "GC (B. Studies to Humanities)";
  } else if (app_group_full === "Group Change(Science To Business)") {
    app_group_short = "GC (Science to Business Studies)";
  } else if (app_group_full === "Group Change(Science To Humanities)") {
    app_group_short = "GC (Science to Humanities)";
  }

  let exam_date = "";
  let exam_time = "";
  if (applicant_group === "Sci" && user_id >= 1 && user_id <= 1200) {
    exam_date = "1st June 2024";
    exam_time = "8:00 AM - 9:00 AM";
  } else if (applicant_group === "Sci" && user_id >= 1201 && user_id <= 2400) {
    exam_date = "1st June 2024";
    exam_time = "10:00 AM - 11:00 AM";
  } else if (applicant_group === "Sci" && user_id >= 2401 && user_id <= 3600) {
    exam_date = "1st June 2024";
    exam_time = "12:00 PM - 1:00 PM";
  } else if (applicant_group === "Sci" && user_id >= 3601 && user_id <= 4800) {
    exam_date = "1st June 2024";
    exam_time = "2:30 PM - 3:30 PM";
  } else if (applicant_group === "Sci" && user_id >= 4801 && user_id <= 6000) {
    exam_date = "1st June 2024";
    exam_time = "4:30 PM - 5:30 PM";
  } else if (applicant_group === "SciEV" && user_id >= 1 && user_id <= 1200) {
    exam_date = "31st May, 2024";
    exam_time = "10:30 AM - 11:30 AM";
  } else if (applicant_group === "Hum" && user_id >= 1 && user_id <= 500) {
    exam_date = "31st May, 2024";
    exam_time = "8:30 AM - 9:30 AM";
  } else if (applicant_group === "Bus" && user_id >= 1 && user_id <= 600) {
    exam_date = "31st May, 2024";
    exam_time = "8:30 AM - 9:30 AM";
  } else if (applicant_group === "GC" && user_id >= 12001 && user_id <= 12550) {
    exam_date = "31st May, 2024";
    exam_time = "8:30 AM - 9:30 AM";
  } else if (applicant_group === "GC" && user_id >= 13001 && user_id <= 13400) {
    exam_date = "31st May, 2024";
    exam_time = "8:30 AM - 9:30 AM";
  } else if (applicant_group === "GC" && user_id >= 14001 && user_id <= 14300) {
    exam_date = "31st May, 2024";
    exam_time = "8:30 AM - 9:30 AM";
  } else if (applicant_group === "Sci" && user_id >= 6001 && user_id <= 7200) {
    exam_date = "31st May, 2024";
    exam_time = "2:00 PM - 3:00 PM";
  } else if (applicant_group === "Sci" && user_id >= 7201 && user_id <= 8400) {
    exam_date = "31st May, 2024";
    exam_time = "4:00 PM - 5:00 PM";
  }
  // console.log(exam_time, exam_date);
  // PDF Generation Code
  const getDocumentRef = useRef(null);
  const handleGeneratePdf = () => {
    const admitCard = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    admitCard.html(getDocumentRef.current, {
      async callback(admitCard) {
        await admitCard.save("admitCard");
      },
    });
  };
  const handleOpenPdf = () => {
    const admitCard = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
      compress: true,
    });

    admitCard.html(getDocumentRef.current, {
      async callback(admitCard) {
        admitCard.setProperties({
          title: "Admit Card",
        });
        await window.open(admitCard.output("bloburl"));
      },
    });
  };

  return (
    <div className="font-inter bg-slate-50">
      <div className="p-4 md:p-7 bg-white rounded-lg shadow-xl space-y-5 m-3 md:m-5 text-lg font-base md:font-medium leading-loose text-left md:text-justify">
        <div id="select">
          <div className="mb-2 block">
            <label
              htmlFor="applicationGroup"
              className="font-bold text-base md:text-xl"
            >
              Select the Group you applied to and download the Admit Card
            </label>
          </div>
          <select
            className="select select-accent w-full max-w-xs"
            {...register("applicationGroup", {
              required: "*Please select the group you applied to.",
            })}
            value={applicationGroup}
            onChange={(event) => setApplicationGroup(event.target.value)}
          >
            <optgroup
              className="font-semibold text-base md:text-xl"
              label="Groups"
            >
              <option value="" hidden>
                Select an Option
              </option>
              <option value="Science Bangla Version">
                Science Bangla Version
              </option>
              <option value="Science English Version">
                Science English Version
              </option>
              <option value="Business Studies">Business Studies</option>
              <option value="Humanities">Humanities</option>
              <option value="Group Change (Science To Business Studies)">
                Group Change (Science To Business Studies)
              </option>
              <option value="Group Change (Science To Humanities)">
                Group Change (Science To Humanities)
              </option>
              <option value="Group Change (Business Studies to Humanities)">
                Group Change (Business Studies to Humanities)
              </option>
            </optgroup>
          </select>
          {errors.applicationGroup && (
            <p className="text-red-600 mt-2">
              {errors.applicationGroup.message}
            </p>
          )}
        </div>
      </div>

      {singleApplicantData?.user_id ? (
        <div>
          <div ref={getDocumentRef}>
            <div
              className="w-[575px] h-[825px] border-2 border-black ml-[0.70rem] my-2"
              style={{ fontFamily: "ui-sans-serif" }}
            >
              <div className="p-2">
                <div className="flex place-items-center justify-center border-b-2 border-black p-2">
                  <img src={Logo} alt="SJS Logo" className="w-28 h-28 mt-2" />
                  <div className="ml-2 mt-0">
                    <h1 className="text-2xl font-bold">
                      St. Joseph Higher Secondary School
                    </h1>
                    <h1 className="text-lg font-bold">
                      97 Asad Avenue, Mohammadpur, Dhaka-1207.
                    </h1>
                    <h1 className="text-lg font-bold">
                      Admission Test for Class XI
                    </h1>
                    <h1 className="text-lg font-bold tracking-wide">
                      Academic Year: 2023-2024
                    </h1>
                  </div>
                </div>
                <div className="text-lg text-center font-bold tracking-wide">
                  <h1 className="mb-0 text-xl">Admit Card</h1>
                </div>
                <div className="flex items-center mt-2">
                  <img
                    src={`http://localhost:8800/${photo_path}`}
                    alt={full_name}
                    className="h-52 w-52 mx-auto rounded-3xl border border-black mr-3"
                  />
                  <div className="py-2 px-2 w-[470px] border border-black mx-auto">
                    <h1 className="text-xl">
                      <span className="font-bold">Admission Roll:</span>{" "}
                      <span className="font-bold">
                        {applicant_group}-{user_id}
                      </span>
                    </h1>
                    <h1>
                      <span className="font-bold mt-0">Applicant's Name:</span>{" "}
                      {full_name}
                    </h1>
                    <h1>
                      <span className="font-bold">Father's Name:</span>{" "}
                      {father_name}
                    </h1>
                    <h1>
                      <span className="font-bold">Mother's Name:</span>{" "}
                      {mother_name}
                    </h1>
                    <h1>
                      <span className="font-bold">School Name:</span>{" "}
                      {school_name}
                    </h1>
                    <h1>
                      <span className="font-bold">Applying for:</span>{" "}
                      {app_group_short || app_group_full}
                    </h1>
                    <h1>
                      <span className="font-bold">S.S.C Group:</span>{" "}
                      {ssc_group}
                    </h1>
                    <h1>
                      <span className="font-bold">S.S.C Roll:</span>
                      {exam_roll}
                    </h1>
                    <h1>
                      <span className="font-bold">Registration No:</span>{" "}
                      {reg_number}
                    </h1>
                    <h1>
                      <span className="font-bold">S.S.C G.P.A:</span>
                      {gpa}
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-center">
                    <span className="font-bold">Exam Details: Date:</span>{" "}
                    {exam_date}, <span className="font-bold">Time:</span>{" "}
                    {exam_time}
                  </h1>
                </div>
                <div>
                  <p className="font-bold">Important Instructions:</p>
                  <p className="text-sm">
                    1. The admit card should be preserved carefully. No
                    applicant is allowed to sit for the admission test without
                    admit card.
                  </p>
                  <p className="text-sm">
                    2. Written test and oral test will be held as per the date
                    and time mentioned in the admit card.
                  </p>
                  <p className="text-sm">
                    3. The applicant should be present at St. Joseph Higher
                    Secondary School campus at least 30 minutes before the test.
                  </p>
                  <p className="text-sm">
                    4. Photocopies of SSC admit card, registration card and
                    internet printed copy of SSC result should be brought during
                    the test.
                  </p>
                  <p className="text-sm">
                    5. Applicants will be allowed to bring black ink ballpoint
                    pen, pencil, eraser, and non-programmable scientific
                    calculator only. Mobile phones and smartwatches are not
                    allowed in the examination hall. Exchanging any instrument
                    among the students during the exam is strictly prohibited.
                  </p>
                  <p className="text-sm">
                    6. If any false or incorrect information is given in the
                    admission application form, the candidate will be considered
                    ineligible for admission in St. Joseph Higher Secondary
                    School.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-3">
            <button className="custom_button" onClick={handleGeneratePdf}>
              Download Admit Card
            </button>
            <button
              className="custom_button ml-4 bg-teal-600 hover:bg-teal-700"
              onClick={handleOpenPdf}
            >
              Print
            </button>
            <Link to="/" className="custom_button ml-4">
              Back
            </Link>
          </div>
        </div>
      ) : (
        <div className="font-semibold text-center text-base md:text-2xl p-3">
          No Admit Card Found, Please select the correct group.
        </div>
      )}
      {!singleApplicantData && (
        <div className="flex items-center justify-center h-screen">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default AdmitCard;
