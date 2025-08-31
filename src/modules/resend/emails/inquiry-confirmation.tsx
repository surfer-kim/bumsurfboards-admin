import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Tailwind,
  Text
} from "@react-email/components"

type InquiryConfirmationEmailProps = {
  name: string
}

function InquiryConfirmationEmailComponent({ name }: InquiryConfirmationEmailProps) {

  return (
    <Tailwind>
      <Html className="font-sans bg-gray-100">
        <Head />
        <Preview>Your inquiry has been submitted</Preview>
        <Body className="bg-white my-10 mx-auto w-full max-w-2xl">
          {/* Header */}
          <Section className="bg-[#27272a] text-white px-6 py-4">
            <Heading className="text-lg font-bold">Inquiry Confirmation</Heading>
          </Section>

          {/* Content */}
          <Container className="p-6">
            <Heading className="text-2xl font-bold text-gray-800 mb-4">Thank you, {name}!</Heading>
            <Text className="text-gray-700 mb-4">We've received your inquiry and our support team will get back to you shortly.</Text>
            <Text className="text-gray-700">Please allow 1-2 business days for a response.</Text>
          </Container>

          {/* Footer */}
          <Section className="bg-gray-50 p-6 mt-10">
            <Text className="text-center text-gray-500 text-sm">
              If you have any questions, reply to this email or contact our support team at {process.env.RESEND_CS_EMAIL}.
            </Text>
            <Text className="text-center text-gray-400 text-xs mt-4">
              © {new Date().getFullYear()} Bumsurfboards. All rights reserved.
            </Text>
          </Section>
        </Body>
      </Html>
    </Tailwind>
  )
}

export const inquiryConfirmationEmail = (props: InquiryConfirmationEmailProps) => (
  <InquiryConfirmationEmailComponent {...props} />
)