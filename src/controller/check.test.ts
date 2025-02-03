import { describe, expect, test } from '@jest/globals';
import checkFunction from './check';
test('should return success when data is present', async () => {
    const response = await checkFunction();

    expect(response).toHaveProperty('status', 'Success');
    expect(response).toHaveProperty('msg', 'data retrieved');
    expect(response).toHaveProperty('data');
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
});

test('should return failed when data is missing', async () => {
    const response = await checkFunction();
    expect(response).toHaveProperty('status', 'Failed');
    expect(response).toHaveProperty('msg', 'No data retrieved');
    expect(response).not.toHaveProperty('data'); // Ensures 'data' does not exist
});