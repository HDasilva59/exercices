const artPiece = [{ piece: "Mona Lisa", type: "painting" }];

function canTakeArtPieces(pieces) {
  return pieces.every(tester);
}

function tester(object) {
  if (object.type === "painting") {
    return true;
  } else {
    return false;
  }
}

canTakeArtPieces(artPiece);

// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
