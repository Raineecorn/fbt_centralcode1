// src/data-access/connection/entry/app.js
const { connections } = require("../../index");
const { FBT_entry } = require("../../sequelize/models"); // Ensure FBT_entry is accessed directly
const { Op } = require("sequelize");
const { buildCondition } = require("../../../function/app");
const Query = require("./query");

// Initialize entry queries using FBT_entry model
const entryQuery = Query({ connections, Model: FBT_entry, Op, buildCondition });

module.exports = {
  entryQuery
};
