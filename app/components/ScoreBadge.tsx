interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge = ({ score }: ScoreBadgeProps) => {
  let bgColor = "";
  let text = "";

  if (score >= 80) {
    bgColor = "bg-green-100 text-green-700";
    text = "Excellent";
  } else if (score >= 60) {
    bgColor = "bg-yellow-100 text-yellow-700";
    text = "Good";
  } else {
    bgColor = "bg-red-100 text-red-700";
    text = "Needs Work";
  }

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${bgColor}`}
    >
      {text} ({score})
    </span>
  );
};

export default ScoreBadge;
