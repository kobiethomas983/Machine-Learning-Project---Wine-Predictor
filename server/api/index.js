const router = require("express").Router();
const { Wines } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const allData = await Wines.findAll();
    res.send(allData);
  } catch (error) {
    console.log("ERROR", error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const singleWine = await Wines.findAll({
      where: {
        id: req.params.id
      }
    });
    res.json(singleWine);
  } catch (error) {
    console.log("error in :id route", error);
  }
});
router.post("/addWine", (req, res, next) => {
  try {
    console.log(req.body);
    res.send(req.body);
  } catch (error) {
    console.log(ERROR);
  }
});

module.exports = router;
