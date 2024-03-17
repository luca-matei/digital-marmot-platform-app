import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/lib/types/supabase'
import WeatherCard from "@/app/(app-pages)/dashboard/(weather)/WeatherCard";

export default async function Dashboard() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="flex">
      <WeatherCard />
    </div>
  );
}