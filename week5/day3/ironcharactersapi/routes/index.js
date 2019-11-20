const express = require("express");
const router = express.Router();
const {
  getAllCharacters,
  updateCharacter,
  deleteCharacter,
  createCharacter,
  getOneCharacter
} = require("../controllers/characters");
/* GET home page */
router
  .get("/characters", getAllCharacters)
  .get("/characters/:characterId", getOneCharacter)
  .post("/characters", createCharacter)
  .patch("/characters/:characterId", updateCharacter)
  .delete("/characters/:characterId", deleteCharacter);

module.exports = router;
