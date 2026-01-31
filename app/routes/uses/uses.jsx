import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description:
      'A list of software, tools, and hardware I use for development and learning',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A concise overview of the development tools, programming languages, and hardware I use daily for coding, data processing, and learning new technologies."
        />

        {/* Development Tools Section */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://vscodium.com/">VSCodium</Link> as my main
                    editor with the Tokyo Night theme and Operator Mono font.
                  </ListItem>
                  <ListItem>
                    <Link href="https://nodejs.org/">Node.js</Link> for backend
                    development and scripting.
                  </ListItem>
                  <ListItem>
                    <Link href="https://golang.org/">Go</Link> for efficient backend
                    services and performance-critical applications.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> is my preferred
                    front-end framework for building interactive UIs.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.python.org/">Python</Link> for data
                    processing, scripting, and automation tasks.
                  </ListItem>
                  <ListItem>
                    I’m currently learning{' '}
                    <Link href="https://www.rust-lang.org/">Rust</Link> to explore system
                    programming and high-performance applications.
                  </ListItem>
                  <ListItem>
                    Firefox is my primary browser for development and general use.
                  </ListItem>
                  <ListItem>
                    For JavaScript animations, I use{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link> with
                    React.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Hardware Section */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Hardware</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Arch Linux (By the Way)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
