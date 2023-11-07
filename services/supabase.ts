import { SUPABASE_CONFIG } from '@/const/app-const'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
	'https://esvelufzuzhhmsqjiior.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzdmVsdWZ6dXpoaG1zcWppaW9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzNzE4MjEsImV4cCI6MjAwMTk0NzgyMX0.IA_ZL0eUeooq2RUZ1Lix8YEa8dTNv7jpSL-a30oKygQ'
)
