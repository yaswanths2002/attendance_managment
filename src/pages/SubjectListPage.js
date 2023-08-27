import React from "react";
import Header from "../components/Header";

const SubjectList = () => {
  // You can replace these example values with actual student data
  const studentInfo = {
    name: "Sirigiri Yaswanth",
    rollNo: "123",
    department: "ABC",
    semester: "7th",
  };

  const subjects = [
    {
      slNo: 1,
      subjectCode: "SUB101",
      subjectName: "Mathematics",
      facultyName: "ABC",
      slot: "8:00-9:00",
      venue: "Room 101",
    },
    {
      slNo: 2,
      subjectCode: "SUB102",
      subjectName: "Physics",
      facultyName: "ABC",
      slot: "9:00-10:00",
      venue: "Room 102",
    },
    {
      slNo: 3,
      subjectCode: "SUB103",
      subjectName: "Chemistry",
      facultyName: "ABC",
      slot: "10:00-11:00",
      venue: "Room 103",
    },
    {
      slNo: 4,
      subjectCode: "SUB103",
      subjectName: "Operating System",
      facultyName: "ABC",
      slot: "11:00-12:00",
      venue: "Room 104",
    },
    {
      slNo: 3,
      subjectCode: "SUB103",
      subjectName: "React",
      facultyName: "ABC",
      slot: "13:00-14:00",
      venue: "Room 105",
    },
    {
      slNo: 3,
      subjectCode: "SUB103",
      subjectName: "Data Structures and Algorithms",
      facultyName: "ABC",
      slot: "14:00-15:00",
      venue: "Room 106",
    },
    // Add more subjects as needed
  ];

  return (
    <div>
      <Header />
      <div className="container">
        <div className="inner-container text-center">
          <h1 className="page-title">My Subjects</h1>
        </div>
        <div>
          <p>Name of Student: {studentInfo.name}</p>
          <p>RollNo: {studentInfo.rollNo}</p>
          <p>Department: {studentInfo.department}</p>
          <p>Semester: {studentInfo.semester}</p>

          <h2>Subjects</h2>
          <table className="ui celled table">
            <thead>
              <tr>
                <th>SL. No</th>
                <th>Subject Code</th>
                <th>Subject Name</th>
                <th>Faculty Name</th>
                <th>Slot</th>
                <th>Venue</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject) => (
                <tr key={subject.subjectCode}>
                  <td>{subject.slNo}</td>
                  <td>{subject.subjectCode}</td>
                  <td>{subject.subjectName}</td>
                  <td>{subject.facultyName}</td>
                  <td>{subject.slot}</td>
                  <td>{subject.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubjectList;
