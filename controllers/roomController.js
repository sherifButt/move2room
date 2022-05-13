import catchAsyncErrors from '../middlewares/catchAsyncErrors'
import Room from '../models/room'
import APIFeatures from '../utils/apiFeatures'
import ErrorHandler from '../utils/errorHandler'
/**
 * @desc Get all rooms and apply filter
 * @route GET api/rooms
 * @access Public
 */
export const allRooms = catchAsyncErrors(
   async ({ query }, res, next) => {
      const resPerPage = query.limit || 4
      const roomsCount = await Room.countDocuments()

      const apiFeatures = new APIFeatures(Room.find(), query)
         .search()
         .pagination(resPerPage)
         .filter()
      let rooms = await apiFeatures.query
      let filteredRoomsCount = rooms.length

      // if (rooms.length <= 0)
      //    return next(
      //       new ErrorHandler('No rooms found', 201, 'ERR_DATA')
      //    )

      res.status(200).json({
         success: true,
         roomsCount,
         resPerPage,
         filteredRoomsCount,
         // message: `Total ${roomsCount} rooms called successfully!`,
         rooms,
      })
   }
)

/**
 * @route GET api/rooms/[id]
 * @desc GET single room data
 * @access Public
 */
export const getSingleRoom = catchAsyncErrors(
   async ({ query: { id } }, res, next) => {
      const room = await Room.findById(id)
      if (!room)
         return next(
            new ErrorHandler(
               `Room not found with this ID ${id}`,
               404,
               'ERR_DATA'
            )
         )

      res.status(200).json({
         success: true,
         count: room.length,
         message: `Room #${id} has been found`,
         room,
      })
   }
)

/**
 * @method POST
 * @route api/rooms
 * @desc Create new rooms
 * @access Private
 */
export const newRoom = catchAsyncErrors(
   async ({ body }, res, next) => {
      const room = await Room.findOne({ name: body.name })
      if (room)
         return next(
            new ErrorHandler(
               'Room already exists (change name)',
               400,
               'ERR_DATA'
            )
         )

      const newRoom = await Room.create(body)

      res.status(200).json({
         success: true,
         message: `New room ${newRoom.name} been created successfully ✓ `,
         room: newRoom,
      })
   }
)

/**
 * @method PUT
 * @route api/rooms
 * @desc Update room information using ID
 * access Private
 */
export const updateRoom = catchAsyncErrors(
   async ({ body, query: { id } }, res, next) => {
      let room = await Room.findById(id)

      if (!room)
         return next(
            new ErrorHandler(
               `Room not found with Id ${id}`,
               404,
               'ERR_DATA'
            )
         )

      room = await Room.findByIdAndUpdate(id, body, {
         new: true,
         runValidators: true,
         useFindAndModify: false,
      })

      res.status(200).json({
         success: true,
         message: `Room ID:${id} updated successfully`,
         room,
      })
   }
)

/**
 * @method DELETE
 * @route api/rooms
 * @desc delete room using ID
 * access Private
 */
export const deleteRoom = catchAsyncErrors(
   async ({ query: { id } }, res, next) => {
      const room = await Room.findById(id)

      if (!room)
         return next(
            new ErrorHandler(
               `No room found with Id ${id}`,
               404,
               'ERR_DATA'
            )
         )

      await Room.remove()

      res.status(200).json({
         success: true,
         message: `Room [${room.name}], ID:${id} deleted successfully`,
      })
   }
)
