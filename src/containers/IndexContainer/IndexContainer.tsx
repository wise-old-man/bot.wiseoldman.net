import React from 'react';
import { Helmet } from 'react-helmet';
import Button from '../../components/Button';
import Command from '../../components/Command';
import commands from '../../config/commands';
import '../../general.scss';
import './IndexContainer.scss';

const MAIN_WEBSITE_URL = 'https://wiseoldman.net';
const INVITE_URL =
  'https://discord.com/api/oauth2/authorize?client_id=719720369241718837&permissions=0&scope=applications.commands%20bot';

function Index() {
  return (
    <div className="index-page__container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Discord Bot - Wise Old Man</title>
      </Helmet>
      <section className="hero">
        <div className="hero__wrapper">
          <img className="hero__brand" src="logo.png" alt="" />
          <p className="hero__text">
            Track your Old School Runescape clan’s progress from your own Discord server.
          </p>
          <div className="hero__actions">
            <a href={MAIN_WEBSITE_URL}>
              <Button>Go to Main Website</Button>
            </a>
            <a href={INVITE_URL}>
              <Button primary>Add to Discord</Button>
            </a>
          </div>
          <div className="hero__contribute">
            <a href="https://github.com/wise-old-man/discord-bot">
              <span>Contribute on</span>
              <b>Github</b>
            </a>
          </div>
        </div>
        <img className="hero__discord" src="discord_client.gif" alt="" />
      </section>
      <section>
        <div className="help-warning">
          <span>Is the bot not responding?</span>
          <p>
            Check out
            <a href="https://github.com/wise-old-man/wise-old-man/wiki/User-Guide:-How-To-Configure-The-Bot's-Required-Permissions">
              this page
            </a>
            for help configuring the required bot permissions.
          </p>
        </div>
      </section>
      <section className="commands">
        <div className="commands__wrapper">
          <h1 className="commands__title">Commands</h1>
          {commands.map(c => (
            <Command key={c.baseCommand} command={c} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Index;
