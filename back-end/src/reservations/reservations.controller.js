/**
 * List handler for reservation resources
 */
async function list(req, res) {
  res.json({
    data: [],
  });
}

function read(req, res) {
  res.json({data: res.locals.reservation})
}

module.exports = {
  list,
  read,
};
