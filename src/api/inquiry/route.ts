import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { sendCustomerServiceNotificationWorkflow } from "../../workflows/send-cs-notification";
import { sendInquiryConfirmationWorkflow } from "../../workflows/send-inquiry-confirmation";

type InquiryRequest = {
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string
}

export async function POST(req: MedusaRequest<InquiryRequest>, res: MedusaResponse) {

    await sendInquiryConfirmationWorkflow()
        .run({
            input: {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                subject: req.body.subject,
                message: req.body.message,
            },
        })
    await sendCustomerServiceNotificationWorkflow()
        .run({
            input: {
                subject: "Customer Service Notification[Customer Inquiry]",
                content: JSON.stringify(req.body, null, "\t")
            },
        })

    res.json({ status: "ok", emitted: true })
}