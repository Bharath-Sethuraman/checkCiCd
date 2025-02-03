import { describe, expect, test } from '@jest/globals';
import checkFunction from './check';
test('should return success when data is present', async () => {
    const response = await checkFunction();
    expect(response).toHaveProperty('status', 'Success');
    expect(response).toHaveProperty('msg', 'Got Data');
    expect(response).toHaveProperty('data');
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
});