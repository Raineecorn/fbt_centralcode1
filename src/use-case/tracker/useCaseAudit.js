
const useCaseAudit = ({ makeTrackings, query }) => {
  return async function post(auditData) {
    // Validate and create audit entity
    const audit = makeAudits(auditData);

    // Check if audit ID already exists in the database
    const existingAudit = await query.fetchData({ audit_id: audit.getAuditId() });
    if (existingAudit.length > 0) {
      throw new Error('Audit ID already exists. Try a new one.');
    }

    // Create the audit record in the database
    const result = await query.createData({
      data: {
        audit_id: audit.getAuditId(),
        tracking_id: audit.getTrackingId(),
        date_loaded: audit.getDateLoaded(),
        remarks: audit.getRemarks(),
      }
    });

    return result;
  };
};

module.exports = useCaseAudit;
