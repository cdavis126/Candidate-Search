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
    <div className="table-container">
      <h2>Saved Candidates</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Company</th>
            <th>Location</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>
                <img src={candidate.avatar_url} alt={candidate.login} width="50" />
              </td>
              <td>{candidate.name || candidate.login}</td>
              <td>{candidate.company || "Not specified"}</td>
              <td>{candidate.location || "Not specified"}</td>
              <td>
                <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;



