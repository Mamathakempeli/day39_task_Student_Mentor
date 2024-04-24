ZEN-Mentos-student task
Mentor and Student Assigning with Database

Agenda

1.Write API to create Mentor

2.Write API to create Student

3.Write API to Assign a student to Mentor

Select one mentor and Add multiple Student

A student who has a mentor should not be shown in List

4.Write API to Assign or Change Mentor for particular Student

Select One Student and Assign one Mentor

5.Write API to show all students for a particular mentor

Base URL http://localhost:4100

Mentor Api's
GET          /Mentors 
POST         /Mentors 
GET by ID    /Mentors/get-mentor/:ID 

Student Api's
GET           /Students 
POST          /Students 
To get list of students whose mentors weren't assigned

GET          /Students/no-mentors
To assign or change Mentor for student

PATCH        /Students/assign-mentor/:student-id
To assign mentors for multiple Students

PATCH        /Students/assign-mentor-students
To Assign or Change Mentor for particular student

Pass Mentor ID in request Body

PATCH        /Students/assign-mentor/:student-id 
To Assign mentor for multiple students

Pass Mentor ID and Student ID as list in body

PATCH        /Students/assign-mentor-students 
To get all students of particular Mentor

GET          /Students/mentor-stude