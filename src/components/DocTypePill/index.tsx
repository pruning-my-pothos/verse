import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

type DocTypeMeta = {
  label: string;
  description: string;
};

function resolveDocType(permalink: string): DocTypeMeta {
  if (!permalink) {
    return {label: 'Doc', description: 'Documentation entry'};
  }
  const parts = permalink.replace(/(^\/|\/$)/g, '').split('/');
  // permalink looks like: docs/platforms/edge-messaging/overview
  const section = parts[1];
  switch (section) {
    case 'platforms':
      return {label: 'Platform', description: 'Reference and usage for a platform or interface'};
    case 'systems-patterns':
      return {label: 'Pattern', description: 'Concepts, architecture, and trade-offs'};
    case 'how-to-guides':
      return {label: 'How-To', description: 'Task-focused steps to achieve an outcome'};
    case 'exploration-notes':
      return {label: 'Exploration', description: 'Learning in progress with open questions'};
    case 'templates':
      return {label: 'Template', description: 'Reusable structure for consistent docs'};
    case 'start-here':
      return {label: 'Orientation', description: 'How to navigate and use the documentation'};
    default:
      return {label: 'Doc', description: 'Documentation entry'};
  }
}

export default function DocTypePill(): JSX.Element | null {
  const {metadata} = useDoc();
  const meta = resolveDocType(metadata.permalink);
  return (
    <div className="docTypePill">
      <span className="docTypePill__label">{meta.label}</span>
      <span className="docTypePill__desc">{meta.description}</span>
    </div>
  );
}
