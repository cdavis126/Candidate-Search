import { useEffect, useState } from "react";
import { searchGithub } from "../api/API";
import { Candidate } from "../interfaces/Candidate.interface";

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      setCandidates(data);
    };
    fetchCandidates();
  }, []);

  const saveCandidate = () => {
    if (currentIndex >= candidates.length) return; // No candidate to save

    const saved = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    saved.push(candidates[currentIndex]);
    localStorage.setItem("savedCandidates", JSON.stringify(saved));

    nextCandidate();
  };

  const nextCandidate = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  if (currentIndex >= candidates.length) {
    return <p>No more candidates available.</p>;
  }

  const candidate = candidates[currentIndex];

  return (
    <div>
      <h2>Candidate Search</h2>
      {candidate && (
        <div>
          <img src={candidate.avatar_url} alt={candidate.login} width="100" />
          <h3>{candidate.name || candidate.login}</h3>
          <p>Company: {candidate.company || "Not specified"}</p>
          <p>Location: {candidate.location || "Not specified"}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
          <div>
            <button onClick={saveCandidate}>+</button>
            <button onClick={nextCandidate}>-</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;

