import {Router} from 'express'
import { allcomments, commentUpdates, createcomment, deletecomment } from '../controller/commentController.js'
import { takeOneUser } from '../controller/userController.js'

export const commentRouters = Router()

commentRouters.post('/',createcomment)
commentRouters.get('/',allcomments)
commentRouters.put('/:id',commentUpdates)
commentRouters.delete('/:id',deletecomment)
commentRouters.get('/:id',takeOneUser)