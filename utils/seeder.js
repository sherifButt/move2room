const dotenv = require("dotenv").config();
const dbConnect = require("../config/dbConnect");
const rooms = require("../data/rooms.json");
const Room = require("../models/room");

const seedRooms = async (data) => {
   try {
      await Room.deleteMany();
      console.log( "✓ db Rooms Deleted" );
      
      await Room.insertMany(data);
      console.log( `✓ #${ data.length } Rooms Created` );
      
      process.exit();
      
   } catch (err) {
      console.error(
         "❌ Error: Failed to create rooms - ",
         err.message
      );
      process.exit(1);
   }
};

dbConnect();
seedRooms(rooms);