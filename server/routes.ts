import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // In a real application, you would save this to a database
      // For now, we'll just log it and return success
      console.log("Contact form submission:", contactData);
      
      // You could also integrate with email services like SendGrid, Mailgun, etc.
      // await sendContactEmail(contactData);
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
