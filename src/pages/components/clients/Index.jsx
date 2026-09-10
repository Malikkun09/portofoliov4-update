import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import Badge from '@src/pages/components/clients/components/Badge';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/clients/styles/clients.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Clients() {
  const isMobile = useIsMobile();
  const textRefs = useRef([]);
  const badgeRefs = useRef([]);
  const rootRef = useRef();
  const windowSize = useWindowSize();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const vw = (coef) => windowSize.height * (coef / 100);
        textRefs.current.forEach((textRef, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: rootRef.current,
                start: index === 0 ? `top-=${vw(35)}` : `top+=${vw(35 + 5.5555556 * index)}`,
                end: index === 0 ? `bottom-=${vw(35 + 5.5555556 * index)}` : `bottom+=${vw(25)}`,
                toggleActions: 'play none reverse none',
                scrub: true,
                scroller: document?.querySelector('main'),
                invalidateOnRefresh: true,
              },
            })
            .to(textRef, {
              top: `${10 + 30 * index + 5.5555556 * index}vw`,
            });
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation(textRefs, rootRef, windowSize, isMobile);
    return () => ctx.kill();
  }, [isMobile, windowSize.height]);

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-grid-inner')}>
      <h1 className={clsx(styles.sectionTitle, 'h1')}>
        <AppearByWords>Journey</AppearByWords>
      </h1>
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2026</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[0] = el;
        }}
        className={styles.first}
      >
        <Badge name="company1" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>PKL Inventaris</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Built Sistem Inventaris Barang for PKL:</div>
            <div className="p-l">Laravel inventory with role-based access,</div>
            <div className="p-l">stock ledgers, activity logs, and a security</div>
            <div className="p-l">audit covering injection, sessions, and</div>
            <div className="p-l">transaction integrity. Forty-six regression</div>
            <div className="p-l">tests stay green. Deployed to shared</div>
            <div className="p-l">hosting, with the source on GitHub for</div>
            <div className="p-l">anyone who wants to read the work.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.firstEmpty} />
          <div
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className={styles.firstText}
          >
            <AppearTitle>
              <h6 className="h6">2026</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>PKL Inventaris</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Built Sistem Inventaris Barang for PKL:</div>
              <div className="p-l">Laravel inventory with role-based access,</div>
              <div className="p-l">stock ledgers, activity logs, and a security</div>
              <div className="p-l">audit covering injection, sessions, and</div>
              <div className="p-l">transaction integrity. Forty-six regression</div>
              <div className="p-l">tests stay green. Deployed to shared</div>
              <div className="p-l">hosting, with the source on GitHub for</div>
              <div className="p-l">anyone who wants to read the work.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2026</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[1] = el;
        }}
        className={styles.second}
      >
        <Badge name="company2" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Coding Camp</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Full-stack web track at Coding Camp 2026</div>
            <div className="p-l">by DBS Foundation and Dicoding. Capstone</div>
            <div className="p-l">project KerjaIn / SkillMatch: a platform that</div>
            <div className="p-l">helps SMK students find internships, jobs,</div>
            <div className="p-l">and career information. Theme: Future-</div>
            <div className="p-l">Ready Work & Economy. I left with React,</div>
            <div className="p-l">backend JavaScript, and a habit of finishing</div>
            <div className="p-l">what I start.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className={styles.secondText}
          >
            <AppearTitle>
              <h6 className="h6">2026</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Coding Camp</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Full-stack web track at Coding Camp 2026</div>
              <div className="p-l">by DBS Foundation and Dicoding. Capstone</div>
              <div className="p-l">project KerjaIn / SkillMatch: a platform that</div>
              <div className="p-l">helps SMK students find internships, jobs,</div>
              <div className="p-l">and career information. Theme: Future-</div>
              <div className="p-l">Ready Work & Economy. I left with React,</div>
              <div className="p-l">backend JavaScript, and a habit of finishing</div>
              <div className="p-l">what I start.</div>
            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2024</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[2] = el;
        }}
        className={styles.third}
      >
        <Badge name="company3" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>SMK Fithrah Insani</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Started the PPLG program at SMK</div>
            <div className="p-l">Informatika Fithrah Insani in Cimahi.</div>
            <div className="p-l">HTML, CSS, JavaScript, and interface</div>
            <div className="p-l">design became the daily work. This is</div>
            <div className="p-l">where I stopped treating code as a</div>
            <div className="p-l">subject and started treating it as a</div>
            <div className="p-l">way to build things people can open</div>
            <div className="p-l">in a browser.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.fifthEmpty} />
          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className={styles.thirdText}
          >
            <AppearTitle>
              <h6 className="h6">2024</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>SMK Fithrah Insani</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Started the PPLG program at SMK</div>
              <div className="p-l">Informatika Fithrah Insani in Cimahi.</div>
              <div className="p-l">HTML, CSS, JavaScript, and interface</div>
              <div className="p-l">design became the daily work. This is</div>
              <div className="p-l">where I stopped treating code as a</div>
              <div className="p-l">subject and started treating it as a</div>
              <div className="p-l">way to build things people can open</div>
              <div className="p-l">in a browser.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Clients;
