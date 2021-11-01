import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';

/**
 * Compute the interval (start and end) for a month, given a reference date
 * from within that month.
 * @param reference A date in the month for which the interval is requested.
 */
export const getMonthInterval = (reference: Date = new Date()) => ({
    start: startOfMonth(reference),
    end: endOfMonth(reference)
})