/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { useAppToasts } from '../../../common/hooks/use_app_toasts';
import { useInstallAllMigrationRulesMutation } from '../api/hooks/use_install_all_migration_rules_mutation';
import * as i18n from './translations';

export const useInstallAllMigrationRules = (migrationId: string) => {
  const { addError } = useAppToasts();

  return useInstallAllMigrationRulesMutation(migrationId, {
    onError: (error) => {
      addError(error, { title: i18n.INSTALL_MIGRATION_RULES_FAILURE });
    },
  });
};
