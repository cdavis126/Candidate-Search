# 📌 Candidate Search  
A streamlined tool for discovering and shortlisting potential candidates using **GitHub's public user API**.

## 🚀 Deployment  
**Live App:** [🔗 Visit Candidate Search](https://candidate-search-2lzo.onrender.com)  

## 📖 About the App  
**Candidate Search** is designed to help users **find, review, and shortlist GitHub users**. The app pulls **random GitHub profiles**, allowing users to:  

- 📌 **Browse GitHub user profiles** (name, company, location, and avatar).  
- ✅ **Accept (`+`)** a candidate to save them to a shortlist.  
- ❌ **Skip (`-`)** to move on to the next profile.  
- 📂 **View the Saved Candidates list** at any time.  

## 🚀 Features
✔ **Fetch GitHub User Data** – Displays public user profiles.  
✔ **Save Candidates** – Store accepted candidates in **localStorage**.  
✔ **Skip Candidates** – Move to the next profile instantly.  
✔ **View Saved Candidates** – Review shortlisted profiles.  
✔ **Responsive UI** – Styled for **desktop and mobile** usage.  

## 🎯 How It Works
1️⃣ **Start on the homepage (`/`)** – A random GitHub user is displayed.  
2️⃣ **Click `+` to save** – Adds the profile to your **Saved Candidates**.  
3️⃣ **Click `-` to skip** – Moves to the next profile.  
4️⃣ **Go to `/SavedCandidates`** – View and manage your saved candidates.  

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Vite  
- **API:** GitHub REST API  
- **State Management:** React Hooks (`useState`, `useEffect`)  
- **Storage:** LocalStorage (persists saved candidates)  
- **Deployment:** Render  


### To run locally:  
``sh
git clone https://github.com/YOUR_USERNAME/Candidate-Search.git
cd Candidate-Search
npm install
npm run dev

## 📌 Environment Variables
To enable GitHub API access, create a .env file in the root directory:
VITE_GITHUB_TOKEN=your_personal_access_token_here

Then restart the app:
npm run dev

## 📄 License
This project is open-source under the MIT License.
💡 Built with TypeScript & React. 🚀


