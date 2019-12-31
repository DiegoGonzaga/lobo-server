import mysql from 'mysql';
import u from '../extras/utils';

const con = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database:process.env.DB_SCHEMA
});

con.connect(function(err) {
  if (err) throw err;
  console.log(u.horario()+" Connected!");
});

export default con;