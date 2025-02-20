/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import { css } from '@emotion/css';
import React from 'react';
import { EuiPanel, EuiSpacer } from '@elastic/eui';
import { useKibana } from '../../hooks/use_kibana';

export function StreamsAppPageTemplate({ children }: { children: React.ReactNode }) {
  const {
    dependencies: {
      start: { observabilityShared },
    },
  } = useKibana();

  const { PageTemplate } = observabilityShared.navigation;

  return (
    <PageTemplate
      pageSectionProps={{
        className: css`
          max-height: calc(100vh - var(--euiFixedHeadersOffset, 0));
          overflow: auto;
          padding-inline: 0px;
        `,
        contentProps: {
          className: css`
            padding-block: 0px;
            display: flex;
            height: 100%;
          `,
        },
      }}
    >
      <EuiPanel
        paddingSize="none"
        color="subdued"
        hasShadow={false}
        hasBorder={false}
        className={css`
          display: flex;
        `}
      >
        <EuiSpacer size="m" />
        {children}
      </EuiPanel>
    </PageTemplate>
  );
}
