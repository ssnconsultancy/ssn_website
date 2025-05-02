import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    // Nothing to seed for now - tables will be created automatically
    // when needed through the drizzle schema
    
    console.log("Database setup complete.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
