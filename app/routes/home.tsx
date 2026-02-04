import Navbar from "../components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "./constants";
import ResumeCard from "../components/ResumeCard";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMate" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
  return <main className="min-h-screen w-full bg-[url('/images/bg-main.svg')] bg-cover bg-no-repeat">
      <Navbar />

      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications and Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>
      </section>

    {
      resumes.length > 0 && (
        <div className="resume-section">
            {resumes.map((resume) => (
                  <ResumeCard key={resume.id} resume={resume} />
    ))}
    
    </div>
      )}
    
    </main>
}
