import { COMPLETED } from 'data/constants';

/**
 * Checkmark object
 * @typedef  Checkmark
 *
 * @property {string} id
 * @property {string} date
 * @property {string} habitId
 * @property {number} value
 */

 
export function calculateScore(values) {
  if (!values.length) return 0;

  const completedCount = values.reduce((sum, value) => {
    return value === COMPLETED ? sum + 1 : sum;
  }, 0);

  return Math.floor((completedCount / values.length) * 100);
}


export function createPieChartData(values) {
  const score = calculateScore(values);

  return [
    {
      id: 'value',
      value: score,
    },
    {
      id: 'empty',
      value: 100 - score,
    },
  ];
}
