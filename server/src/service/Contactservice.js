
import ContactModel from "../model/ContactModel.js";

export const contactService = async (req) => {
  try {
    let reqbody = req.body;
 let data = await ContactModel.create(reqbody);
   

    return { status: true, data: data, msg: "message sent successfully" };
  } catch (error) {
    return { status: false, error: error.toString() };
  }
};
