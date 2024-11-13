// src/data-access/connection/account/app.js
const { connections } = require("../../index");
const { Admin } = require("../../sequelize/models"); // Admin model
const { Op } = require("sequelize");
const { buildCondition } = require("../../../function/app");
const Query = require("./query");

// Initialize account queries with Admin model
const accountQuery = Query({ connections, Model: Admin, Op, buildCondition });

module.exports = {
  accountQuery, // Export accountQuery for use in other modules
};
