const mysql = require("../mysql");

class ChatController {
  async chat(req, res) {
    const user = req.body.user;
    const comment = req.body.comment;
    const name = req.body.name;

    if (!user) return res.send("notUser");
    if (!comment) return res.send("notComment");
    const sql = {
      insert: "INSERT INTO chat (user_id , comment , coin) VALUES (?,?,?)",
    };
    const sqlData = {
      insert: [user.id, comment, name],
    };

    await mysql.query(sql.insert, sqlData.insert);
    return res.send("success");
  }

  async list(req, res) {
    const name = req.body.name;
    if (!name) return;
    const sql = {
      select: "SELECT * from chat WHERE coin=?",
    };
    const sqlData = {
      select: [name],
    };
    const [find] = await mysql.query(sql.select, sqlData.select);
    return res.send(find);
  }
}

module.exports = new ChatController();
