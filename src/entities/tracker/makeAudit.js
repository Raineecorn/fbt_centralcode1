// src/entities/makeAudit.js
const makeAudit = ({}) => {
    return function make({
      audit_id,
      tracking_id,
      date_loaded,
      remarks,
    } = {}) {
      // Validation for required fields
      if (!audit_id) {
        throw new Error("Audit ID must be provided!");
      }
      if (!tracking_id) {
        throw new Error("Tracking ID must be provided!");
      }
      if (!date_loaded) {
        throw new Error("Date loaded must be provided!");
      }
      if (!remarks) {
        throw new Error("Remarks must be provided!");
      }
  
      // Return an immutable object with getter functions
      return Object.freeze({
        getAuditId: () => audit_id,
        getTrackingId: () => tracking_id,
        getDateLoaded: () => date_loaded,
        getRemarks: () => remarks,
      });
    };
  };
  
  module.exports = makeAudit;
  