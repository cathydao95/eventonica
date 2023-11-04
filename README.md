
<!-- ABOUT THE PROJECT -->
## Eventonica

## Features

- Display events fetched from the database
- Add new events through a form
- Delete and edit events
- (Stretch Goal) Favorite and un-favorite events

### Demo

https://github.com/cathydao95/eventonica/assets/79618165/b24280ee-6d85-4908-8d81-144614a67564




## Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.


* [![Node.js][Node.js-badge]][Node-url]
* [![Express][Express-badge]][Express-url]
* [![PostgreSQL][PostgreSQL-badge]][PostgreSQL-url]
* [![React][React-badge]][React-url]
* [![Vite][Vite-badge]][Vite-url]

[Node.js-badge]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white
[Express-badge]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[PostgreSQL-badge]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[React-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Vite-badge]: https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E

[Node-url]: https://nodejs.org/
[Express-url]: https://expressjs.com/
[PostgreSQL-url]: https://www.postgresql.org/
[React-url]: https://reactjs.org/
[Vite-url]: https://vitejs.dev/

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

1. Clone project & switch into the project directory.
   ```sh
   git clone https://github.com/cathydao95/eventonica
   cd eventonica
   ```
2. Install NPM packages on the client and server
   ```sh
     cd client && npm install && cd ../server && npm install
   ```
3. Setup Environment Variables
   ```js
   Copy the instructions from the .env.example files in the server.
   ```
4. Connect the database
   ```js
   cd server
   psql eventonica -f db.sql
   ```
5. Start the program
   ```js
   cd server && npm run dev
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>








