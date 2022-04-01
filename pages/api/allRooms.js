import nc from 'next-connect'
import { rooms } from '../../controllers/roomAll'
const handler = nc()

handler.get(rooms)

export default handler