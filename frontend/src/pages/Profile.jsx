//import React from 'react'; 

//const Profile = () => {
  //  return (
   //     <div>
   //         <h1>This is the profile page</h1>
     //       <p>This is where the user can customize thier profile.</p>
      //  </div>
  //  );
//};

//export default Profile;

import { useState } from "react";

function Profile() {
  const [activeTab, setActiveTab] = useState("posts");

  const user = {
    username: "@Alani.Admin",
    bio: `"You never know where life will take you" – Someone wise`,
    followers: 1000,
    following: 3,
    genres: ["Metal", "R&B", "Rock"]
  };

  const posts = [
    {
      id: 1,
      title: "Goddess",
      artist: "Laufey",
      caption: "This song makes me feel like…",
      likes: 100
    },
    {
      id: 2,
      title: "Sugar",
      artist: "System of a Down",
      caption: "This song makes me feel like…",
      likes: 1000
    }
  ];

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 16 }}>
      
      {/* Profile Header */}
      <div style={{ textAlign: "center" }}>
        <h2>{user.username}</h2>
        <p>{user.bio}</p>

        <div style={{ display: "flex", justifyContent: "space-around", marginTop: 10 }}>
          <div>
            <strong>{user.followers}</strong>
            <p>Followers</p>
          </div>
          <div>
            <strong>{user.following}</strong>
            <p>Following</p>
          </div>
        </div>

        {/* Genres */}
        <div style={{ marginTop: 10 }}>
          {user.genres.map((genre, index) => (
            <span
              key={index}
              style={{
                padding: "6px 12px",
                background: "#f3b1b1",
                borderRadius: 20,
                marginRight: 6,
                fontSize: 12
              }}
            >
              {genre}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: 20 }}>
        <button onClick={() => setActiveTab("posts")}>Post</button>
        <button onClick={() => setActiveTab("likes")}>Likes</button>
        <button onClick={() => setActiveTab("playlist")}>Playlist</button>
        <button onClick={() => setActiveTab("saved")}>Saved</button>
      </div>

      <hr />

      {/* Posts Tab */}
      {activeTab === "posts" && (
        <div>
          {posts.map(post => (
            <div key={post.id} style={{ marginBottom: 20 }}>
              <h4>
                Now listening: {post.title} – {post.artist}
              </h4>
              <p>{post.caption}</p>

              <button
                onClick={() =>
                  post.likes++
                }
              >
                Like ({post.likes})
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Likes Tab */}
      {activeTab === "likes" && (
        <p>Liked songs will appear here.</p>
      )}

      {/* Playlist Tab */}
      {activeTab === "playlist" && (
        <p>User playlists coming soon.</p>
      )}

      {/* Saved Tab */}
      {activeTab === "saved" && (
        <p>Saved songs will appear here.</p>
      )}
    </div>
  );
}

export default Profile;
