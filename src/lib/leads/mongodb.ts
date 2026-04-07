import { MongoClient } from "mongodb"

import type { LeadSubmission } from "./types"

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB_NAME || "buzzin"

let clientPromise: Promise<MongoClient> | null = null

async function getClient() {
  if (!uri) {
    throw new Error("Missing MONGODB_URI")
  }

  if (!clientPromise) {
    clientPromise = MongoClient.connect(uri)
  }

  return clientPromise
}

export async function saveLeadToMongo(submission: LeadSubmission) {
  const client = await getClient()
  const db = client.db(dbName)

  const payload = {
    ...submission,
    createdAt: submission.createdAt ?? new Date(),
  }

  const result = await db.collection("leads").insertOne(payload)
  return result.insertedId.toString()
}
