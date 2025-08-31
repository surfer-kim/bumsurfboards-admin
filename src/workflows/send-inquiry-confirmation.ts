import {
    createWorkflow,
    WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { sendNotificationStep } from "./steps/send-notification"

type WorkflowInput = {
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string
}

export const sendInquiryConfirmationWorkflow = createWorkflow(
    "send-inquiry-confirmation",
    ({ name, email, phone, subject, message }: WorkflowInput) => {

        const notification = sendNotificationStep([{
            to: process.env.RESEND_CS_EMAIL!,
            channel: "email",
            template: "inquiry-confirmation",
            data: {
                name,
                email,
                phone,
                subject,
                message
            },
        }])

        return new WorkflowResponse(notification)
    }
)