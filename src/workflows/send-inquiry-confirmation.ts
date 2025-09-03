import {
    createWorkflow,
    WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { sendNotificationStep } from "./steps/send-notification"

type WorkflowInput = {
    name: string,
    email: string,
}

export const sendInquiryConfirmationWorkflow = createWorkflow(
    "send-inquiry-confirmation",
    ({ name, email }: WorkflowInput) => {

        const notification = sendNotificationStep([{
            to: email,
            channel: "email",
            template: "inquiry-confirmation",
            data: {
                name,
            },
        }])

        return new WorkflowResponse(notification)
    }
)