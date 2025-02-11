

export const fileupload = async (req, res) => {
 try {
    if (req.files.length > 0) {
        return res.status(200).json({status:true,file: req.files,msg : "file upload successful"})
    }else{
        return res.status(200).json({status:false, msg: "no file upload " });
    }
 } catch (error) {
     return {status:false,error:error}
 }
};