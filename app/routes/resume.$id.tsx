import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";
import Navbar from "~/components/Navbar";

export const meta = () => ([
    {title:"ResuMate | Review" },
    { name: 'description', content: "Detailed overview of your resume"},
]);

export default function ResumeResult() {
  const { id } = useParams();
  const { kv } = usePuterStore();
  const [resumeUrl , setResumeUrl] = useState('');
  const [imageUrl , setImageUrl] = useState('');
  const [feedback , setFeedback] = useState('');
  const { auth , isLoading ,fs } = usePuterStore()
  const navigate = useNavigate();

  useEffect(() => {
    const loadResume = async () => {
      const resume = await kv.get(`resume:${id}`);
      if(!resume) return;
      const data = JSON.parse(resume)

      const resumeBlob = await fs.read(data.resumepath);
      if(!resumeBlob) return;

      const pdfBlob = new Blob([resumeBlob], { type: 'application/pdf' });
      const resumeUrl = URL.createObjectURL(pdfBlob);
      setResumeUrl(resumeUrl);

      const imageBlog = await fs.read(data.imagePath);
      if(!imageBlog) return;

      const imageBlob = new Blob([imageBlog]);
      const imageUrl = URL.createObjectURL(imageBlob);

      setImageUrl(imageUrl);

      setFeedback(data.feedback);
      console.log({resumeUrl, imageUrl , feedback: data.feedback});

    };

    loadResume();
  }, [id]);




  return (
    <main className="!pt-0">
      <nav className="resume-nav">
        <Link to ="/" className="back-button">
          <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5" />
          <span className=" text-grey-800 text-sm font-semibold">Back to Homepage</span>
        </Link>
      </nav>
      <div className="flex flex-row w-full max-lg:flex-col-reverse">
        <section className="feedback-section bg-[url('/images/bg-small.svg')] bg-cover h-[100vh] sticky top-0 items-center justify-center">
            {imageUrl && resumeUrl && (
              <div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-fit">
                <a>
                  <img 
                   src={imageUrl}
                   className="w-full h-full object-contain rounded-2xl"
                   title="resume"
                  />
                </a>
              </div>
            )}
        </section>
      </div>
    </main>
  )
}
