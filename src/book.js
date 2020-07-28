function createTitle(title) {
  this.title = title;
  return "The " + title;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character;
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  // saveReview: saveReview,
  // calculatePageCount: calculatePageCount,
  // writeBook: writeBook,
  // editBook: editBook
}
