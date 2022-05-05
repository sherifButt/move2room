import nc from 'next-connect'
import { rooms } from '../../controllers/roomController'
const handler = nc()

handler.get(rooms)

export default handler