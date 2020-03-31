import { Activity } from './activity';
import { stringify } from 'querystring';

describe('Activity', () => {
  it('should create an instance', () => {
    expect(new Activity(id,name,description)).toBeTruthy();
  });
});
