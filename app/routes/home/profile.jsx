import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading
      className={styles.title}
      data-visible={visible}
      level={3}
      id={titleId}
    >
      <DecoderText text="Hello, I’m Ankit" start={visible} delay={500} />
    </Heading>
    <Text
      className={styles.description}
      data-visible={visible}
      size="l"
      as="p"
    >
      I am a Software Engineer based in Delhi, India, currently working at{' '}
      <Link href="https://www.extramarks.com/">Extramarks</Link>. I enjoy crafting
      scalable and maintainable solutions while rapidly prototyping ideas. You can
      explore the tools and technologies I use on my{' '}
      <Link href="/uses">Uses page</Link>.
    </Text>
    <Text
      className={styles.description}
      data-visible={visible}
      size="l"
      as="p"
    >
      Outside of work, I enjoy playing video games, exploring new technologies, and
      working on personal projects that challenge and expand my skills.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Contact Me
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
