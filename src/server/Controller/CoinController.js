const mysql = require("../mysql");

class CoinController {
  async trade(req, res) {
    const data = req.body;
    if (data.money < 10000) return res.send("least");
    const sql = {
      user: "SELECT * from users WHERE id=? AND pw=?",
      coin: "INSERT INTO purchases (user_id , coin , cnt , money) VALUES (?,?,?,?)",
      update: "UPDATE users SET money=? WHERE id=? AND pw=?",
    };
    const [user] = await mysql.query(sql.user, [data.user.id, data.user.pw]);
    const sqlVal = {
      coin: [user[0].id, data.coin, data.num, data.price * data.num],
      update: [
        `${Math.floor(user[0].money - data.price * data.num)}`,
        user[0].id,
        user[0].pw,
      ],
    };
    if (data.price * data.num > user[0].money) return res.send("moneyFail");
    await mysql.query(sql.coin, sqlVal.coin);
    await mysql.query(sql.update, sqlVal.update);
    return res.send("success");
  }

  async allList(req , res){
    const data = req.body;
    if(!data.id) return;
    const sql = {
      sale: "SELECT * from sales WHERE user_id=?",
      purchase: "SELECT * from purchases WHERE user_id=?",
    };
    const sqlData = {
      sale: [data.id],
      purchase: [data.id],
    };
    const [sale] = await mysql.query(sql.sale , sqlData.sale); 
    const [purchase] = await mysql.query(sql.purchase, sqlData.purchase);
    const val = {
      sale,
      purchase
    }
    return res.send(val);
  }

  async list(req, res) {
    const data = req.body;
    if (!data.user) return res.send(null);
    const sql = {
      purchase: "SELECT * from purchases WHERE user_id=? AND coin=?",
    };
    const sqlVal = {
      purchase: [data.user.id, data.name],
    };
    const [coin] = await mysql.query(sql.purchase, sqlVal.purchase);
    return res.send(coin);
  }

  async saleList(req, res) {
    const data = req.body;
    if (!data.user) return res.send(null);
    const sql = {
      sale: "SELECT * from sales WHERE user_id=? AND coin=?",
    };
    const sqlVal = {
      sale: [data.user.id, data.name],
    };
    const [coin] = await mysql.query(sql.sale, sqlVal.sale);
    return res.send(coin);
  }

  async sell(req, res) {
    const data = req.body;
    const sql = {
      insert:
        "INSERT INTO sales (user_id , coin , cnt , money) VALUE (?,?,?,?)",
      purchase: "SELECT * from purchases WHERE user_id=? AND coin=?",
      find: "SELECT * from sales WHERE user_id=? AND coin=?",
      userUpdate: "UPDATE users SET money=? WHERE id=? AND pw=?",
      userFind: "SELECT * from users WHERE id=? AND pw=?",
    };
    const sqlVal = {
      insert: [data.user.id, data.name, data.cnt, data.money],
      find: [data.user.id, data.name],
      purchase: [data.user.id, data.name],
      userUpdate: [data.user.money + data.money, data.user.id, data.user.pw],
    };
    const [coin] = await mysql.query(sql.purchase, sqlVal.purchase);
    const [find] = await mysql.query(sql.find, sqlVal.find);
    const listCnt =
      coin.length <= 0 ? 0 : coin.map(item => item.cnt).reduce((a, b) => a + b);
    const findCnt =
      find.length <= 0 ? 0 : find.map(item => item.cnt).reduce((a, b) => a + b);
    if (Number(data.cnt) + Number(findCnt) > Number(listCnt)) return res.send("error");
    await mysql.query(sql.insert, sqlVal.insert);
    await mysql.query(sql.userUpdate, sqlVal.userUpdate);
    return res.send("success");
  }
}

module.exports = new CoinController();
