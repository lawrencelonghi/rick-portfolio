import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom'

export const Work = () => {
  return (
    <section id="work" className="scroll-mt-28 mt-24 md:mt-40 m-5 p-2">
      <LightGallery speed={500} selector="a" plugins={[lgThumbnail, lgZoom]}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {[
            'rick1.jpeg',
            'rick2.jpeg',
            'rick3.jpeg',
            'rick4.jpeg',
            'rick5.jpeg',
            'rick6.jpeg',
            'rick7.jpeg',
            'rick8.jpeg',
          ].map((img, i,) => (
            <a key={i} href={`/${img}`}>
              <img
                src={`/${img}`}
                alt="rick meu garoto"
                className="w-full aspect-square object-cover object-top"
              />
            </a>
          ))}
        </div>
      </LightGallery>
    </section>
  );
};
