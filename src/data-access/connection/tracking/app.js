// src/data-access/connection/tracker/app.js
const { connections } = require("../../index");
const { FBT_Tracking, FBT_Audit, FBT_entry } = require("../../sequelize/models/");
const { Op } = require("sequelize");
const { buildCondition } = require("../../../function/app");
const Query = require("./query");

// Initialize tracking and audit queries
const trackingQuery = Query({ connections, Model: FBT_Tracking, Op, buildCondition });
const auditQuery = Query({ connections, Model: FBT_Audit, Op, buildCondition });

module.exports = {
  trackingQuery,
  auditQuery
};
