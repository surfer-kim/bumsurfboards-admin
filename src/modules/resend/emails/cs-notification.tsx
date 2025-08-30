import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Section,
    Tailwind,
    Text
} from "@react-email/components"

type CustomerServiceNotificationEmailProps = {
    subject: string,
    content: string
}

function CustomerServiceNotificationEmailComponent({ subject, content }: CustomerServiceNotificationEmailProps) {
    return (
        <Tailwind>
            <Html className="font-sans bg-gray-100">
                <Head />
                <Body className="bg-white my-10 mx-auto w-full max-w-2xl">
                    {/* Header */}
                    <Section className="bg-[#27272a] text-white px-6 py-4">
                        <Heading className="text-lg font-bold">{subject}</Heading>
                    </Section>

                    {/* Content */}
                    <Container className="p-6">
                        <Text className="text-gray-800 whitespace-pre-line">{content}</Text>
                    </Container>

                    {/* Footer */}
                    <Section className="bg-gray-50 p-6 mt-10">
                        <Text className="text-center text-gray-400 text-xs mt-4">
                            © {new Date().getFullYear()} Bumsurfboards. All rights reserved.
                        </Text>
                    </Section>
                </Body>
            </Html>
        </Tailwind>
    )
}

export const customerServiceNotificationEmail = (props: CustomerServiceNotificationEmailProps) => (
    <CustomerServiceNotificationEmailComponent {...props} />
)