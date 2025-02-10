import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const SUPABASE_URL = "https://iluuzburwyhjbrpihdte.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsdXV6YnVyd3loamJycGloZHRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMDIwMzcsImV4cCI6MjA1NDY3ODAzN30.fPHwRbs40W3ryeWC0tXc53oo7Kq7lNGusPPh85orASY";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
