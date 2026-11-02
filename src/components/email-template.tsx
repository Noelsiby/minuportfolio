import * as React from "react";
import { config } from "@/data/config";

// Branded "new message" email for the portfolio contact form, in the site's
// midnight-plum and rose-gold palette. Email clients ignore stylesheets and
// most modern CSS, so everything is table-based with inline styles and
// solid-colour fallbacks behind every gradient.

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
  receivedAt?: string;
}

const C = {
  page: "#0f0810",
  card: "#1a0f1c",
  panel: "#241426",
  border: "#3a2232",
  rose: "#e8b4a0",
  mauve: "#c08497",
  champagne: "#f3dcc0",
  ivory: "#f8efe6",
  muted: "#b9a0ab",
  plum: "#2a1428",
};

const SERIF = "Georgia, 'Playfair Display', 'Times New Roman', serif";
const SANS = "'DM Sans', 'Segoe UI', Helvetica, Arial, sans-serif";

const initials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
  receivedAt,
}) => {
  const firstName = config.author.split(" ")[0];
  const replyHref = `mailto:${email}?subject=${encodeURIComponent(
    `Re: your message on my portfolio`
  )}&body=${encodeURIComponent(`Hi ${fullName.split(" ")[0]},\n\n`)}`;
  const preview = `${fullName}: ${message.replace(/\s+/g, " ").slice(0, 90)}`;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />
        <title>New message from your portfolio</title>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: C.page }}>
        {/* inbox preview line, hidden in the email itself */}
        <div
          style={{
            display: "none",
            maxHeight: 0,
            overflow: "hidden",
            opacity: 0,
            color: C.page,
          }}
        >
          {preview}
        </div>

        <table
          role="presentation"
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{ backgroundColor: C.page, padding: "32px 12px" }}
        >
          <tbody>
            <tr>
              <td align="center">
                <table
                  role="presentation"
                  width="100%"
                  cellPadding={0}
                  cellSpacing={0}
                  style={{
                    maxWidth: 600,
                    backgroundColor: C.card,
                    border: `1px solid ${C.border}`,
                    borderRadius: 20,
                    overflow: "hidden",
                  }}
                >
                  <tbody>
                    {/* header band */}
                    <tr>
                      <td
                        style={{
                          backgroundColor: "#4a2140",
                          backgroundImage:
                            "linear-gradient(135deg, #2a1428 0%, #6b3355 55%, #c98d86 100%)",
                          padding: "36px 36px 30px",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontFamily: SANS,
                            fontSize: 11,
                            letterSpacing: "0.32em",
                            textTransform: "uppercase",
                            color: C.champagne,
                          }}
                        >
                          ✦ Portfolio · New message
                        </p>
                        <h1
                          style={{
                            margin: "14px 0 0",
                            fontFamily: SERIF,
                            fontWeight: 400,
                            fontSize: 30,
                            lineHeight: 1.2,
                            color: C.ivory,
                          }}
                        >
                          Hi {firstName},{" "}
                          <span style={{ fontStyle: "italic", color: C.champagne }}>
                            someone wants to connect.
                          </span>
                        </h1>
                      </td>
                    </tr>

                    {/* rose-gold hairline */}
                    <tr>
                      <td
                        style={{
                          height: 3,
                          lineHeight: "3px",
                          fontSize: 0,
                          backgroundColor: C.rose,
                          backgroundImage: `linear-gradient(90deg, ${C.champagne}, ${C.rose}, ${C.mauve}, ${C.champagne})`,
                        }}
                      >
                        &nbsp;
                      </td>
                    </tr>

                    {/* sender */}
                    <tr>
                      <td style={{ padding: "30px 36px 8px" }}>
                        <table role="presentation" cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td
                                width={52}
                                height={52}
                                align="center"
                                valign="middle"
                                style={{
                                  width: 52,
                                  height: 52,
                                  borderRadius: 26,
                                  backgroundColor: C.rose,
                                  fontFamily: SERIF,
                                  fontSize: 20,
                                  fontWeight: 700,
                                  color: C.plum,
                                }}
                              >
                                {initials(fullName)}
                              </td>
                              <td style={{ paddingLeft: 16 }}>
                                <p
                                  style={{
                                    margin: 0,
                                    fontFamily: SERIF,
                                    fontSize: 20,
                                    color: C.ivory,
                                  }}
                                >
                                  {fullName}
                                </p>
                                <a
                                  href={`mailto:${email}`}
                                  style={{
                                    fontFamily: SANS,
                                    fontSize: 14,
                                    color: C.rose,
                                    textDecoration: "none",
                                  }}
                                >
                                  {email}
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* message */}
                    <tr>
                      <td style={{ padding: "20px 36px 8px" }}>
                        <p
                          style={{
                            margin: "0 0 10px",
                            fontFamily: SANS,
                            fontSize: 11,
                            letterSpacing: "0.24em",
                            textTransform: "uppercase",
                            color: C.muted,
                          }}
                        >
                          Their message
                        </p>
                        <table
                          role="presentation"
                          width="100%"
                          cellPadding={0}
                          cellSpacing={0}
                          style={{
                            backgroundColor: C.panel,
                            borderLeft: `3px solid ${C.rose}`,
                            borderRadius: 12,
                          }}
                        >
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  padding: "20px 22px",
                                  fontFamily: SANS,
                                  fontSize: 15,
                                  lineHeight: 1.7,
                                  color: C.ivory,
                                  whiteSpace: "pre-wrap",
                                  wordBreak: "break-word",
                                }}
                              >
                                <span
                                  style={{
                                    fontFamily: SERIF,
                                    fontSize: 34,
                                    lineHeight: "10px",
                                    color: C.rose,
                                    verticalAlign: "-12px",
                                    marginRight: 4,
                                  }}
                                >
                                  “
                                </span>
                                {message}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* reply button */}
                    <tr>
                      <td style={{ padding: "26px 36px 10px" }}>
                        <table role="presentation" cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td
                                style={{
                                  borderRadius: 999,
                                  backgroundColor: C.rose,
                                  backgroundImage: `linear-gradient(120deg, ${C.champagne}, ${C.rose})`,
                                }}
                              >
                                <a
                                  href={replyHref}
                                  style={{
                                    display: "inline-block",
                                    padding: "13px 28px",
                                    fontFamily: SANS,
                                    fontSize: 15,
                                    fontWeight: 700,
                                    color: C.plum,
                                    textDecoration: "none",
                                  }}
                                >
                                  Reply to {fullName.split(" ")[0]} →
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <p
                          style={{
                            margin: "12px 0 0",
                            fontFamily: SANS,
                            fontSize: 12,
                            color: C.muted,
                          }}
                        >
                          Or just hit reply — it goes straight to {email}.
                        </p>
                      </td>
                    </tr>

                    {/* details */}
                    {receivedAt && (
                      <tr>
                        <td style={{ padding: "18px 36px 0" }}>
                          <table
                            role="presentation"
                            width="100%"
                            cellPadding={0}
                            cellSpacing={0}
                            style={{ borderTop: `1px solid ${C.border}` }}
                          >
                            <tbody>
                              <tr>
                                <td
                                  style={{
                                    paddingTop: 16,
                                    fontFamily: SANS,
                                    fontSize: 12,
                                    color: C.muted,
                                  }}
                                >
                                  Received
                                </td>
                                <td
                                  align="right"
                                  style={{
                                    paddingTop: 16,
                                    fontFamily: SANS,
                                    fontSize: 12,
                                    color: C.champagne,
                                  }}
                                >
                                  {receivedAt}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    )}

                    {/* footer */}
                    <tr>
                      <td style={{ padding: "30px 36px 34px" }} align="center">
                        <p
                          style={{
                            margin: 0,
                            fontFamily: SERIF,
                            fontSize: 18,
                            color: C.ivory,
                          }}
                        >
                          {firstName}{" "}
                          <span style={{ fontStyle: "italic", color: C.rose }}>
                            {config.author.split(" ")[1]}
                          </span>
                        </p>
                        <p
                          style={{
                            margin: "6px 0 0",
                            fontFamily: SANS,
                            fontSize: 12,
                            color: C.muted,
                          }}
                        >
                          Data Analyst ✦ BI Analyst ·{" "}
                          <a
                            href={config.site}
                            style={{ color: C.rose, textDecoration: "none" }}
                          >
                            view portfolio
                          </a>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p
                  style={{
                    margin: "18px 0 0",
                    fontFamily: SANS,
                    fontSize: 11,
                    color: "#6f5a66",
                  }}
                >
                  Sent automatically from the contact form on your portfolio.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
};
