import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import * as path from 'path';

export default function (schema: any): Rule {
  if (!schema.name.startsWith('auth-')) {
    throw new Error(`Auth modules must be prefixed with 'auth-'`);
  }

  return chain([
    externalSchematic('@schematics/angular', 'module', {
      project: schema.project,
      name: schema.name,
      routing: true,
      module: 'app.module.ts'
    }),
    externalSchematic('@schematics/angular', 'service', {
      project: schema.project,
      name: schema.name,
      path: path.join(
        'apps',
        schema.project,
        'src',
        'app',
        schema.name,
        'services'
        )
    }),
    externalSchematic('@schematics/angular', 'guard', {
      project: schema.project,
      name: schema.name,
      path: path.join(
        'apps',
        schema.project,
        'src',
        'app',
        schema.name,
        'services'
        )
    })
  ]);
}
