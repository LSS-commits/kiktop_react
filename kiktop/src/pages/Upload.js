import React, { useState } from 'react';
import axios from 'axios';
import faker from 'faker';

// TODO: this creates a new user/post, change db structure to only add posts to a preexisting user

const Upload = () => {

  // for the personal profile data
  let id = faker.datatype.uuid();
  const name = "한국어";
  const romanized_name = "Kore Anne";
  const username = "quoraianne22";
  const avatar = "https://i.imgur.com/XbceKdq.jpeg";

  const today = new Date();
  const timestamp = today.toISOString();

  // for the new post
  const [video, setVideo] = useState(null);
  const [caption, setCaption] = useState(null);


  // submit new "post"
  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: add preview before upload

    const data = {
      id: id,
      name: name,
      romanized_name: romanized_name,
      username: username,
      avatar: avatar,
      is_followed: false,
      video: video,
      caption: caption,
      likes: 0,
      comments: 0,
      timestamp: timestamp,
      button_visible: false
    };

    await axios.post('/.netlify/functions/addData', data)
    .then((response) => {
      // TODO: add redirection to home page + success notification
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });

  };

  return (
    <div className="upload-page">
      <div className="break"></div>
      <h1>Upload video</h1>
      <p>This video will be published to @{username}</p>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="section">
            <div className="image-upload"></div>
            <div className="form-subsection">
              <div className="section input-section">
                <label className="bold">Caption</label>
                <input className="input" name="caption" onChange={(event) => setCaption(event.target.value)}/>
              </div>
              <div className="break"></div>
              <div className="section input-section">
                <label className="bold">Video Url</label>
                <input className="input" name="video" onChange={(event) => setVideo(event.target.value)}/>
              </div>
            </div>
          </div>
          <button>Post</button>
        </form>
      </div>
    </div>
  )
};
  
export default Upload;
  