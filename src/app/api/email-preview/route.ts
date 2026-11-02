import { render } from "@react-email/render";
import { EmailTemplate } from "@/components/email-template";

// Development-only preview of the contact email: open /api/email-preview
// while running `npm run dev`. Returns 404 on the deployed site.
export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return new Response("Not found", { status: 404 });
  }
  const html = await render(
    EmailTemplate({
      fullName: "Ananya Rao",
      email: "ananya.rao@example.com",
      message:
        "Hi Minu! I came across your churn prediction project and loved the Power BI dashboard.\n\nWe're hiring a junior Data Analyst at our analytics team in Kochi — would you be open to a quick call this week?",
      receivedAt: new Intl.DateTimeFormat("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
      }).format(new Date()),
    }) as React.ReactElement
  );
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
