import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kjoutcsaoqibenvvyyni.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqb3V0Y3Nhb3FpYmVudnZ5eW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1NDk1MTQsImV4cCI6MjAyMDEyNTUxNH0.nGRY_4D_DukOm28RVHwl7_0fF-Z_PdX6K--415KE6Qw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
