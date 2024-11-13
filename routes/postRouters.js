import {Router} from 'express'
import { allposts, createpost, deletePost, postData } from '../controller/postController.js'

export const postRouter=Router()

postRouter.post('/',createpost)
// postRouter.put('/:id',userUpdates)
postRouter.get('/',allposts)
postRouter.delete('/:id',deletePost)
postRouter.get('/:id',postData)