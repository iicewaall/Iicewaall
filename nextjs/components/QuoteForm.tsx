"use client";

import { useState } from "react";
import { products, WHATSAPP } from "@/lib/data";

// Opens WhatsApp with the enquiry filled in
export default function QuoteForm() {
  const [note, setNote] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!WHATSAPP) {
      setNote("Thank you! Our contact number will be added here shortly.");
      return;
    }
    const f = new FormData(e.currentTarget);
    const body = `IICE WAALL enquiry\nName: ${f.get("name")}\nCompany: ${f.get("company")}\nPhone: ${f.get("phone")}\nProduct: ${f.get("product")}\n\n${f.get("message")}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
    setNote("WhatsApp will open with your enquiry. Just tap Send.");
  }

  return (
    <form className="quote" onSubmit={submit}>
      <div className="row">
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Company<input name="company" autoComplete="organization" /></label>
      </div>
      <div className="row">
        <label>Phone / WhatsApp<input name="phone" type="tel" required autoComplete="tel" /></label>
        <label>
          Product
          <select name="product">
            {products.map((p) => <option key={p.name}>{p.name}</option>)}
          </select>
        </label>
      </div>
      <label>
        Quantity &amp; message
        <textarea name="message" rows={3} placeholder="e.g. 20 drums (1,000 kg), delivery to…" />
      </label>
      <button type="submit" className="btn btn-primary">Send Enquiry <span aria-hidden="true">→</span></button>
      <p className="note" role="status">{note}</p>
    </form>
  );
}
