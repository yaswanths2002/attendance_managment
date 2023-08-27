import React, { useState } from "react";
import Header from "../components/Header";
import Popup from "./Popup";

const AttendanceForm = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [subject, setSubject] = useState("");
  const [attendance, setAttendance] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [subjectsMarkedForAttendance, setSubjectsMarkedForAttendance] =
    useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    if (
      !name ||
      !rollNo ||
      !email ||
      !mobileNo ||
      !subject ||
      !attendance ||
      !selectedDate
    ) {
      alert("Please fill out all the fields before submitting.");
      return;
    }
    if (currentDate.toDateString() === selectedDate.toDateString()) {
      if (!subjectsMarkedForAttendance.includes(subject)) {
        setIsOpenPopup(true);
        setName("");
        setRollNo("");
        setEmail("");
        setMobileNo("");
        setAttendance("");
        setSelectedDate(new Date());
        setSubjectsMarkedForAttendance([
          ...subjectsMarkedForAttendance,
          subject,
        ]);
      } else {
        alert("Attendance for this subject has already been marked for today.");
      }
    } else {
      alert("You can only give attendance for the current date.");
    }
  };

  return (
    <div className="ui main">
      <Header />
      <h2>Mark Your Attendance</h2>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Roll No</label>
          <input
            type="text"
            name="rollno"
            placeholder="Roll No"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Mobile Number</label>
          <input
            type="number"
            name="mobileno"
            placeholder="0123456789"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={selectedDate.toISOString().split("T")[0]} // Convert date to string format (YYYY-MM-DD)
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            max={new Date().toISOString().split("T")[0]} // Prevent selecting future dates
          />
        </div>
        <div className="field">
          <label>Subject</label>
          <select
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="SUB101">SUB101 - Mathematics</option>
            <option value="SUB102">SUB102 - Physics</option>
            <option value="SUB103">SUB103 - Chemistry</option>
            <option value="SUB104">SUB104 - Operating System</option>
            <option value="SUB105">SUB105 - React</option>
            <option value="SUB106">
              SUB106 - Data Structures and Algorithms
            </option>
          </select>
        </div>
        <div className="field">
          <label>Attendance</label>
          <select
            name="attendance"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select>
        </div>
        <div>
          <button className="ui button blue" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
      {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
    </div>
  );
};

export default AttendanceForm;
