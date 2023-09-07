const Flight = require("../models/flight");



module.exports = {
  index,
  show,
  new: newFlight,
  create,
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render('flights/index', { flights });
}

async function show(req, res){
  const flight = await Flight.findById(req.params.id);
  res.render('flights/show', {
    title: "Flight Details",
    flight })
}



async function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing;

  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
  try {
    await Flight.create(req.body);
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
    res.render("flights/new");
  }
}

function newFlight(req, res) {
  res.render("flights/new");
}
