# PROJECT STILL IN PROGRESS!
# CateringApp

## Description
This project is imitating catering web application with functionalities mentioned below. It's being made for fun, however I try to maintain as clean code as possible and use as much skills as I have while learning some new things. 

## Technologies
* Angular with Material UI and Bootstrap
* HTML/SCSS
* C# with .NET6, Entity Framework and PostgreSql database

## Functionalities
* Register and login system (with auth guard so logged in user cannot login/register) - backend + frontend
* Possibility to change logged in user credentials - backend + frontend
* Daily caloric requirement calculator - frontend
* Ordering catering for some period of time - frontend (+ backend soon)

## Running the app
### In order to run this app after cloning repo you need to do following steps:
1. Install VSCode(https://code.visualstudio.com/download)
2. Install Angular-CLI ( *npm install -g @angular/cli* in VSCode console)
3. Install [.NET SDK](https://dotnet.microsoft.com/en-us/download)
4. Install [PostgreSQL with pgAdmin 4](https://www.postgresql.org/download/)
5. Go into frontend folder and run *npm install* in the console
6. Launch frontend with *ng serve*
7. Open pgAdmin, click *Object* > *Register* > *Server*
8. Enter server data - server name = *postgres*,
9. In *Connection* tab - Host name=*localhost*, Port=*5432*, Maintenance database=*postgres*, Username=*postgres*, Password=*postgres*
10. On another terminal get into backend/catering-app folder and launch backend by writing *dotnet run* into console
11. Enter *localhost:4200* in the browser and enjoy the app.