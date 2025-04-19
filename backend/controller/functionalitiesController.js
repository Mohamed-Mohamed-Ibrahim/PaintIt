const express = require('express');
const functionalitiesService = require('../service/functionalitiesService');

const router = express.Router();

router.post('/function/shape', functionalitiesService.setShape);
router.post('', (req, res) => {
    functionalitiesService.setShape

    if ( functionalitiesService.getShape ) {
        return;
    }
    functionalitiesService.change
});
router.post('/function/copy', (req, res) => {
    functionalitiesService.setShape

    if ( functionalitiesService.getShape ) {
        return;
    }
    functionalitiesService.copy
});
router.post('/function/delete', (req, res) => {
    functionalitiesService.setShape

    if ( functionalitiesService.getShape ) {
        return;
    }
    functionalitiesService.delete
});

module.exports = router;