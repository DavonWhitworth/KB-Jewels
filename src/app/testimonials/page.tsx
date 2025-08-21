import { testimonies } from "./testimonies";

export default function TestimonialsPage() {

  return (
    <main style={{ maxWidth: 1200, margin: "24px auto", padding: "0 16px" }}>
      <h1>What Our Clients Say</h1>
      <p className="muted" style={{ marginBottom: 16 }}>Real words from our clients.</p>

      {testimonies.length === 0 ? (
        <p className="muted">No testimonials yet.</p>
      ) : (
        <ul style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", listStyle: "none", padding: 0, margin: 0 }}>
          {testimonies.map((t, idx) => (
            <li key={idx} className="surface" style={{ padding: 16 }}>
              <p style={{ marginBottom: 8 }}>&ldquo;{t.message}&rdquo;</p>
              <p className="muted" style={{ fontSize: 14 }}>
              — {t.customerName} • {t.location}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}


