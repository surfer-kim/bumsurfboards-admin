import {
    createWorkflow,
    WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { sendNotificationStep } from "./steps/send-notification"

type WorkflowInput = {
    subject: string,
    content: string
}

export const sendCustomerServiceNotificationWorkflow = createWorkflow(
    "send-cs-notification",
    ({ subject, content }: WorkflowInput) => {

        const notification = sendNotificationStep([{
            to: process.env.RESEND_CS_EMAIL!,
            channel: "email",
            template: "cs-notification",
            data: {
                subject: subject,
                content: content
            },
        }])

        return new WorkflowResponse(notification)
    }
)