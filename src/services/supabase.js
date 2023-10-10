import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://illxjzdcatupufwbxikq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsbHhqemRjYXR1cHVmd2J4aWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzMjA0OTUsImV4cCI6MjAwODg5NjQ5NX0.Qw--bE0aFkLKUBqc2gKSnlU0C4Pah00pLpNtTjJ05gk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
