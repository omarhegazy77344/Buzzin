import { saveLeadToMongo } from "./mongodb"
import type { LeadSubmission } from "./types"

export interface LeadProvider {
  createLead(submission: LeadSubmission): Promise<string>
}

class MongoLeadProvider implements LeadProvider {
  async createLead(submission: LeadSubmission) {
    return saveLeadToMongo(submission)
  }
}

class HubSpotLeadProvider implements LeadProvider {
  async createLead(_submission: LeadSubmission): Promise<string> {
    throw new Error("HubSpot provider is not enabled yet")
  }
}

export function getLeadProvider(): LeadProvider {
  const provider = process.env.LEAD_STORAGE_PROVIDER || "mongodb"

  if (provider === "hubspot") {
    return new HubSpotLeadProvider()
  }

  return new MongoLeadProvider()
}
