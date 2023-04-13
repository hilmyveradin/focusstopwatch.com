import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://jqabbaeovhvqgffbekxb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxYWJiYWVvdmh2cWdmZmJla3hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwODQ4NzUsImV4cCI6MTk5NjY2MDg3NX0.nRCn-PzSyqI70U4gdWVoBXUQHoTGr0s6pD8zJLYyVYY"
);
