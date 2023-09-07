const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight
  };

  async function addToFlight(req, res) {
    const flight = await Flight.findById(req.params.id);
    flight.cast.push(req.body.ticketId);
    await flight.save();
    res.redirect(`/flights/${flight._id}`);
  }

  async function newTicket(req, res) {
    const tickets = await Ticket.find({}).sort('flight');
    res.render('tickets/new', { title: 'Add Tickets', tickets });
  }

