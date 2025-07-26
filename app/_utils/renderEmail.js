//rendering the email component to server side,  bcs, nodemailerwork with node.js

import { render } from "@react-email/components";
import EmailTemplate from "../_components/email-template";

export const getEmailTemplateHtml = async(response)=>{
     return render(<EmailTemplate response = {response}/>)
}


//sending the all data-response to email template and getting from route nodemailer