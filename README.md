# OhioHealth_WebApp
Fullstack Dot net web application built using React, .NET Rest API+ API Key layer for security 

Configure OhioHealth_client:
=============================
1.	Install the dependences using command npm install after importing the project into vscode 
2.	To run the project npm start

Configure OhioHealth_WebApi:
===================================
1.	Import the OhioHealth_WebApi code in visual studio,
2.	Change the DB connections according to your default connection string and Build the Application. 
3.	Once build is successful, go to Package manager console and run below commands
4.	Add-Migration “initial create”
5.	Update-Database
6.	run the application launches on http://localhost:5000/api/Employees/

Both client and web api are connected now. Use the client application to save the data and retrieve.
![image](https://github.com/user-attachments/assets/476fe05b-080d-4339-bf2a-c01e3efce6c9)
