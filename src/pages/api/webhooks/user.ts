import { IncomingHttpHeaders } from "http";
import type { NextApiRequest, NextApiResponse } from "next";
import { Webhook, WebhookRequiredHeaders } from "svix";
import { buffer } from "micro";
import { prisma } from "~/server/db";

// Disable the bodyParser so we can access the raw
// request body for verification.
export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookSecret: string = process.env.WEBHOOK_SECRET || "";

export default async function handler(
  req: NextApiRequestWithSvixRequiredHeaders,
  res: NextApiResponse
) {
  // Verify the webhook signature
  // See https://docs.svix.com/receiving/verifying-payloads/how
  const payload = (await buffer(req)).toString();
  const eventData = req.body;
  const headers = req.headers;
  const heads = {
    "svix-id": headers["svix-id"],
    "svix-signature": headers["svix-signature"],
    "svix-timestamp": headers["svix-timestamp"],
  }
  const wh = new Webhook(webhookSecret);
  // let evt: Event | null = null;
  // try {
  //   evt = wh.verify(
  //     JSON.stringify(payload),
  //     heads as IncomingHttpHeaders & WebhookRequiredHeaders
  //   ) as Event;
  // } catch (_) {
  //   return res.status(400).json({});
  // }

  // Handle the webhook
  const eventType: EventType = eventData.type;
  if (eventType === "user.created" || eventType === "user.updated") {
    console.log(`Received ${eventType} event`);
    const { id, ...attributes } = eventData.data;
    await prisma.user.upsert({
      where: { clerkUserId: id as string},
      create: {
        clerkUserId: id as string,
        // Set other fields from evt.data if needed
      },
      update: {
        // Update other fields from evt.data if needed
      },
    });
  }

  res.json({});
}

type NextApiRequestWithSvixRequiredHeaders = NextApiRequest & {
  headers: IncomingHttpHeaders & WebhookRequiredHeaders;
};

// Generic (and naive) way for the Clerk event
// payload type.
type Event = {
  data: Record<string, string | number>;
  object: "event";
  type: EventType;
};

type EventType = "user.created" | "user.updated" | "*";