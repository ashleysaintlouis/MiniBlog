import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadDocument() {
      if (cancelled) return;
      setLoading(true);

      setLoading(false);

      try {
        const docRef = await doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);

        setDocument(docSnap.data());
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    }

    loadDocument();
  }, [docCollection, id, cancelled]);

  console.log(document);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { document, loading, error };
};
