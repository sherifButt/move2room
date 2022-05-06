import Room from "../models/room";

export const allRooms = (req, res) => {
   res.status(200).json({
      success: true,
      message: "All rooms",
   });
};

// @route POST api/rooms
// @desc Create new rooms
// @access Private

export const newRoom = async (req, res) => {
   try {
      const room = await Room.create({});

      res.status(200).json({
         success: true,
         message: "room been created",
         room,
      });
   } catch (err) {
      res.status(500).json({ success: false, message: err.message });
   }
};
