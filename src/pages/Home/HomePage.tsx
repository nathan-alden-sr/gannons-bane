import React from "react";
import { ButtonTheme } from "../../components/Button/Button";
import LinkButton from "../../components/LinkButton/LinkButton";
import * as RouteHelper from "../../helpers/RouteHelper";
import { ReactComponent as GitHubWhiteImage } from "../../assets/images/github-white.svg";
import { ReactComponent as DiscordWhiteImage } from "../../assets/images/discord-white.svg";
import { ReactComponent as FandomImage } from "../../assets/images/fandom.svg";
import Zelda1ArrowRight from "../../assets/images/zelda-1-arrow-right.png";
import Zelda1GannonTriforce from "../../assets/images/zelda-1-gannon-triforce.gif";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <main className="HomePage-Content">
        <div className="HomePage-LogoContainer">
          <img className="HomePage-Logo" src={Zelda1GannonTriforce} title="We have bacon!"></img>
          <p className="HomePage-AlphaPreview">
            Alpha
            <br />
            preview!
          </p>
        </div>
        <h1 className="HomePage-Title">Gannon&apos;s Bane</h1>
        <h2 className="HomePage-Description HomePage-Description_singleLine">A browser-based tracker for Zelda 1 Randomizer</h2>
        <h2 className="HomePage-Description HomePage-Description_multiLine">
          A browser-based tracker for
          <br />
          Zelda 1 Randomizer
        </h2>
        <p className="HomePage-Author">Authored by Nathan Alden, Sr.</p>
        <div className="HomePage-ButtonContainer">
          <LinkButton
            className="HomePage-TrackButton"
            to={RouteHelper.buildNewTrackedSeedUrl()}
            target="_blank"
            theme={ButtonTheme.darkGreen}
          >
            Track a Seed
            <img className="HomePage-TrackButton-ArrowImage" src={Zelda1ArrowRight} />
          </LinkButton>
        </div>
      </main>
      <footer className="HomePage-Footer">
        <div className="HomePage-FooterLinkContainer">
          <a
            className="HomePage-FooterLink"
            href="https://github.com/nathan-alden-sr/gannons-bane"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <GitHubWhiteImage className="HomePage-FooterLinkLogo" />
            GitHub
          </a>
          <a
            className="HomePage-FooterLink"
            href="https://discord.gg/bkptD9r3"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <DiscordWhiteImage className="HomePage-FooterLinkLogo" />
            Zelda 1 Randomizer Discord
          </a>
          <a
            className="HomePage-FooterLink"
            href="https://z1r.fandom.com/wiki/Zelda_1_Randomizer_Wiki"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <FandomImage className="HomePage-FooterLinkLogo" />
            Zelda 1 Randomizer Wiki
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
