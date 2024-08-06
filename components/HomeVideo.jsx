export default function HomeVideo() {
    return (
      <video width="320" height="240" controls preload="none">
        <source src="/assetes/videos/homevideo.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    )
  }