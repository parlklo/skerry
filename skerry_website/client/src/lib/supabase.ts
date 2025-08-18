import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zmpcqjouhspwrlbfouze.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptcGNxam91aHNwd3JsYmZvdXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MTg3NzIsImV4cCI6MjA3MTA5NDc3Mn0.egqy7UlKLkJmmf6HlB2A5F7TGYuwAk9YD_NqumNE0v0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types för våra databas-tabeller
export interface EmailLead {
  id?: string
  email: string
  campaign: string
  source?: string
  created_at?: string
  email_sent_at?: string | null
  form_completed?: boolean
  notes?: string | null
}
