import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

export const Work = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    'rick1.jpeg',
    'rick2.jpeg',
    'rick3.jpeg',
    'rick4.jpeg',
    'rick5.jpeg',
    'rick6.jpeg',
    'rick7.jpeg',
    'rick8.jpeg',
    'rick9.jpeg'
  ].map((img) => ({ src: `/${img}` }));

  return (
    <section id="work" className="scroll-mt-28 mt-24 md:mt-40 m-5 p-2">
      <div className="bento gap-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt="Rick meu garoto"
            className="mb-2 cursor-pointer"
            onClick={() => {
              setPhotoIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        plugins={[Thumbnails]}
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={photoIndex}
        styles={{ container: { backgroundColor: "rgba(247, 243, 243, 1)" } }}
      />
    </section>
  );
};