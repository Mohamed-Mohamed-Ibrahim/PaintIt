const express = require("express");
const actionSequenceService = require("../service/actionSequenceService");

const router = express.Router();

router.get("/undo", actionSequenceService.undo);
router.get("/redo", actionSequenceService.redo);

module.exports = router;
