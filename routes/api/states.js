const express = require("express");
const statesController = require("../../controllers/statesController");

const router = express.Router(); // express router

const { verifyStates, fetchStates } = require("../../middleware/verificationState");

// handling different routes
router.route("/").get(fetchStates, statesController.getAllStates);
router
  .route("/:state")
  .get(verifyStates, fetchStates, statesController.getState);
router
  .route("/:state/funfact")
  .get(verifyStates, fetchStates, statesController.getFunFact)
  .post(verifyStates, fetchStates, statesController.postFunFact)
  .patch(verifyStates, fetchStates, statesController.updateFunFact)
  .delete(verifyStates, fetchStates, statesController.deleteFunFact);
router
  .route("/:state/admission")
  .get(verifyStates, fetchStates, statesController.getAdmission);
router
  .route("/:state/nickname")
  .get(verifyStates, fetchStates, statesController.getNickname);
router
  .route("/:state/capital")
  .get(verifyStates, fetchStates, statesController.getCapital);
router
  .route("/:state/population")
  .get(verifyStates, fetchStates, statesController.getPopulation);

module.exports = router;
