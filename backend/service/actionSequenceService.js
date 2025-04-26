let history = [[]];
let currentIndex = 0;

const getLatestState = () => {
  // console.log("getLatestState");
  // console.log(structuredClone(history[history.length - 1]));
  return history[history.length - 1];
};

const setLatestState = (latestState) => {
  // console.log(1231231231);
  // latestState = req.latestState;
  if (currentIndex < history.length - 1) {
    history.slice(currentIndex + 1, history.length);
  }

  currentIndex++;
  // console.log(latestState);
  history.push(latestState);
  // console.log(`History size ${history.forEach((x) => console.log(x.length))}`);
};

const undo = (req, res) => {
  if (currentIndex >= 1) {
    currentIndex--;
    console.log(history[currentIndex]);
    res.send(history[currentIndex]);
    res.end();
    return;
  }
  res.send(history[0]);
  res.end();
};

const redo = (req, res) => {
  if (currentIndex < history.length - 1) {
    currentIndex++;
    res.send(history[currentIndex]);
    res.end();
    return;
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
