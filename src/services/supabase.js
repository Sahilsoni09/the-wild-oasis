import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yddqjopnvyxjcwqpakzb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkZHFqb3Budnl4amN3cXBha3piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMTkwODUsImV4cCI6MjA2Nzg5NTA4NX0.j43TNJU9jLhqH0GFFKzRFEx154BlOiqHrWShsk_5z-8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
