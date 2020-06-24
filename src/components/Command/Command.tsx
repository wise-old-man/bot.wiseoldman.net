import React, { useState, useCallback } from 'react';
import Expand from 'react-expand-animated';
import { CommandConfig } from '../../types';
import './Command.scss';

interface Props {
  command: CommandConfig;
}

const Command: React.FC<Props> = ({ command }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <div className="command">
      <div className="command__header">
        <div>
          <b>{command.baseCommand}</b>
          <span>{command.title}</span>
        </div>
        <button type="button" onClick={toggle}>
          {isOpen ? 'Hide details' : 'Show details'}
          <img src="arrow_icon.svg" />
        </button>
      </div>
      <Expand open={isOpen} duration={150}>
        <div className="command__body">
          {command.examples && (
            <div>
              <b>Examples</b>
              {command.examples.map(ex => (
                <code>{ex}</code>
              ))}
            </div>
          )}
          {command.options && (
            <div>
              <b>Options</b>
              <ul>
                {command.options.map(o => (
                  <li>
                    <pre>{o.flag}</pre>
                    <span>{o.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Expand>
    </div>
  );
};

export default Command;
