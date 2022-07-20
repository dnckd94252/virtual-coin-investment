const express = require("express");
const Router = express.Router();
const UserController = require("./Controller/UserController");
const CoinController = require("./Controller/CoinController");
const ChatController = require("./controller/ChatController");

Router.post("/user/register", UserController.register);
Router.route("/user/login")
  .post(UserController.login)
  .get(UserController.loginCheck);
Router.route("/user/money").post(UserController.money);
Router.route('/user/record').post(UserController.record);

Router.route("/coin/trade").post(CoinController.trade);
Router.route("/coin/list").post(CoinController.list);
Router.route("/coin/sale").post(CoinController.saleList);
Router.route("/coin/sell").post(CoinController.sell);
Router.route('/coin/all').post(CoinController.allList);

Router.route("/chat").post(ChatController.chat);
Router.route("/chat/list").post(ChatController.list);

module.exports = Router;
