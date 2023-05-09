const statesData = require("../model/statesData.json");
// FETCH STATES
function fetchStates(req, res, next) {
  const stjson = JSON.stringify(statesData);
  const stob = JSON.parse(stjson);
  req.states = stob;
  req.state = stob.find((state) => state.code === req.code);
  next();
}
// VERIFY STATE
async function verifyStates(req, res, next) {
  const stateCodes = statesData.map((state) => state.code);
  let c = req.params.state;
  let i = stateCodes.indexOf(c.toUpperCase());

  if (i < 0) {
    res.json({
      message: "Invalid state abbreviation parameter",
    });

  } 
  else if (i >= 0)
  {
    req.code = stateCodes[i];
    next(); 
  }
}

module.exports = { 
  verifyStates,
  fetchStates,
};
