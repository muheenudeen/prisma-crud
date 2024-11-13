import {Router} from 'express'
import { userRouter } from './userRoutes.js'
import { postRouter } from './postRouters.js'
import { commentRouters } from './commentRouters.js'

 const indexRouter=Router()

indexRouter.use('/api/user',userRouter)
indexRouter.use('/api/post',postRouter)
indexRouter.use('/api/comment',commentRouters)

export default indexRouter