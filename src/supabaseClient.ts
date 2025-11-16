import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wafzbedmirbjyajpadpw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhZnpiZWRtaXJianlhanBhZHB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNDI2NTksImV4cCI6MjA3ODYxODY1OX0.o6Ex1FEZICDGoHiJvi0VQwqHsDfjr6OTxcA_uas5Hxw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);