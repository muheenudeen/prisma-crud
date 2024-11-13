import prisma from "../DB/db.config.js";


export const createUser=async (req,res)=>{

    const {name, email, password}=req.body

    const emailExist=await prisma.user.findUnique({
        where:{
            email:email,
        },
    })
    if(emailExist){
        res.status(402).json({success:false, message:"alredy used"})
    }

    const newData=await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password,

        },
    })
   
    res.status(200).json({success:true, message:"login compleet", newData})
}



export const userUpdates =async (req,res)=>{
    const userId=req.params.id
    const {name, email, password} =req.body

    const updateData=await prisma.user.update({
        where:{
            id:Number(userId),
        },
        data:{
            name,
            email,
            password,
        },
    })
    res.status(200).json({success:true, message:"update compleet", updateData})
}


export const allusers=async (req,res)=>{

    const users=await prisma.user.findMany({
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

    res.status(200).json({success:true, message:users})
}


export const deleteUser= async (req,res)=>{
    const userId=req.params.id

    const user=await prisma.user.delete({
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
