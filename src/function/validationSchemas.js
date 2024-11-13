// src/validationSchemas.js
const validationSchemas = ({ Joi }) => {
  // Define the tracking schema
  const trackingSchema = Joi.object({
    id: Joi.string().required(),
    sender: Joi.string().required(),
    receiver: Joi.string().required(),
    items: Joi.string().required(),
    date_ordered: Joi.date().required(),
    number_of_boxes: Joi.number().integer().required(),
    box_size: Joi.string().required(),
    weight: Joi.string().required(),
    address: Joi.string().required(),
    destination: Joi.string().required(),
    date_loaded: Joi.date().required(),
  });

  // Define the audit schema
  const auditSchema = Joi.object({
    audit_id: Joi.number().integer().required(),
    tracking_id: Joi.string().required(),
    date_loaded: Joi.date().required(),
    remarks: Joi.string().required(),
  });

  // Define the entry schema
  const entrySchema = Joi.object({
    trackingNumber: Joi.string().required(),
    date: Joi.date().required(),
    senderName: Joi.string().required(),
    senderContactNumber: Joi.string().required(),
    receiverName: Joi.string().required(),
    receiverContactNumber: Joi.string().required(),
    senderEmail: Joi.string().email().optional(),
    receiverEmail: Joi.string().email().optional(),
    items: Joi.string().required(),
    senderAddress: Joi.string().required(),
    receiverAddress: Joi.string().required(),
    numberOfBoxes: Joi.number().integer().required(),
    boxSize: Joi.string().required(),
    weight: Joi.number().required(),
    dateLoaded: Joi.date().required(),
    remarks: Joi.string().optional()
  });


  const registerSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).max(100).required(), // Minimum 8 characters for security
  });

  const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const fetchAccountSchema = Joi.object({
    userId: Joi.string().uuid().required(), // Assuming userId is a UUID
  });
  const deleteAccountSchema = Joi.object({
    userId: Joi.string().uuid().required(), // Assuming userId is a UUID
  });
  // Return the schemas directly as an object
  return {
    trackingSchema,
    auditSchema,
    entrySchema,
    registerSchema,
    loginSchema,
    fetchAccountSchema,
    deleteAccountSchema,
  };
};

module.exports = validationSchemas;
