import mysql from 'mysql';
import u from '../extras/utils';

export const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "d@taBas3",
  database:'lobo'
});

con.connect(function(err) {
  if (err) throw err;
  console.log(u.horario()+" Connected!");
});