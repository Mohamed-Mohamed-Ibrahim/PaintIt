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
  functionalitiesService.setShape(req, res);

  if (functionalitiesService.getShape() == null) {
    return;
  }
  functionalitiesService.copyShape(res, req);
});
router.post("/function/delete", (req, res) => {
  functionalitiesService.setShape(req, res);

  if (functionalitiesService.getShape() == null) {
    return;
  }
  functionalitiesService.deleteShape(res, req);
});

router.post("/function/save", (req, res) => {
  functionalitiesService.saveProgram(req.body.saveLoc, req.body.format, res);
});

router.post("/function/load", (req, res) => {
  functionalitiesService.SetLoadFile(req.body, res);
});

router.get("/function/load/program", (req, res) => {
 functionalitiesService.loadProgram(res);
});

module.exports = router;
