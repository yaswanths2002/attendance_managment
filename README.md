
# Simple Attendance Managment System

It is a simple react Attendance Managment app where student can submit thier attendance using a form.It has in total three pages:
1)Subject List

2)Mark Attendance

3)Attendance Status

The Subject List page contains the student information and the list of subjects the student have enrolled in that particular semester.

The Mark Attendance Paage will contains a form where the student need to submit the form to mark thier attendance and also i have added functionalities like they can't give the attendance before day or after date they can only give attendance on the current date only.Another functionality is like they can't give the attendance for that same subject again on that same day once more.

The Attendance Status Page where the student will check thier attendance percentage and the remaining things.


## Demo
Demo link of site : https://yashu-attendancemgmt.netlify.app/status



## Run Locally

Clone the project

```bash
  https://github.com/yaswanths2002/attendance_managment.git
```

Go to the project directory

```bash
  cd attendance_managment

```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Deployment

I have used netlify CLI to deploy the site

Steps I have followed:

1)First we need to build the app before we go for Deployment.To make that run the below command
```bash
  npm run build

```

2)First we need to install the Netlify CLI tool using the following command in your terminal

```bash
  npm install netlify-cli -g

```
3)Next we need to login to our netlify account by using the below command

```bash
  netlify login
```
4)Next use the below command in the termminal to deploy our app
```bash
  netlify deploy
```
5)After running the above command we need to select the  Create & configure a new site then choose the team as the default option and final enter the site name as u wish and when asked to provide a publish directory enter build.

6)Finally use the below command to make the app live
```bash
  netlify deploy --prod
```
Again enter buils for the publish directory

Finally our site is live now


