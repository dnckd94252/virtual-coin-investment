const mysql = require("../mysql");
const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");

class UserController {
  async register(req, res) {
    const insertQuery =
      "INSERT INTO users (id , pw , name , phone) VALUES (?,?,?,?)";
    const prams = [req.body.id, req.body.pw, req.body.name, req.body.phone];
    const findQuery = "SELECT * from users WHERE id=?";
    const [findItem, findField] = await mysql.query(findQuery, [req.body.id]);
    if (findItem.length > 0) return res.send("fail");
    await mysql.query(insertQuery, prams);
    return res.send("success");
  }
  async login(req, res) {
    const sql = {
      find: "SELECT * from users where id=? AND pw=?",
    };
    const [findItem, findField] = await mysql.query(sql.find, [
      req.body.id,
      req.body.pw,
    ]);
    if (findItem.length <= 0) return res.send("fail");
    else {
      const option = {
        algorithm: "HS256",
        issuer: "issuer",
      };
      const secretKey = "coinSecretKey";
      const reqItem = jwt.sign(findItem[0], secretKey, option);
      res.cookie("coinUser", reqItem);
      res.send("success");
    }
  }

  async loginCheck(req, res) {
    const dataCookie = req.cookies["coinUser"];
    const secretKey = "coinSecretKey";
    if (!dataCookie) return res.send("fail");
    const decode =  await jwtDecode(dataCookie, secretKey);
    const sql = {
      find: "SELECT * from users where id=? AND pw=? AND name=? AND phone=?",
    };
    const [findItem] = await mysql.query(sql.find, [
      decode.id,
      decode.pw,
      decode.name,
      decode.phone,
    ]);
    if (findItem.length <= 0 || !findItem) return res.send("fail");
    else {
      return res.send(findItem[0]);
    }
  }

  async money(req, res) {
    const data = req.body;
    const sql = {
      update: "UPDATE `users` SET money=? WHERE id=? AND pw=?",
      find: "SELECT * from `users` WHERE id=? AND pw=?",
      record_insert : "INSERT INTO money_records (user_id , value , date) VALUES (?,?,?)",
      record_find : "SELECT * from money_records WHERE user_id=? AND date=?",
      record_update : "UPDATE money_records SET value=? WHERE user_id=? AND date=?",
    };
    const now = new Date();
    const date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
    
    const sqlData = {
      update: [data.user.id, data.user.pw],
      find: [data.user.id, data.user.pw],
      record_find : [data.user.id , date],
    };
    const [findQuery] = await mysql.query(sql.find, sqlData.find);
    const moneyVal =
      Number(data.ref) + Number(findQuery[0]["money"]) <= 0
        ? 0
        : Number(data.ref) + Number(findQuery[0]["money"]);
    
    await mysql.query(sql.update, [moneyVal, ...sqlData.update]);
    
    const [record_find] = await mysql.query(sql.record_find , sqlData.record_find);
    if(record_find.length <= 0 || !record_find ) {
      await mysql.query(sql.record_insert, [data.user.id, moneyVal , date]);
    }else {
      const findItem = record_find[0];
      await mysql.query(sql.record_update, [moneyVal, data.user.id,date]);
    }
    return res.send("success");
  }

  async record(req , res) {
    const data = req.body;
    if(!data.id) return;
    const sql = {
      record : 'SELECT * from money_records WHERE user_id=?',
    }
    const sqlData =  {
      record : [data.id],
    }
    const [val] = await mysql.query(sql.record , sqlData.record);
    return res.send(val);
  }
}

module.exports = new UserController();
