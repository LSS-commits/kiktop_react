import { faker } from '@faker-js/faker';
import { useState } from 'react';
import axiosClient from '../shared/axiosClient';


// TODO: this creates a new user/post, change db structure to only add posts to a preexisting user

const Upload = () => {

  // for the current user profile
  let id = faker.datatype.uuid();
  const name = "한국어";
  const romanized_name = "Kore Anne";
  const username = "quoraianne22";
  const avatar = "https://i.imgur.com/XbceKdq.jpeg";

  const currentDay = new Date();
  const timestamp = currentDay.toISOString();

  // get video and caption from upload form
  const [video, setVideo] = useState(null);
  const [caption, setCaption] = useState(null);

  // submit new upload
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

    // create new document
    await axiosClient.post('/addData', data)
    .then((response) => {
      // TODO: add redirection to home page + success notification
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <>
    <div className="break"></div>
    <div className="upload">
        <h1>Upload video</h1>
        <p>This video will be published to @{username}</p>
        <div className="container upload-layout">
            <div className="upload-preview">
                <span>Upload preview</span>
            </div>
            <form className='upload-form' onSubmit={handleSubmit}>
            <input name="caption" placeholder="Caption" onChange={(event) => setCaption(event.target.value)}/>
            <input name="video" placeholder="Video Url" onChange={(event) => setVideo(event.target.value)}/>
            <button>Post</button>
            </form>
        </div>
    </div>
    </>
  );
}
  
export default Upload;