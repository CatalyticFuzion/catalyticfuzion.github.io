import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Requirements and Structure United',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        CatalyticFuzion structures requirements to naturally map to system architecture.
        It binds behavior descriptions directly to the underlying system structure.
      </>
    ),
  },
  {
    title: 'Machine-Readable and AI-Compatible',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        CatalyticFuzion makes requirements machine-readable and AI-parsable, enabling iterative 
        automated coding. It supports both testing and system design with a single, structured DSL.
      </>
    ),
  },
  {
    title: 'Human-AI Collaborative DSL',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        CatalyticFuzion creates a practical language bridging humans and AI systems, 
        enabling natural collaboration throughout the entire software development process.
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
