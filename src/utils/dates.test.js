import { friendlyDate } from './dates';

describe('friendlyDate', () => {
  it('correct date format', async () => {
    const inputDate = '2020-08-06T07:54:00.232Z';
    const expectedOutput = '6 August 2020';
    const formattedDate = friendlyDate(inputDate);
    expect(formattedDate).toBe(expectedOutput);
  });
});
