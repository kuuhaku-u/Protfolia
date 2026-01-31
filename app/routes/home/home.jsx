import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

const BASE_URL = import.meta.env.BASE_URL || '/';

export const links = () => [
  {
    rel: 'prefetch',
    href: `${BASE_URL}draco/draco_wasm_wrapper.js`,
    as: 'script',
    type: 'text/javascript',
    importance: 'low',
  },
  {
    rel: 'prefetch',
    href: `${BASE_URL}draco/draco_decoder.wasm`,
    as: 'fetch',
    type: 'application/wasm',
    importance: 'low',
  },
];

export const meta = () =>
  baseMeta({
    title: 'Developer Portfolio',
    description: `Portfolio of ${config.name} — Developer focused on scalable software solutions and user experiences.`,
  });

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prev => [...prev, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      section.current && sectionObserver.observe(section.current);
    });

    intro.current && indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      <ProjectSummary
        id="project-1"
        alternate
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Extramarks"
        description={
          <>
            <ul>
              <li>
                Worked extensively on document manipulation tools including PDF and PPTX
                parsing.
              </li>
              <li>
                Developed robust backend services in Node.js to support these features.
              </li>
              <li>
                Managed and enhanced React frontend for seamless user interaction and data
                visualization.
              </li>
            </ul>
          </>
        }
        buttonText="View project"
        buttonLink="https://www.extramarks.com/"
        model={{
          type: 'laptop',
          alt: 'Extramarks',
        }}
      />

      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="ElectricKiwi"
        description={
          <>
            <ul>
              <li>Full stack project focused on energy solutions.</li>
              <li>
                Contributed to frontend development for an energy-based platform focusing
                on custom components and integrating JavaScript libraries and frameworks.
              </li>
              <li>
                Created backend API to serve data and integrated AWS Lambda and Cognito
                for Authorization/Authentication.
              </li>
            </ul>
          </>
        }
        buttonText="View project"
        buttonLink="https://www.electrickiwi.co.nz/"
        model={{
          type: 'laptop',
          alt: 'ElectricKiwi',
        }}
      />

      <ProjectSummary
        id="project-3"
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="T-Mobile (Adobe)"
        description={
          <>
            <ul>
              <li>Frontend project associated with Adobe AEM.</li>
              <li>
                Developed modular and responsive Alpine.js components optimized for
                performance and compatibility with AEM.
              </li>
              <li>
                Collaborated with AEM developers to seamlessly integrate frontend
                components adhering to best practices and client specifications.
              </li>
            </ul>
          </>
        }
        buttonText="View project"
        buttonLink=""
        model={{
          type: 'laptop',
          alt: 'T-Mobile Adobe Project',
        }}
      />

      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Crypto Website"
        description={
          <>
            <ul>
              <li>
                Full stack cryptocurrency website project overseeing both frontend and
                backend.
              </li>
              <li>
                Utilized Next.js and React.js to create responsive templates and custom
                forms.
              </li>
              <li>
                Implemented backend services using Rust Tokio runtime with unit testing to
                ensure secure transactions and efficient data management.
              </li>
            </ul>
          </>
        }
        buttonText="View project"
        buttonLink=""
        model={{
          type: 'laptop',
          alt: 'Crypto Website',
        }}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />

      <Footer />
    </div>
  );
};
