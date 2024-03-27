# Run360 

## Made By: 
1. Anika Grewal
2. Bri Guemos
3. Mariessa Pinto

## Description 

## Dependencies 

[ExpressJS]()
[EJS]()
[pg](https://www.npmjs.com/package/pg)

## Instructions on how to run Locally 

1. Clone repository from Github 
2. In the terminal run the command npm install 
4. In pgAdmin create a new Database called run360 
5. Use the same password written in the index.js 
6. Open and start this database, run360, on Postgres
7. In pgAdmin create a table 
8. In the query add this: 
 CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    location TEXT NOT NULL, 
    distance TEXT NOT NULL, 
    time TEXT NOT NULL, 
    notes TEXT NOT NULL, 
    title TEXT NOT NULL,
 );
 as well as add this: 
SELECT * FROM public.items
ORDER BY id ASC 
9. Execute the code 
10. Refresh the table 
11. View/edit table and click on all rows to see the table
12. Now in vscode run in the terminal node index.js and run on localhost:3000