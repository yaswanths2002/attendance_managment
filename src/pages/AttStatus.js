import React from "react";
import Header from "../components/Header";
import "../App.css";
const AttendanceStatus = () => {
  const attendanceData = [
    {
      slNo: 1,
      subCode: "SUB101",
      subject: "Mathematics",
      classesConducted: 10,
      classesPresent: 8,
      classesAbsent: 2,
      attpercentage: "80%",
    },
    {
      slNo: 2,
      subCode: "SUB102",
      subject: "Physics",
      classesConducted: 8,
      classesPresent: 5,
      classesAbsent: 3,
      attpercentage: "62.5%",
    },
    {
      slNo: 3,
      subCode: "SUB103",
      subject: "Chemistry",
      classesConducted: 4,
      classesPresent: 4,
      classesAbsent: 0,
      attpercentage: "100%",
    },
    {
      slNo: 4,
      subCode: "SUB104",
      subject: "Operating System",
      classesConducted: 12,
      classesPresent: 10,
      classesAbsent: 2,
      attpercentage: "83.3%",
    },
    {
      slNo: 5,
      subCode: "SUB105",
      subject: "React",
      classesConducted: 15,
      classesPresent: 8,
      classesAbsent: 7,
      attpercentage: "53.3%",
    },
    {
      slNo: 2,
      subCode: "SUB106",
      subject: "Data Structures and Algorithms",
      classesConducted: 5,
      classesPresent: 5,
      classesAbsent: 0,
      attpercentage: "100%",
    },
  ];

  return (
    <div className="ui main">
      <Header />
      <h2>My Attendance Status</h2>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Subject Code</th>
            <th>Subject</th>
            <th>Classes Conducted</th>
            <th>Classes Present</th>
            <th>Classes Absent</th>
            <th>Attandance Percentage</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((row, index) => (
            <tr key={index}>
              <td>{row.slNo}</td>
              <td>{row.subCode}</td>
              <td>{row.subject}</td>
              <td>{row.classesConducted}</td>
              <td>{row.classesPresent}</td>
              <td>{row.classesAbsent}</td>
              <td
                className={
                  parseFloat(row.attpercentage) < 75
                    ? "low-attendance"
                    : "good-attendance"
                }
              >
                {row.attpercentage}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceStatus;
