import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import RbRc from '../assets/images/RbRc.png'

import RBReproduce from '../assets/images/RBReproduce.png'
import RBIncentives from '../assets/images/RBIncentives2.png'
import RBTransparency from '../assets/images/RBTransparency4.png'

/* eslint-disable */

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Research Blocks'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  Improving the Reproducibility, Integrity, <br />
                  and Transparency of Clinical Trials.{' '}
                </h2>
              </header>
              <p>
                Our software serves as a web-based, blockchain enabled clinical
                research platform. The website builds a large network of
                participants for researchers, while blockchain capabilities
                improve reproducibility and transparency of studies.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={pic01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={RbRc} alt="" />
              </span>
            </div>
            <div className="col-6">
              <header className="major">
                <h2>
                  Leveraging Blockchain <br />
                  To Improve Your Bottom Line.{' '}
                </h2>
              </header>
              <p>
                According to Nature’s survey, more than 70% of researchers have
                tried and failed to reproduce another research. Lack of
                reproducibility and transparency can not only deter reliability
                of research, but also result in research-related harms to study
                participants.
              </p>
              <p>
                Exploiting the advantages of blockchain technology, Research
                Chain will increase reproducibility and transparency of
                research. Researchers, regulators, healthcare professionals, and
                research participants will be able to track, validate, and
                reproduce studies more easily.
              </p>
              <p>
                Utilizing the benefits of blockchain such as timestamping and
                immutability, the research process will also be more
                reproducible and transparent. Researchers will have the option
                to share their collected data and findings for incentives (e.g.
                tokens). Overall, the new, improved research process using
                Research Block will add credibility, transparency,
                reproducibility, and reliabilities to the research ecosystem.
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Repairing a Broken Research Ecosystem.</h2>
              </header>
              <p>
                The existing world of clinical research lacks compelling
                incentives and unifying infrastructure.
              </p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={RBTransparency} alt="" />
              </span>
              <h3>Improved Transparency</h3>
              <p>
                Existing infrastructure allows for potential data manipulation
                &amp; fabrication, but blockchain capabilities allow researchers
                to transparently document research processes from start to
                finish.
              </p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={RBIncentives} alt="" />
              </span>
              <h3>Research Incentives</h3>
              <p>
                Trial participants will be rewarded for participating in
                clinical trials, and researchers will be incentivized to share
                their research data, techniques, and findings.
              </p>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={RBReproduce} alt="" />
              </span>
              <h3>Experimental Reproducibility</h3>
              <p>
                Researchers, regulators, healthcare professionals, and research
                participants will be able to track, validate, and reproduce
                healthcare studies more easily.
              </p>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Become a Research Partner.</h2>
            </header>
            <p>Reach out to us for early access to our platform.</p>
            <ul className="actions uniform">
              <li>
                <a href="#" className="button special">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage
