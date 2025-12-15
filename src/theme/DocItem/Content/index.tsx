import React from 'react';
import type {Props} from '@theme/DocItem/Content';
import Content from '@theme-original/DocItem/Content';
import DocTypePill from '@site/src/components/DocTypePill';

export default function DocItemContentWrapper(props: Props): JSX.Element {
  return (
    <>
      <DocTypePill />
      <Content {...props} />
    </>
  );
}
