
const useCaseTracking = ({ makeAudits,query }) => {
  return async function post(trackingData) {
    // Validate and create tracking entity
    const tracking = makeTrackings(trackingData);

    // Check if tracking ID already exists in the database
    const existingTracking = await query.fetchData({ id: tracking.getId() });
    if (existingTracking.length > 0) {
      throw new Error('Tracking ID already exists. Try a new one.');
    }

    // Create the tracking record in the database
    const result = await query.createData({
      data: {
        id: tracking.getId(),
        sender: tracking.getSender(),
        receiver: tracking.getReceiver(),
        items: tracking.getItems(),
        date_ordered: tracking.getDateOrdered(),
        number_of_boxes: tracking.getNumberOfBoxes(),
        box_size: tracking.getBoxSize(),
        weight: tracking.getWeight(),
        address: tracking.getAddress(),
        destination: tracking.getDestination(),
        date_loaded: tracking.getDateLoaded(),
      }
    });

    return result;
  };
};

module.exports = useCaseTracking;
