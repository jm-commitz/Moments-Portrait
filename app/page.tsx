import Image from "next/image";
import Link from "next/link";
import { ScrollRevealRoot } from "@/components/scroll-reveal";
import "./moments-landing.css";

export default function Home() {
  return (
    <ScrollRevealRoot>
      <div className="moments-landing">
        <nav>
          <Link href="/" className="brand-mark" aria-label="Moments & Portraits — Home">
            <Image
              src="/images/logo.png"
              alt="Moments & Portraits"
              className="brand-logo"
              width={200}
              height={56}
              priority
            />
          </Link>
          <ul className="nav-links">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#booking">Book</a>
            </li>
          </ul>
          <a href="#booking" className="nav-cta">
            Book a Session
          </a>
        </nav>

        <section className="hero">
          <div className="hero-bg" aria-hidden />

          <div className="hero-content">
            <div className="hero-tag">Photography Studio · Philippines</div>
            <h1>
              Every Frame
              <br />
              Tells Your
              <br />
              <em>Story.</em>
            </h1>
            <p className="hero-desc">
              We capture the unscripted, the in-between, the real — portraits and moments that feel
              like you.
            </p>
            <div className="hero-actions">
              <a href="#booking" className="btn-gold">
                Book a Session
              </a>
              <a href="#gallery" className="btn-ghost">
                View Gallery
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <div className="about-strip reveal">
          <div className="strip-item">
            <div className="strip-num">5+</div>
            <div className="strip-label">
              <strong>Years of Experience</strong>
              Crafting meaningful portraits
            </div>
          </div>
          <div className="strip-item">
            <div className="strip-num">500+</div>
            <div className="strip-label">
              <strong>Sessions Completed</strong>
              Families, couples, individuals
            </div>
          </div>
          <div className="strip-item">
            <div className="strip-num">100%</div>
            <div className="strip-label">
              <strong>Client Satisfaction</strong>
              Memories worth keeping
            </div>
          </div>
        </div>

        <MomentsServices />
        <MomentsGallery />
        <MomentsBooking />
        <MomentsFooter />
      </div>
    </ScrollRevealRoot>
  );
}

function MomentsServices() {
  return (
    <section className="services" id="services">
      <div className="section-header reveal">
        <div>
          <p className="section-tag">Wedding Packages</p>
          <h2 className="section-title">
            Photo, Film &<br />
            <em>Full Coverage</em>
          </h2>
        </div>
        <p className="section-desc">
          Packages can be adjusted to your needs and budget — every couple and every wedding is
          different.
        </p>
      </div>

      <div className="services-grid reveal">
        <div className="service-card">
          <div className="service-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9a7a35" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
          <h3>Photo — Package A</h3>
          <p className="service-note">Photo service only</p>
          <ul className="service-includes">
            <li>Pre-wedding pictorial</li>
            <li>4–6 hrs unlimited shots</li>
            <li>All JPEG files via Google Drive</li>
            <li>Online gallery</li>
            <li>Enhanced 50–100 photos</li>
          </ul>
          <div className="service-price">₱6,500</div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9a7a35" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
          <h3>Photo — Package B</h3>
          <p className="service-note">Photo service only · wedding day</p>
          <ul className="service-includes">
            <li>1 photographer (OTD wedding)</li>
            <li>1 assistant · unlimited shots</li>
            <li>All JPEG files via Google Drive</li>
            <li>Online gallery</li>
            <li>Enhanced 100–200 photos</li>
          </ul>
          <div className="service-price">₱8,500</div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9a7a35" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </div>
          <h3>Intimate</h3>
          <ul className="service-includes">
            <li>1 photographer · 2 videographers · 1 SDE editor</li>
            <li>Same day edit (video)</li>
            <li>All files on hard drive (client provides HDD)</li>
            <li>
              <span className="service-free">Free:</span> aerial shots on wedding day
            </li>
          </ul>
          <div className="service-price">₱30,000</div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9a7a35" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
          </div>
          <h3>Regular</h3>
          <ul className="service-includes">
            <li>2 photographers · 2 videographers</li>
            <li>1 production assistant · 1 SDE editor</li>
            <li>4 hr pre-wedding pictorial</li>
            <li>Same day edit (video)</li>
            <li>All files on hard drive (client provides HDD)</li>
            <li>
              <span className="service-free">Free:</span> aerial shots on wedding day
            </li>
          </ul>
          <div className="service-price">₱37,500</div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9a7a35" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <h3>Bronze Package</h3>
          <ul className="service-includes">
            <li>2 photographers · 2 videographers · SDE editor</li>
            <li>Production assistant</li>
            <li>Pre-wedding pictorial · save the date film</li>
            <li>Same day edit (video)</li>
            <li>All files on hard drive · external HDD (by client)</li>
            <li>
              <span className="service-free">Free:</span> aerial shots on wedding day
            </li>
          </ul>
          <div className="service-price">₱45,500</div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9a7a35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <h3>Silver Package</h3>
          <ul className="service-includes">
            <li>3 photographers · 3 videographers · SDE editor</li>
            <li>Production assistant · pre-wedding pictorial</li>
            <li>Aerial shots (wedding day) · save the date video</li>
            <li>Same day edit (video + photo)</li>
            <li>Full video highlights (30 min – 1 hr)</li>
            <li>All files on hard drive · external HDD</li>
            <li>
              <span className="service-free">Free:</span> content creator · 10-page pre-wedding book
            </li>
          </ul>
          <div className="service-price">₱75,500</div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9a7a35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <h3>Golden Package</h3>
          <ul className="service-includes">
            <li>4 photographers · 4 videographers · SDE editor</li>
            <li>Production assistant · pre-wedding pictorial</li>
            <li>Aerial (pre-shoot / event day) · save the date video</li>
            <li>Same day edit (video + photo)</li>
            <li>12×18 photo with frame · 20-page magnetic album with box</li>
            <li>Full video highlights (30 min – 1 hr) · all files on HDD</li>
            <li>
              <span className="service-free">Free:</span> photoman (3 hrs unlimited) · 10-page prenup
              book · content creator
            </li>
          </ul>
          <div className="service-price">₱90,000</div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9a7a35" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>
          <h3>Add-ons &amp; custom</h3>
          <p>Sample add-ons (rates as on our menu; confirm when you book):</p>
          <ul className="service-includes">
            <li>20 / 30 / 40-page album with box — ₱5,000 / ₱6,000 / ₱7,000</li>
            <li>Additional photographer or videographer — ₱5,000 each</li>
            <li>Projector, white screen &amp; laptop operator — ₱5,000</li>
            <li>Prenup book (10 pages) — ₱3,500</li>
            <li>Prenuptial pictorial — ₱6,500</li>
            <li>Save the date (video) with aerial — ₱6,500</li>
            <li>Photoman (3 hours) — ₱8,500</li>
          </ul>
          <p className="service-note">Packages can be adjusted — tell us your priorities and budget.</p>
          <div className="service-price">Tailored quote</div>
        </div>
      </div>
    </section>
  );
}

