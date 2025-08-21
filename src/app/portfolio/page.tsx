import Image from "next/image";
import { RingA, RingB, RingC, RingD, RingE } from "./rings";

const images = [
  { src: RingA, alt: "Ring A" },
  { src: RingB, alt: "Ring B" },
  { src: RingC, alt: "Ring C" },
  { src: RingD, alt: "Ring D" },
  { src: RingE, alt: "Ring E" },

];

export default function Portfolio() {
  return (
    <main className="surface" style={{ padding: 32, margin: '24px auto', maxWidth: 1200 }}>
      <h1>Portfolio</h1>
      <p className="muted" style={{ marginBottom: 16 }}>A selection of our bespoke pieces and signature designs.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {images.map((img) => (
          <figure key={img.alt} style={{ margin: 0 }}>
            <Image
              src={img.src}
              alt={img.alt}
              placeholder="blur"
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            {/* <figcaption className="muted" style={{ fontSize: 12, marginTop: 8 }}>{img.alt}</figcaption> */}
          </figure>
        ))}
      </div>
    </main>
  );
}
