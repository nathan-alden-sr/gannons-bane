import React from "react";
import "./HomePage.scss";
import { ReactComponent as DiscordWhiteImage } from "../../assets/images/discord-white.svg";
import { ReactComponent as GitHubWhiteImage } from "../../assets/images/github-white.svg";
// import Button from "../../components/Button";

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <main className="HomePage-Content">
        <div className="HomePage-Logo" title="We have bacon!" />
        <h1 className="HomePage-Title">Gannon&apos;s Bane</h1>
        <h2 className="HomePage-Description">A browser-based tracker for Zelda 1 Randomizer</h2>
        <h3 className="HomePage-Author">Authored by Nathan Alden, Sr.</h3>
      </main>
      <footer className="HomePage-Footer">
        <div className="HomePage-FooterLinkContainer">
          <a
            className="HomePage-FooterLink"
            href="https://github.com/nathan-alden-sr/gannons-bane"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubWhiteImage className="HomePage-FooterLinkLogo" />
            GitHub
          </a>
          <a className="HomePage-FooterLink" href="https://discord.gg/bkptD9r3" target="_blank" rel="noreferrer">
            <DiscordWhiteImage className="HomePage-FooterLinkLogo" />
            Zelda 1 Randomizer Discord
          </a>
          <a
            className="HomePage-FooterLink"
            href="https://z1r.fandom.com/wiki/Zelda_1_Randomizer_Wiki"
            target="_blank"
            rel="noreferrer"
          >
            <span className="HomePage-FooterLinkEmoji">📝</span>
            Zelda 1 Randomizer Wiki
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
