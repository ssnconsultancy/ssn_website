import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { contactSubmissions, contactSubmissionSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate form data
      const validatedData = contactSubmissionSchema.parse({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
      });
      
      // Insert submission into database
      const [newSubmission] = await db.insert(contactSubmissions)
        .values(validatedData)
        .returning();
      
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        submission: newSubmission
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ success: false, errors: error.errors });
      }
      console.error("Error processing contact form:", error);
      res.status(500).json({ success: false, message: "Server error processing your request" });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
