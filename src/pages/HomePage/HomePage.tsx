import React from "react";
import "./HomePage.scss";
import { ReactComponent as DiscordWhiteImage } from "../../assets/images/discord-white.svg";
import { ReactComponent as GitHubWhiteImage } from "../../assets/images/github-white.svg";

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <main className="HomePage-Content">
        <div className="HomePage-Logo" title="We have bacon!">
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
            <span className="HomePage-FooterLinkEmoji">📝</span>
            Zelda 1 Randomizer Wiki
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
