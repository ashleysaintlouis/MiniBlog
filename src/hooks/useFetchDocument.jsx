import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const loadDocument = async () => {
      if (cancelled) return;

      setLoading(true);
      try {
        const docRef = doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);

        if (!cancelled) {
          setDocument(docSnap.data());
        }
      } catch (error) {
        if (!cancelled) {
          setError(error.message);
        }
      }
      if (!cancelled) {
        setLoading(false);
      }
    };

    loadDocument();

    return () => setCancelled(true);
  }, [docCollection, id, cancelled]);

  return { document, loading, error };
};
