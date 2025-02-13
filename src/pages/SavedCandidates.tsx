import { useEffect, useState } from "react";
import { Candidate } from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    setSavedCandidates(saved);
  }, []);

  if (savedCandidates.length === 0) {
    return <p>No saved candidates.</p>;
  }

  return (
    <div>
      <h2>Saved Candidates</h2>
      {savedCandidates.map((candidate) => (
        <div key={candidate.id}>
          <img src={candidate.avatar_url} alt={candidate.login} width="100" />
          <h3>{candidate.name || candidate.login}</h3>
          <p>Company: {candidate.company || "Not specified"}</p>
          <p>Location: {candidate.location || "Not specified"}</p>
          <a href={candidate.html_url} target="_blank">GitHub Profile</a>
        </div>
      ))}
    </div>
  );
};

export default SavedCandidates;

