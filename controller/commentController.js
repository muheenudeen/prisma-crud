import prisma from "../DB/db.config.js";


export const createcomment=async (req,res)=>{

    const {user_id, post_id, comment }=req.body

  
    
    const newData=await prisma.comment.create({
        data:{
            user_id :Number(user_id),
            post_id_id:Number(post_id),
            comment

        },
    })
   
    res.status(200).json({success:true, message:" comment successful", newData})
}



export const commentUpdates =async (req,res)=>{
    const userId=req.params.id
    const {user_id, post_id, comment} =req.body

    const updateData=await prisma.comment.update({
        where:{
            id:Number(userId),
        },
        data:{
           comment_count:{
            increment :1
           }
        },
    })
    res.status(200).json({success:true, message:"update comment", updateData})
}


export const allcomments=async (req,res)=>{

    const comment=await prisma.comment.findMany({
        include :{
            // post :true
            post: {
                select:{
                    title:true,
                    coment_count: true,
                },
            },
        }, 
    })

    res.status(200).json({success:true, message:comment})
}


export const deletecomment= async (req,res)=>{
    const userId=req.params.id

  await prisma.comment.delete({
        where:{
            id:Number(userId),
        },
    })
    res.status(200).json({success:true, message:"delete compleete"})

}


export const takeOneUser = async (req, res) => {
    const userId = Number(req.params.id);

    // Check if userId is a valid number
    if (isNaN(userId)) {
        return res.status(400).json({ success: false, message: "Invalid user ID" });
    }

    try {
        const user = await prisma.user.findFirst({
            where: { id: userId },

        });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "Successful", user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};
