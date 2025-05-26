import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  firstname: string;
  phone: string;
  message: string;
  replyTo: string;
}

export const EmailTemplate = ({
  firstname,
  phone,
  message,
  replyTo,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>New contact from {firstname}</Preview>
    <Body style={styles.body}>
      <Container style={styles.card}>
        <Text style={styles.heading}>📥 Contact From Customer</Text>

        <Section style={styles.section}>
          <Field label="👤 Full Name" value={firstname} />
          <Field label="📞 Phone Number" value={phone} />
          <Field
            label="✉️ Email Address"
            value={
              <a href={`mailto:${replyTo}`} style={styles.link}>
                {replyTo}
              </a>
            }
          />
          <Text style={styles.label}>💬 Message</Text>
          <Text style={styles.message}>{message}</Text>
          <Section style={styles.buttonWrapper}>
            <a href={`mailto:${replyTo}`} style={styles.button}>
              📧 Reply Now
            </a>
          </Section>
        </Section>

        <Hr style={styles.hr} />

        <Text style={styles.footer}>
          {` This email was automatically generated from your website's contact
          form.`}  
        </Text>
      </Container>
    </Body>
  </Html>
);

const Field = ({
  label,
  value,
}: {
  label: string;
  value: string | React.JSX.Element;
}) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </>
);

export default EmailTemplate;

const styles = {
  body: {
    backgroundColor: "#f0f2f5",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    padding: "40px 0",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    margin: "0 auto",
    padding: "48px",
    width: "100%",
    maxWidth: "600px",
    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
    border: "1px solid #e6e8eb",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: "32px",
    textAlign: "center" as const,
  },
  section: {
    paddingBottom: "32px",
  },
  label: {
    fontSize: "14px",
    color: "#555",
    marginTop: "20px",
    marginBottom: "4px",
  },
  value: {
    fontSize: "16px",
    color: "#222",
  },
  message: {
    fontSize: "16px",
    color: "#222",
    marginTop: "8px",
    whiteSpace: "pre-line" as const,
    lineHeight: "1.5",
  },
  hr: {
    borderColor: "#eaeaea",
    margin: "36px 0 24px",
  },
  footer: {
    fontSize: "12px",
    color: "#8898aa",
    textAlign: "center" as const,
    lineHeight: "1.4",
  },
  link: {
    color: "#5F51E8",
    textDecoration: "none",
  },
  buttonWrapper: {
    textAlign: "center" as const,
    marginTop: "32px",
  },
  button: {
    backgroundColor: "#5F51E8",
    borderRadius: "8px",
    color: "#fff",
    display: "inline-block",
    fontSize: "16px",
    fontWeight: "600",
    padding: "14px 28px",
    textDecoration: "none",
    marginTop: "12px",
  },
};
