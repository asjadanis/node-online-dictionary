# node-online-dictionary
A simple dictionary app built in node js, express, javascript and mysql

To Run the project Locally/

1. `git clone git@github.com:asjadanis/node-online-dictionary.git`
2. Download the sql script from [here](http://mumstudents.org/cs472/2021-03-BL/Labs/englishdictionary.sql) to add a dictionary record in your MySQL WorkBench
3. Run the script and it will add the recrods in an `entries` DB
4. Go to `node-backend` directory and create a `.env` file and paste in your DB credentials and config settings here. See `.env.example` for referenece.
5. Once setup run yarn in the `node-backend` directory and then run yarn dev to start the development server.
6. Open `index.html` from frontend folder in your browser and query some words to see the project in action.
