import { faker } from '@faker-js/faker';
import { useState } from 'react';
import axiosClient from '../shared/axiosClient';
import { useNavigate } from 'react-router-dom';


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

  // for notification
  const [notification, setNotification] = useState({
    state: false,
    message: ""
  });

  // for redirection
  const navigate = useNavigate();
  
  // preview upload
  const [videoPreview, setVideoPreview] = useState(null);
  const [captionPreview, setCaptionPreview] = useState(null);
  
  const handlePreview = async (event) => {
    event.preventDefault();

    // remove previous video src if user picks a new video to preview
    await setCaptionPreview(null);
    await setVideoPreview(null);

    // if video and caption are provided, create preview
    if (caption && video) {
      setCaptionPreview(caption);
      setVideoPreview(video);
    } else {
      setCaptionPreview(null);
      setVideoPreview(null);
    }
  }

  // submit new upload
  const handleSubmit = async (event) => {
    event.preventDefault();

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
      // TODO: success notification + add redirection to home page
      setNotification({...notification, state: true, message: "Your upload was successful! Back to your posts..."});
      setTimeout(() => navigate("/"), 4000);
      console.log(response);
    })
    .catch((error) => {
      // error notification
      setNotification({...notification, state: true, message: "Oops, something went wrong... Please retry later"});
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
          <div className={videoPreview ? "upload-preview changeBackground" : "upload-preview"}> 
            {videoPreview ? 
            <div className="preview-layout">
              <p className="preview-caption">{captionPreview}</p>
              <video className="preview-video" controls>
                <source src={videoPreview} type="video/mp4"/>
                Your browser does not support HTML5 video.
              </video> 
            </div> :
            <span>Upload preview</span>
            }
            <button className="upload-preview-button" onClick={handlePreview}>Preview post</button>
          </div>
          <form className='upload-form' onSubmit={handleSubmit}>
          <input name="caption" placeholder="Caption" onChange={(event) => setCaption(event.target.value)}/>
          <input name="video" placeholder="Video Url" onChange={(event) => setVideo(event.target.value)}/>
          <button>Post</button>
          {notification.state === true && <p style={{"fontSize": "20px", "fontWeight": "600","color": "#66BB6A"}}>{notification.message}</p>}
          </form>
        </div>
    </div>
    </>
  );
}
  
export default Upload;