const GALLERY_ITEMS = [
  { file: "1.jpg", alt: "Wedding photography" },
  { file: "2.jpg", alt: "Wedding photography" },
  { file: "3.jpg", alt: "Wedding photography" },
  { file: "4.jpg", alt: "Wedding photography" },
  { file: "5.jpg", alt: "Wedding photography" },
] as const;

function MomentsGallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="section-header reveal gallery-section-header">
        <div>
          <p className="section-tag">Our Work</p>
          <h2 className="section-title">
            A Glimpse of the
            <br />
            <em>Moments</em> We Keep
          </h2>
        </div>
      </div>

      <div className="gallery-grid reveal">
        {GALLERY_ITEMS.map((item, index) => (
          <div key={item.file} className="gallery-item">
            <div className="gallery-photo">
              <Image
                src={`/images/gallery/${item.file}`}
                alt={item.alt}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 55vw"
                    : "(max-width: 768px) 50vw, 28vw"
                }
                className="object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MomentsBooking() {
  return (
    <section className="booking" id="booking">
      <div className="booking-inner">
        <p className="section-tag reveal">Reserve Your Date</p>
        <h2 className="reveal">
          Let&apos;s Create Something
          <br />
          <em>Memorable.</em>
        </h2>
        <p className="reveal">
          Fill out the form below and we&apos;ll get back to you within 24 hours to confirm your
          session.
        </p>

        <div className="reveal">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mp-name">Full Name</label>
              <input id="mp-name" type="text" placeholder="Juan dela Cruz" name="name" autoComplete="name" />
            </div>
            <div className="form-group">
              <label htmlFor="mp-phone">Contact Number</label>
              <input id="mp-phone" type="tel" placeholder="09XX XXX XXXX" name="phone" autoComplete="tel" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mp-package">Session Type</label>
              <select id="mp-package" name="package" defaultValue="">
                <option value="" disabled>
                  Select a package
                </option>
                <option>Photo — Package A</option>
                <option>Photo — Package B</option>
                <option>Intimate</option>
                <option>Regular</option>
                <option>Bronze Package</option>
                <option>Silver Package</option>
                <option>Golden Package</option>
                <option>Add-ons / custom quote</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mp-date">Preferred Date</label>
              <input id="mp-date" type="date" name="date" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full">
              <label htmlFor="mp-notes">Additional Notes</label>
              <textarea
                id="mp-notes"
                name="notes"
                placeholder="Location preference, number of people, themes, or anything you'd like us to know…"
              />
            </div>
          </div>
          <div className="form-submit">
            <button type="button" className="btn-gold">
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function MomentsFooter() {
  return (
    <>
      <footer className="reveal">
        <div className="footer-brand">
          <Image
            src="/images/logo.png"
            alt="Moments & Portraits"
            className="brand-logo"
            width={220}
            height={62}
          />
        </div>
        <div className="footer-col">
          <h4>Wedding packages</h4>
          <ul>
            <li>
              <a href="#services">Photo — Packages A &amp; B</a>
            </li>
            <li>
              <a href="#services">Intimate &amp; Regular</a>
            </li>
            <li>
              <a href="#services">Bronze, Silver &amp; Golden</a>
            </li>
            <li>
              <a href="#services">Add-ons &amp; custom</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul>
            <li>
              <a href="#">facebook.com/MomentsandPortraits</a>
            </li>
            <li>
              <a href="#booking">Send a Message</a>
            </li>
          </ul>
        </div>
      </footer>

      <div className="footer-bottom">
        <p>© 2026 Moments & Portraits. All rights reserved.</p>
        <p>
          Built with care by JM · <a href="https://jmfolio.vercel.app">jmfolio.vercel.app</a>
        </p>
      </div>
    </>
  );
}
