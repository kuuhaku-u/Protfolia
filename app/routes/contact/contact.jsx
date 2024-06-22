import { Footer } from '~/components/footer';
import { Section } from '~/components/section';
import { baseMeta } from '~/utils/meta';
import { useNavigation } from '@remix-run/react';
import { DecoderText } from '~/components/decoder-text';
import { socialLinks } from '~/layouts/navbar/nav-data';
import { Icon } from '~/components/icon';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};

// const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

const visible = true;

export const Contact = () => {
  const { state } = useNavigation();

  return (
    <Section className={styles.contact}>
      <div className={styles.email}>
        <DecoderText lassName={styles.title} text="Email - ankit8743890@gmail.com" start={visible} delay={500} />
        <div className={styles.abc}>
          {socialLinks.map(({ label, url, icon }) => (
            <>
              <a
                key={label}
                data-navbar-item={undefined}
                className={styles.navIconLink}
                aria-label={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={styles.navIcon} icon={icon} />
              </a>
              <DecoderText lassName={styles.title} text={label} start={visible} delay={500} />
            </>
          ))}

        </div>
      </div>
      <Footer className={styles.footer} />
    </Section>

  );
};


