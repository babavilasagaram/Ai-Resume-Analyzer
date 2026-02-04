import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({ resume :{ id , companyName ,jobTitle , feedback , imagePath }}: { resume: Resume}) => {
  return (
      <Link
  to={`/resume/${id}`}
  className="resume-card relative animate-in fade-in duration-1000"
>
  {/* ScoreCircle */}
  <div className="absolute top-6 right-6 z-10">
  <ScoreCircle score={feedback.overallScore} />
   </div>

  {/* Header */}
  <div className="flex flex-col gap-2">
    <h2 className="!text-black font-bold break-words">
      {companyName}
    </h2>
    <h3 className="text-lg break-words text-grey-500">
      {jobTitle}
    </h3>
  </div>

  {/* Image */}
  <div className="w-full flex items-center justify-center">
  <img
    src={imagePath}
    alt="resume"
    className="w-full h-[360px] object-cover object-top rounded-xl"
  />
</div>
</Link>

  )
}

export default ResumeCard