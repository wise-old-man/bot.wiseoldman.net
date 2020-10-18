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

  const { baseCommand, title, requiresAdmin, examples, options, alternatives } = command;
  const shouldExpand = (examples && examples.length) ||
    (options && options.length) ||
    (alternatives && alternatives.length);

  return (
    <div className="command">
      <div className="command__header">
        <div>
          <b>{baseCommand}</b>
          {requiresAdmin && <span className="admin">Requires Admin.</span>}
          <span>{title}</span>
        </div>
        {shouldExpand && (
          <button type="button" onClick={toggle}>
            {isOpen ? 'Hide details' : 'Show details'}
            <img src="arrow_icon.svg" />
          </button>
        )}
      </div>
      <Expand open={isOpen} duration={150}>
        <div className="command__body">
          {examples && (
            <div>
              <b>Examples</b>
              {examples.map(ex => (
                <code>{ex}</code>
              ))}
            </div>
          )}
          {options && (
            <div>
              <b>Options</b>
              <ul>
                {options.map(o => (
                  <li>
                    <pre>{o.flag}</pre>
                    <span>{o.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {alternatives && (
            <div>
              <b>Alternatives</b>
              <ul>
                {alternatives.map(o => (
                  <li>
                    <pre>{o.command}</pre>
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
