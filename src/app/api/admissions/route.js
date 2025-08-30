import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(7).max(20),
  email: z.string().email().optional().or(z.literal("")),
  preferredCity: z.enum(["Trivandrum","Kochi","Calicut","Thrissur","Kottayam"]),
  ageGroup: z.enum(["Kids (3–12)","Teens (13–17)","Adults (18+)"]),
  goals: z.string().min(10),
  howHeard: z.string().optional().or(z.literal("")),
  isParentGuardian: z.union([z.literal("on"), z.literal("true"), z.literal("false"), z.literal("")]).optional(),
  consent: z.union([z.literal("on"), z.literal("true")]),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const payload = {
      source: "fashion-zoom-next",
      receivedAt: new Date().toISOString(),
      ...data,
    };

    // Optional: forward to external webhook if configured
    const webhook = process.env.ADMISSIONS_WEBHOOK_URL;
    if (webhook) {
      const isSlack = /hooks\.slack\.com/.test(webhook);
      const headers = { "Content-Type": "application/json" };
      const body = isSlack
        ? JSON.stringify({
            text: `New Admissions Lead: *${data.fullName}*\n• Phone: ${data.phone}\n• Email: ${data.email || "—"}\n• City: ${data.preferredCity}\n• Age group: ${data.ageGroup}\n• Heard via: ${data.howHeard || "—"}\n• Parent/Guardian: ${data.isParentGuardian ? "Yes" : "No"}\n• Goals: ${data.goals}`,
          })
        : JSON.stringify(payload);
      await fetch(webhook, { method: "POST", headers, body });
    } else {
      // Fallback: log to server output in Vercel logs
      console.log("Admissions submission", payload);
    }

    return Response.json({ ok: true });
  } catch (err) {
    const message = err?.message || "Invalid request";
    return Response.json({ ok: false, error: message }, { status: 400 });
  }
}
