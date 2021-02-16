import DataTable from '@cucumber/cucumber/lib/models/data_table';
import chalk from 'chalk';

import {space} from '../configs/space';
import {isJson} from '../utils/isJson';
import {createDataTable} from './table';

export function parseSteps(steps, definitions) {
    return steps.reduce(
        (acc, step) => {
            const definition = definitions.find((def) => {
                return def.matchesStepName(step.text);
            });

            const multiSteps = definitions.filter((def) => {
                return def.matchesStepName(step.text);
            });

            if (!definition) {
                throw new Error(
                    `\n${chalk.red(
                        'Error:'
                    )}\nCould not find a step with pattern that matches the text:\n${chalk.yellow(
                        step.text
                    )}\n`
                );
            }

            if (multiSteps.length > 1) {
                process.stdout.write(
                    `${chalk.yellow(
                        'Warning:'
                    )}\nmultiple steps found\nstep:${chalk.yellow(
                        step.text
                    )}\npatterns:\n${multiSteps
                        .map((step) => `- ${step.pattern.toString()}`)
                        .join('\n')}\n`
                );
            }

            const stepArgs = [
                ...Array.from(
                    definition.expression?.regexp?.exec(step.text) || []
                ).slice(1),
                ...(step.dataTable ? [new DataTable(step.dataTable)] : []),
                ...(step.docString
                    ? [
                          isJson(step.docString.content)
                              ? JSON.parse(step.docString.content)
                              : step.docString.content
                      ]
                    : [])
            ];

            const type = (step.keyword || '').trim().toLowerCase();

            if (acc.last !== type && type !== 'and' && type !== 'but') {
                acc.last = type;
            }

            const tableDescription = step.dataTable
                ? '\n' + createDataTable(stepArgs[stepArgs.length - 1].rawTable)
                : '';

            const docStringDescription = step.docString
                ? '\n' +
                  step.docString.content
                      .split('\n')
                      .map((row) => space + `${row}`)
                      .join('\n')
                : '';

            return {
                ...acc,
                [acc.last]: [
                    ...(acc[acc.last] || []),
                    {
                        description: `${step.keyword}${step.text}${tableDescription}${docStringDescription}`,
                        ...step,
                        code: definition.code,
                        stepArgs
                    }
                ]
            };
        },
        {
            last: 'given',
            given: [],
            when: [],
            then: []
        }
    );
}
