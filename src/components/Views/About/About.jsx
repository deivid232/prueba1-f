import Image from 'next/image';
import styles from './about.module.scss';
import ASSESTS from 'assets';
import TYPES from 'types';
import { VscGithub, VscGithubInverted } from 'react-icons/vsc';
import { useAppContext } from 'contexts/AppContext';
import { cls } from 'utils';

const About = ({ data }) => {
  const {
    sharedState: { theme },
  } = useAppContext();

  let ThemedVscLogo = () => {
    return theme == TYPES.THEME.DARK ? (
      <VscGithub
        style={{
          color: 'white',
        }}
      />
    ) : (
      <VscGithubInverted
        style={{
          color: 'black',
        }}
      />
    );
  };

  return (
    <main className={styles.main}>
      <article>
        <div>
          <h1>Fchain Explorer V0.1</h1>
          <p>A Redesigned Explorer for the Fchain Blockchain.</p>
        </div>
        <p>
          The Explorer  aims to be visually modern by design, and present
          the user with realtime statistics with graphically illustrated data to
          inspect the Fchain Blockchain as deeply as possible.
        </p>
        <p>
          based on Nexus explorer v2
        </p>
        <div>
          <p className={styles.contributer}>Happines delivered</p>
          {/* <p className={styles.contributer}>
            {Array.isArray(data) &&
              data?.map((item) => {
                if (item.author.type === 'Bot') {
                  return;
                }
                return (
                  <span key={item.author.login} className={styles.links}>
                    <a
                      href={item.author.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.link}>
                      <ThemedVscLogo />
                      {item.author.login}
                    </a>
                  </span>
                );
              })}
          </p> */}
        </div>
      </article>
      <aside>
        <span>
          <Image
            src={ASSESTS.IMAGE.BLOB.THREE}
            alt="blob_three"
            layout="fill"
            className={cls(styles.blob, styles.three)}
          />
        </span>
        <span>
          <Image
            src={ASSESTS.IMAGE.BLOB.TWO}
            alt="blob_two"
            layout="fill"
            className={cls(styles.blob, styles.two)}
          />
        </span>
        <span>
          <Image
            src={ASSESTS.IMAGE.BLOB.ONE}
            alt="blob_one"
            layout="fill"
            className={cls(styles.blob, styles.one)}
          />
        </span>
        <span className={styles.developImg}>
          <Image
            src={ASSESTS.IMAGE.DEVELOPMENT.ONE}
            alt="blob_one"
            layout="fill"
          />
        </span>
      </aside>
    </main>
  );
};

export default About;
