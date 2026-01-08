//import React from 'react'; 

//const Home = () => {
  //  return (
   //     <div>
    //        <h1>This is the Home page</h1>
      //      <p>This is where the user will interact with other users.</p>
      //  </div>
  //  );
//};

import { useState } from "react";

function Home() {
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "Sample Song",
      artist: "Test Artist",
      caption: "This song makes me feel like…",
      likes: 100,
      comments: []
    }
  ]);

  const [openCommentsId, setOpenCommentsId] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [playingId, setPlayingId] = useState(null);

  const toggleComments = (id) => {
    setOpenCommentsId(prev => (prev === id ? null : id));
  };

  const handleLike = (id) => {
    setSongs(prev =>
      prev.map(song =>
        song.id === id
          ? { ...song, likes: song.likes + 1 }
          : song
      )
    );
  };

  const addComment = (id) => {
    if (!commentText.trim()) return;

    setSongs(prev =>
      prev.map(song =>
        song.id === id
          ? { ...song, comments: [...song.comments, commentText] }
          : song
      )
    );

    setCommentText("");
  };

  return (
    <div>
      <h2>Home</h2>

      {songs.map(song => (
        <div key={song.id} style={{ marginBottom: "24px" }}>
          <h3>
            Now listening: {song.title} – {song.artist}
          </h3>

          <p>{song.caption}</p>

          {/* Play */}
          <button onClick={() => setPlayingId(song.id)}>
            {playingId === song.id ? "Pause" : "Play"}
          </button>

          {/* Likes */}
          <button onClick={() => handleLike(song.id)}>
            Likes: {song.likes}
          </button>

          {/* Comments */}
          <button onClick={() => toggleComments(song.id)}>
            Comments ({song.comments.length})
          </button>

          {openCommentsId === song.id && (
            <div style={{ marginTop: "10px" }}>
              <input
                type="text"
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button onClick={() => addComment(song.id)}>
                Post
              </button>

              <ul>
                {song.comments.map((comment, i) => (
                  <li key={i}>{comment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;
