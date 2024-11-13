// src/entities/makeTracking.js
const makeTracking = ({}) => {
    return function make({
      id,
      sender,
      receiver,
      items,
      date_ordered,
      number_of_boxes,
      box_size,
      weight,
      address,
      destination,
      date_loaded,
    } = {}) {
      // Validation for required fields
      if (!id) {
        throw new Error("ID must be provided!");
      }
      if (!sender) {
        throw new Error("Sender must be provided!");
      }
      if (!receiver) {
        throw new Error("Receiver must be provided!");
      }
      if (!items) {
        throw new Error("Items must be provided!");
      }
      if (!date_ordered) {
        throw new Error("Date ordered must be provided!");
      }
      if (!number_of_boxes) {
        throw new Error("Number of boxes must be provided!");
      }
      if (!box_size) {
        throw new Error("Box size must be provided!");
      }
      if (!weight) {
        throw new Error("Weight must be provided!");
      }
      if (!address) {
        throw new Error("Address must be provided!");
      }
      if (!destination) {
        throw new Error("Destination must be provided!");
      }
      if (!date_loaded) {
        throw new Error("Date loaded must be provided!");
      }
  
      // Return an immutable object with getter functions
      return Object.freeze({
        getId: () => id,
        getSender: () => sender,
        getReceiver: () => receiver,
        getItems: () => items,
        getDateOrdered: () => date_ordered,
        getNumberOfBoxes: () => number_of_boxes,
        getBoxSize: () => box_size,
        getWeight: () => weight,
        getAddress: () => address,
        getDestination: () => destination,
        getDateLoaded: () => date_loaded,
      });
    };
  };
  
  module.exports = makeTracking;
  