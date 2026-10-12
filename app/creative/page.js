import Image from "next/image";
import P from "../../content/creative";
import Interactive from "./Interactive";

export const metadata = {
  title: "Karan Swami · Actor & Theatre-maker",
  description:
    "Karan Swami, actor and theatre-maker based in Mumbai and Jaipur. Stage, screen, backstage and short-form content.",
  openGraph: {
    title: "Karan Swami · Actor & Theatre-maker",
    description: "Stage, screen, backstage and short-form content.",
  },
};

const isActingRole = (r) => /actor|lead|perform/i.test(r);
const subline = (w) => [w.company, w.director ? "Dir. " + w.director : ""].filter(Boolean).join(" · ");

function Media({ src, alt, placeholder, children }) {
  if (src)
    return (
      <div className="media">
        <Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
        {children}
      </div>
    );
  return (
    <div className="media" role="img" aria-label={placeholder + " placeholder"}>
      <span className="ph">{placeholder}</span>
    </div>
  );
}

// A link when there is somewhere to go, a plain block when there isn't.
function Wrap({ href, children, ...rest }) {
  return href ? <a href={href} target="_blank" rel="noopener" {...rest}>{children}</a> : <div {...rest}>{children}</div>;
}

function CreditRow({ w, roles }) {
  return (
    <li>
      <span className="yr">{w.year || "—"}</span>
      <span>
        {w.link ? <a className="t" href={w.link} target="_blank" rel="noopener">{w.title} ↗</a> : <span className="t">{w.title}</span>}
        <span className="s">{subline(w)}</span>
      </span>
      <span className="r">{roles.join(" · ")}</span>
    </li>
  );
}

function ContactRow({ k, v, href, text, copy }) {
  return (
    <div className="contact-row">
      <span className="k">{k}</span>
      {!v ? (
        <span className="v pending">Coming soon</span>
      ) : (
        <span className="v">
          {href ? <a href={href} target="_blank" rel="noopener">{text || v} ↗</a> : <span>{v}</span>}
          {copy && <button className="copy-btn" type="button" data-copy={v}>Copy</button>}
        </span>
      )}
    </div>
  );
}

