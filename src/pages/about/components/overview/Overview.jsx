import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">The front-end developer&apos;s role </h3>
            <h3 className="h3">
              is like a kind host, <span className="medium">ensuring</span>
            </h3>
            <h3 className="h3">
              visitors have a <span className="medium">smooth</span> and
            </h3>
            <h3 className="h3">
              <span className="medium">enjoyable</span> experience.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">The front-end developer&apos;s role is like a</h3>
            <h3 className="h3">
              kind host, <span className="medium">ensuring</span> visitors have
            </h3>
            <h3 className="h3">
              a <span className="medium">smooth</span> and <span className="medium">enjoyable</span> experience.
            </h3>
          </AppearTitle>
        )}
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>Some words</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        {!isMobile ? (
          <AppearTitle key="desktop-overview">
            <h6 className="h6">Hey there! I&apos;m Malik, a PPLG student at SMK Informatika Fithrah </h6>
            <h6 className="h6">Insani in Cimahi. I learn by building: websites, interfaces, systems,</h6>
            <h6 className="h6">and visual experiments. Software, UI/UX, AI, and security are the</h6>
            <h6 className="h6">lanes I keep walking — still a student, already shipping work.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>When I&apos;m not in class or on PKL, I&apos;m usually in a terminal, a Figma</h6>
            <h6 className="h6">file, or an animation timeline. I like interfaces that feel designed,</h6>
            <h6 className="h6">not default — type, contrast, and motion doing real work.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>This site is my digital house: projects, experiments, and process.</h6>
            <h6 className="h6">Not a claim of seniority. Just the work that already exists, arranged</h6>
            <h6 className="h6">so you can walk through it.</h6>

            <h6 className={clsx(styles.paddingTop, 'h6')}>If you want to build something, I&apos;m listening.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Muhammad Malik Fajar El Syarif.</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">Hey there! I&apos;m Malik, a PPLG student at SMK Informatika </h6>
            <h6 className="h6">Fithrah Insani in Cimahi. I learn by building: websites,</h6>
            <h6 className="h6">interfaces, systems, and visual experiments. Software,</h6>
            <h6 className="h6">UI/UX, AI, and security are the lanes I keep walking.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>When I&apos;m not in class or on PKL, I&apos;m usually in a terminal, </h6>
            <h6 className="h6">a Figma file, or an animation timeline. I like interfaces that</h6>
            <h6 className="h6">feel designed, not default — type, contrast, and motion</h6>
            <h6 className="h6">doing real work.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>This site is my digital house: projects, experiments, and</h6>
            <h6 className="h6">process. Not a claim of seniority. Just the work that</h6>
            <h6 className="h6">already exists, arranged so you can walk through it.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>If you want to build something, I&apos;m listening.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Muhammad Malik Fajar El Syarif.</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
