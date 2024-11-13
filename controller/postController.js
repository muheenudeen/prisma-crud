import prisma from "../DB/db.config.js";


export const createpost=async (req,res)=>{

    const {user_id, description, title}=req.body


    const newData=await prisma.post.create({
        data:{
           user_id:Number(user_id),
           title,
           description,

        },
    })
   
    res.status(200).json({success:true, message:"post compleet", newData})
}



// export const postUpdates =async (req,res)=>{
//     const userId=req.params.id
//     const {user_id, description, title} =req.body

//     const updateData=await prisma.post.update({
//         where:{
//             id:Number(userId),
//         },
//         data:{
//            title,
//            description,

//         },
//     })
//     res.status(200).json({success:true, message:"post update compleet", updateData})
// }


export const allposts=async (req,res)=>{

    const posts=await prisma.post.findMany({})

    res.status(200).json({success:true, message:posts})
}


export const deletePost= async (req,res)=>{
    const userId=req.params.id

    await prisma.post.delete({
        where:{
            id:Number(userId),
        },
    })
    res.status(200).json({success:true, message:"delete compleete"})

}


export const postData=async (req,res)=>{
    const userId=req.params.id

    const post=await prisma.post.findFirst({
        where:{
            id:Number(userId),
        },
    })
    res.status(200).json({success:true, message:"successful",user})
}