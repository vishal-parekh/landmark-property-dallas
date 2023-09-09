import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,

} from "@react-email/components";
import React from "react";

interface EmailProps {
  senderName: string;
  senderPhoneNumber: string;
  senderHomeAddress: string;
}
export const ContactFormEmail = ({
  senderName,
  senderPhoneNumber,
  senderHomeAddress,
}: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Lead!</Preview>
      <Body >
        <Container>
          <Heading>Welcome {senderName}</Heading>
          <Heading>Phone Number: {senderPhoneNumber}</Heading>
          <Heading>Address: {senderHomeAddress}</Heading>
        </Container>
      </Body>
    </Html>
  );
};