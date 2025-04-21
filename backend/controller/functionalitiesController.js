const express = require("express");
const functionalitiesService = require("../service/functionalitiesService");

const router = express.Router();

router.post("/function/shape", functionalitiesService.setShape);
router.post("", (res, req) => {
  functionalitiesService.setShape(res, req);
  console.log(1234);

  if (functionalitiesService.getShape == null) {
    return;
  }
  // console.log(1290);
  functionalitiesService.changeShape(res, req);
  // console.log(1290123);
});
router.post("/function/copy", (req, res) => {
  functionalitiesService.setShape;

  if (functionalitiesService.getShape == null) {
    return;
  }
  functionalitiesService.copyShape;
});
router.post("/function/delete", (req, res) => {
  functionalitiesService.setShape;

  if (functionalitiesService.getShape == null) {
    return;
  }
  functionalitiesService.deleteShape;
});

module.exports = router;
