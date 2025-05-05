import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://nnofklwmewbjuonffqqr.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ub2ZrbHdtZXdianVvbmZmcXFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5MzI3MDgsImV4cCI6MjA2MTUwODcwOH0.ghFSrf5G59cZQxjkwXN1yXfeFbKOXHTHe41rpjCMMQU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
