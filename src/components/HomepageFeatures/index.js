import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Nem at bruge',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus blev designet fra grunden af for at være let at installere
        og bruge til at få din hjemmeside op at køre hurtigt.
      </>
    ),
  },
  {
    title: 'Fokuser på det vigtige',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lader dig fokusere på dit indhold, og vi tager os af resten.
        Gå i gang med at skrive dine dokumenter i markdown.
      </>
    ),
  },
  {
    title: 'Drevet af React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Udvid eller tilpas dit website layout ved at genbruge React.
        Docusaurus kan udvides, mens du bibeholder dets kernefunktionalitet.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
