export const metadata = {
  title: "Sign In - Open PRO",
  description: "Page description",
};

import Link from "next/link";

const videos = [
  { id: 1, title: "Video 1", url: "https://www.example.com/video1.mp4" },
  { id: 2, title: "Video 2", url: "https://www.example.com/video2.mp4" },
  { id: 3, title: "Video 3", url: "https://www.example.com/video3.mp4" },
  // Add more video objects here
];

export default function Gallery() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Check out this gallery:</h1>
          </div>
        </div>

        {/* TODO: PLACEHOLDER VIDEO CAROUSEL OR VIDEO GALLERY CARD SHOULD GO HERE */}
        <div className="gallery">
          {videos.map((video) => (
            <div key={video.id} className="video-item">
              <h3>{video.title}</h3>
              <video controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