export default function Creative() {
  const pr = P.profile;
  const h = pr.headline;
  const ff = P.fourthFrame;
  const featured = P.work.filter((w) => w.featured);
  const actingWork = P.work.filter((w) => w.roles.some(isActingRole));
  const ffWork = ff.work.length ? ff.work : [{}, {}, {}];
  const reels = P.content.reels.length ? P.content.reels : [{}, {}, {}, {}];

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="container header-row">
          <a href="#top" className="logo" aria-label="Karan Swami, home">KS<span>.</span></a>
          <nav className="nav" id="nav" aria-label="Main">
            <a href="#work">Work</a>
            <a href="#acting">Acting</a>
            <a href="#content">Content</a>
            <a href="#about">About</a>
          </nav>
          <div className="header-actions">
            <span className="badge"><i></i><span>{pr.available}</span></span>
            <button className="icon-btn" id="theme-toggle" type="button" aria-label="Switch to light theme">
              <svg className="sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></svg>
              <svg className="moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" /></svg>
            </button>
            <button className="icon-btn menu-btn" id="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16M4 16h16" /></svg>
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="hero container" id="top">
          <div className="hero-text">
            <p className="eyebrow">{pr.name} — {pr.role} · {pr.location}</p>
            <h1>{h[0]} <em>{h[1]}</em> {h[2]} <em>{h[3]}</em></h1>
            <p className="hero-intro">{pr.intro}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#work">See the work <span aria-hidden="true">→</span></a>
              <a className="btn btn-ghost" href="#about">Get in touch</a>
            </div>
          </div>
          <figure className="hero-media">
            <Media src={pr.portrait} alt={pr.name} placeholder="Portrait or stage still" />
            <figcaption lang="hi">{pr.nameHindi}</figcaption>
          </figure>
        </section>

        <div className="container">
          <dl className="stats">
            {P.stats.map((s) => <div key={s.label}><dt>{s.value}</dt><dd>{s.label}</dd></div>)}
          </dl>
        </div>

        {/* SELECTED WORK */}
        <section className="section container" id="work">
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2>Plays, films and <em>everything around them</em></h2>
          </div>
          <div className="filters" role="group" aria-label="Filter work">
            <button type="button" className="chip is-active" data-filter="all">All</button>
            <button type="button" className="chip" data-filter="acting">Acting</button>
            <button type="button" className="chip" data-filter="backstage">Behind the scenes</button>
            <button type="button" className="chip" data-filter="screen">Screen</button>
          </div>
          <div className="work-grid" id="work-grid">
            {featured.map((w) => {
              const cats = [
                "all",
                w.roles.some(isActingRole) && "acting",
                w.roles.some((r) => !isActingRole(r)) && "backstage",
                w.type === "screen" && "screen",
              ].filter(Boolean).join(" ");
              return (
                <Wrap key={w.title} href={w.link} className="card reveal" data-cats={cats}>
                  <Media src={w.image} alt={w.title} placeholder={w.type === "screen" ? "Film still" : "Stage photo"} />
                  <div className="card-top">
                    <h3>{w.title}{w.titleHindi && <small lang="hi">{w.titleHindi}</small>}</h3>
                    {w.year && <span className="year">{w.year}</span>}
                  </div>
                  {subline(w) && <p className="meta">{subline(w)}</p>}
                  <div className="tags">
                    {w.roles.map((r) => <span key={r} className={isActingRole(r) ? "is-acting" : undefined}>{r}</span>)}
                  </div>
                </Wrap>
              );
            })}
          </div>
        </section>

        {/* ACTING */}
        <section className="section container" id="acting">
          <div className="section-head">
            <p className="eyebrow">Acting</p>
            <h2>Credits &amp; <em>training</em></h2>
          </div>
          <div className="acting-layout">
            <div className="acting-lists">
              <div>
                <h3 className="label">Stage</h3>
                <ul className="credits">
                  {actingWork.filter((w) => w.type === "stage").map((w) => <CreditRow key={w.title} w={w} roles={w.roles.filter(isActingRole)} />)}
                </ul>
              </div>
              <div>
                <h3 className="label">Screen</h3>
                <ul className="credits">
                  {/* Screen credits show everything Karan did on the project (e.g. direction support). */}
                  {actingWork.filter((w) => w.type === "screen").map((w) => <CreditRow key={w.title} w={w} roles={w.roles} />)}
                </ul>
              </div>
              <div>
                <h3 className="label">Training</h3>
                <ul className="credits">
                  {P.training.map((t) => (
                    <li key={t.name}>
                      <span className="yr">—</span>
                      <span><span className="t">{t.name}</span><span className="s">{t.meta}</span></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <aside className="details-card" aria-label="Actor details">
              <div className="details-photo">
                <Media src={pr.headshot} alt={pr.name + " headshot"} placeholder="Headshot" />
              </div>
              <h3 className="label">Actor details</h3>
              <dl>
                {P.actorDetails.map((d) => <div key={d.label}><dt>{d.label}</dt><dd>{d.value}</dd></div>)}
              </dl>
            </aside>
          </div>
        </section>

        {/* THE FOURTH FRAME */}
        <section className="section container" id="studio">
          <div className="studio">
            <div>
              <p className="eyebrow">{ff.role}</p>
              <h2>{ff.title}</h2>
              <p>{ff.text}</p>
            </div>
            <div className="studio-work">
              {ffWork.map((x, i) => (
                <Wrap key={i} href={x.link} className="reveal">
                  <Media src={x.image} alt={x.caption || ""} placeholder={x.caption || "Client work " + (i + 1)} />
                </Wrap>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="section container" id="content">
          <div className="section-head">
            <p className="eyebrow">Content</p>
            <h2>Short-form, <em>written and performed</em></h2>
          </div>
          <p className="lead">{P.content.text}</p>
          <div className="reels">
            {reels.map((r, i) => (
              <Wrap key={i} href={r.link} className="reel reveal">
                <Media src={r.image} alt={r.title || ""} placeholder={r.title ? "" : "Reel " + (i + 1)}>
                  {r.link && <span className="play">PLAY ▶</span>}
                </Media>
                {r.title && <span className="title">{r.title}</span>}
              </Wrap>
            ))}
          </div>
        </section>

        {/* ABOUT / CONTACT */}
        <section className="section container" id="about">
          <div className="about-layout">
            <div>
              <p className="eyebrow">About</p>
              <div className="about-text">
                {P.about.map((p) => <p key={p}>{p}</p>)}
              </div>
            </div>
            <div className="contact">
              <p className="eyebrow">Contact</p>
              <h2 className="contact-title">Let's work <em>together.</em></h2>
              <div className="contact-rows">
                <ContactRow k="Email" v={pr.email} href={"mailto:" + pr.email} copy />
                <ContactRow
                  k="Instagram"
                  v={pr.instagram}
                  href={pr.instagram}
                  text={pr.instagram.replace(/^https?:\/\/(www\.)?instagram\.com\//, "@").replace(/\/$/, "")}
                />
                {pr.youtube && <ContactRow k="YouTube" v={pr.youtube} href={pr.youtube} text="Watch" />}
                <ContactRow k="Based in" v={pr.location} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <span>© {new Date().getFullYear()} {pr.name} · {pr.role}</span>
        <a href="#top">Back to top ↑</a>
      </footer>

      <Interactive />
    </>
  );
}
