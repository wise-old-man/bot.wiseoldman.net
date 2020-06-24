import React from 'react';
import Button from '../../components/Button';
import Command from '../../components/Command';
import commands from '../../config/commands';
import '../../general.scss';
import './IndexContainer.scss';

function Index() {
  return (
    <div className="index-page__container">
      <section className="hero">
        <div className="hero__wrapper">
          <img className="hero__brand" src="logo.png" alt="" />
          <p className="hero__text">
            Track your Old School Runescape clan’s progress from your own Discord server.
          </p>
          <div className="hero__actions">
            <Button>Go to Main Website</Button>
            <Button primary>Add to Discord</Button>
          </div>
        </div>
        <img className="hero__discord" src="discord_client.png" alt="" />
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
