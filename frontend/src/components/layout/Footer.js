import React, { Fragment } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  return (
    <Fragment>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#272727" }}
      >
        <div className="container p-4 pb-0">
          <section className="mb-3">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/hendriawan.yudisthira/"
              target="_blank"
              role="button"
              style={{ borderRadius: "70%" }}
            >
              <FacebookIcon />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/hendriyudhis"
              target="_blank"
              role="button"
              style={{ borderRadius: "70%" }}
            >
              <TwitterIcon />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              target="_blank"
              role="button"
              style={{ borderRadius: "70%" }}
            >
              <MailIcon />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://instagram.com/hendriyudhis"
              target="_blank"
              role="button"
              style={{ borderRadius: "70%" }}
            >
              <InstagramIcon />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/hendriawan13/"
              target="_blank"
              role="button"
              style={{ borderRadius: "70%" }}
            >
              <LinkedInIcon />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/misteryZZZ"
              target="_blank"
              role="button"
              style={{ borderRadius: "70%" }}
            >
              <GitHubIcon />
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright -
          <a className="text-white" href="https://hendri-porto.netlify.app/">
            Hendri Yudhis
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
