import type {
    SubscriberArgs,
    SubscriberConfig,
} from "@medusajs/framework"
import { sendCustomerServiceNotificationWorkflow } from "../workflows/send-cs-notification"
import { sendOrderConfirmationWorkflow } from "../workflows/send-order-confirmation"

export default async function orderPlacedHandler({
    event: { data },
    container,
}: SubscriberArgs<{ id: string }>) {
    await sendOrderConfirmationWorkflow(container)
        .run({
            input: {
                id: data.id,
            },
        })

    await sendCustomerServiceNotificationWorkflow(container)
        .run({
            input: {
                subject: "Customer Service Notification[Order Confirmation]",
                content: `A new order has been placed. ID: ${data.id}`
            },
        })
}

export const config: SubscriberConfig = {
    event: "order.placed",
}