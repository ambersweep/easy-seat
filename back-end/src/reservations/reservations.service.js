const knex = require("../db/connection");
const table = "reservations";

async function read(reservation_id) {
    return knex(table).select("*").where({ reservation_id }).first();
  }

  async function create(reservation) {
    return knex(table)
      .insert(reservation)
      .returning("*")
      .then((created) => created[0]);
  }