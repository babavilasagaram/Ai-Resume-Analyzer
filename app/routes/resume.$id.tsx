import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";
import Navbar from "~/components/Navbar";

export default function ResumeResult() {
  const { id } = useParams();
  const { kv } = usePuterStore();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const result = await kv.get(`resume:${id}`);
      if (result) {
        setData(JSON.parse(result));
      }
    }
    load();
  }, [id]);

  if (!data) return <h2>Loading result...</h2>;

  return (
    <main>
      <Navbar />
      <h1>Resume Analysis</h1>

      <p><b>Company:</b> {data.companyName}</p>
      <p><b>Job Title:</b> {data.jobTitle}</p>

      <pre>
        {JSON.stringify(data.feedback, null, 2)}
      </pre>
    </main>
  );
}
