'use client';

import { useState } from 'react';
import ytdl from 'ytdl-core';

const YouTubeDownloader = () => {
  // const [url, setUrl] = useState('');
  // const [error, setError] = useState('');
  // const [videoInfo, setVideoInfo] = useState(null);

  // const handleDownload = async () => {
  //   if (ytdl.validateURL(url)) {
  //     try {
  //       const corsProxy = 'https://cors-anywhere.herokuapp.com/';
  //       const response = await fetch(`${corsProxy}https://www.youtube.com/get_video_info?video_id=${ytdl.getURLVideoID(url)}`);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch video info.');
  //       }
  //       const info = await response.text();
  //       const videoInfo = ytdl.parseURL(url); // Parse the response text to extract video info
  //       setVideoInfo(videoInfo);
  //       setError('');
  //     } catch (err) {
  //       setError('Failed to fetch video info.');
  //     }
  //   } else {
  //     setError('Invalid YouTube URL.');
  //   }
  // };

  return (
    <div>
      WIP
      {/* <h1 className="text-2xl font-bold mb-4">YouTube Downloader</h1>
      <input
        type="text"
        placeholder="Enter YouTube URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 w-full mb-4 text-black"
      />
      <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2">Download</button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {videoInfo && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">{videoInfo.videoDetails.title}</h2>
          <a href={ytdl.chooseFormat(videoInfo.formats, { quality: 'highest' }).url} download className="text-blue-500">Download Video</a>
        </div>
      )} */}
    </div>
  );
};

export default YouTubeDownloader;
