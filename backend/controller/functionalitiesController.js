const express = require("express");
const functionalitiesService = require("../service/functionalitiesService");

const router = express.Router();

router.post("/function/shape", functionalitiesService.setShape);
router.post("", (res, req) => {
  functionalitiesService.setShape(res, req);

  if (functionalitiesService.getShape() == null) {
    return;
  }
  functionalitiesService.changeShape(res, req);
});
router.post("/function/copy", (req, res) => {
  functionalitiesService.setShape(res, req);

  if (functionalitiesService.getShape() == null) {
    return;
  }
  functionalitiesService.copyShape(res, req);
});
router.post("/function/delete", (req, res) => {
  functionalitiesService.setShape(res, req);

  if (functionalitiesService.getShape() == null) {
    return;
  }
  functionalitiesService.deleteShape(res, req);
});

module.exports = router;
