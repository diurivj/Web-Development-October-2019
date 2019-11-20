const Character = require("../models/Character");

exports.getAllCharacters = (req, res) => {
  Character.find()
    .then(characters => res.json({ characters }))
    .catch(err => console.error(err));
};

exports.updateCharacter = (req, res) => {
  const { characterId } = req.params;
  const { name, weapon } = req.body;
  console.log(name, weapon);
  //Character.findOneAndUpdate({_id: id}) ===
  Character.findByIdAndUpdate(characterId, { name, weapon })
    .then(() => res.status(200).json({ message: "Yastubo" }))
    .catch(err => console.error(err));
};

exports.deleteCharacter = (req, res) => {
  const { characterId } = req.params;
  Character.findByIdAndDelete(characterId)
    .then(() => res.status(200).json({ message: "Objetivo eliminado" }))
    .catch(err => console.error(err));
};

exports.createCharacter = (req, res) => {
  const { name, weapon } = req.body;

  Character.create({ name, weapon })
    .then(() => res.status(201).json({ message: "Character created" }))
    .catch(err => console.error(err));
};

exports.getOneCharacter = (req, res) => {
  const { characterId } = req.params;
  Character.findById(characterId).then(character =>
    res.status(200).json(character)
  );
};
