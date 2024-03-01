"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { BeakerIcon } from '@heroicons/react/24/solid';

export default function WelfareWaterCheck() {
  const [showRedDot, setShowRedDot] = useState(false);

  useEffect(() => {
    const checkWelfare = async () => {
      const req = await supabase.auth.getUser();
      const user = req.data.user;

      if (user) {
        console.log('User ID:', user.id); // Log user ID
        let { data, error } = await supabase
          .from('welfare_checks')
          .select('updated_at, interval_seconds')
          .eq('user_id', user.id)
          .eq('type', 'water')
          .single();

        if (error) {
          console.error('Error fetching welfare check:', error);
          return;
        }

        if (data) {
          console.log('Fetched data:', data); // Log fetched data
          const lastUpdate = new Date(data.updated_at).getTime();
          const now = Date.now();
          const passedSeconds = (now - lastUpdate) / 1000;

          if (passedSeconds > data.interval_seconds) {
            setShowRedDot(true);
          } else {
            setShowRedDot(false);
          }
        }
      }
    };

    checkWelfare();
  }, []);

  const updateWelfareCheck = async () => {
    console.log('Button pressed'); // Confirm button press
    const req = await supabase.auth.getUser();
    const user = req.data.user;

    if (user) {
      const { data, error } = await supabase
        .from('welfare_checks')
        .update({ updated_at: new Date().toISOString() }) // Use ISO string for timestamp
        .eq('user_id', user.id)
        .eq('type', 'water');

      if (error) {
        console.error('Error updating welfare check:', error);
      } else {
        console.log('Update successful:', data); // Log successful update
        setShowRedDot(false);
      }
    }
  };

  return (
    <button className="relative" onClick={updateWelfareCheck}>
      {showRedDot && (
        <span className="absolute right-0 top-0 h-2 w-2 bg-red-500 rounded-full"></span>
      )}
      <BeakerIcon className="h-6 w-6" />
    </button>
  );
}
