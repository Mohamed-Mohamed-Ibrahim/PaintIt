let history = [[]];
let currentIndex = 0;

const getLatestState = () => {
  return structuredClone(history[currentIndex]);
};

const setLatestState = (latestState) => {
  if (currentIndex < history.length - 1) {
    history.splice(currentIndex + 1);
  }
  currentIndex++;
  history.push(structuredClone(latestState));
};

const undo = (req, res) => {
  if (currentIndex >= 1) {
    currentIndex--;
    return res.send(history[currentIndex]);
  }
  res.send(history[0]);
  res.end();
};

const redo = (req, res) => {
  if (currentIndex < history.length - 1) {
    currentIndex++;
    return res.send(history[currentIndex]);
  }
  res.send(history[history.length - 1]);
  res.end();
};

module.exports = {
  getLatestState,
  setLatestState,
  undo,
  redo,
};
