import { useState, useEffect } from "react";

export default function useUserId() {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const res = await fetch("/api/userId");
        if (!res.ok) throw new Error("Unauthorized or error fetching userId");

        const data = await res.json();
        setUserId(data.userId);
      } catch (err: any) {
        setError(err.message || "Unknown error");
        setUserId(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserId();
  }, []);

  return { userId, loading, error };
}
