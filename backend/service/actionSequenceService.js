let history = [[]];
let currentIndex = 0;

const getLatestState = () => {
  return history[history.length - 1];
};

const setLatestState = (req, res) => {
  console.log(1231231231);
  latestState = req.latestState;
  if (currentIndex < history.length - 1) {
    history.slice(currentIndex + 1, history.size());
  }

  currentIndex++;

  history.push(latestState);
  console.log(history);
};

const undo = (req, res) => {
  if (currentIndex >= 1) {
    currentIndex--;
    res.send(history[currentIndex]);
    res.end();
  }

  res.send(history[0]);
  res.end();
};

const redo = (req, res) => {
  if (currentIndex < history.length - 1) {
    currentIndex++;
    res.send(history[currentIndex]);
    res.end();
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
