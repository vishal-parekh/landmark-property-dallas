import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import { code, container, footer, h1, link, main, text } from "./styled";

interface EmailProps {
  senderName: string;
  senderPhoneNumber: string;
  senderHomeAddress: string;
}

export const NewLeadEmail = ({
  senderName,
  senderPhoneNumber,
  senderHomeAddress,
}: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Home Seller Lead!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Owner Details: </Heading>
          <Text style={{ ...text, marginBottom: "14px" }}>Home Address:</Text>
          <code style={code}>{senderHomeAddress}</code>
          <Text style={{ ...text, marginBottom: "14px" }}>
            Owner Name & Phone Number:
          </Text>
          <code style={code}>{`${senderName}: ${senderPhoneNumber}`}</code>
          <Text
            style={{
              ...text,
              color: "#ababab",
              marginTop: "14px",
              marginBottom: "16px",
            }}
          >
            Hit reply in email client to reply to home owner.
          </Text>
          <Img
            src={
              "https://landmarkpropertydallas.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoImg.500d2c75.png&w=640&q=75"
            }
            width="250"
            height="65"
            alt="Landmark Property Dallas Logo"
          />
          <Text style={footer}>
            <Link
              href="https://landmarkpropertydallas.com"
              target="_blank"
              style={{ ...link, color: "#898989" }}
            >
              Landmarkpropertydallas.com
            </Link>
            , We Buy Houses Fast!
            <br />
            Sell to us for a fair, hassle-free cash offer.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};
