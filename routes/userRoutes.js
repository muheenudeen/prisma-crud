import {Router} from 'express'
import { allusers, createUser, deleteUser, takeOneUser, userUpdates } from '../controller/userController.js'

export const userRouter=Router()

userRouter.post('/',createUser)
userRouter.put('/:id',userUpdates)
userRouter.get('/users',allusers)
userRouter.delete('/:id',deleteUser)
userRouter.get('/:id',takeOneUser)