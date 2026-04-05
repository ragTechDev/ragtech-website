import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

vi.mock('server-only', () => ({}));

import { fetchBeehiivPosts } from '../beehiiv';

describe('fetchBeehiivPosts', () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
    vi.unstubAllEnvs();
  });

  it('returns empty data silently when BEEHIIV_API_KEY is not set', async () => {
    vi.stubEnv('BEEHIIV_API_KEY', '');
    vi.stubEnv('BEEHIIV_PUBLICATION_ID', '');

    const result = await fetchBeehiivPosts();

    expect(result.data).toEqual([]);
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it('returns empty data silently when BEEHIIV_PUBLICATION_ID is not set', async () => {
    vi.stubEnv('BEEHIIV_API_KEY', 'some-key');
    vi.stubEnv('BEEHIIV_PUBLICATION_ID', '');

    const result = await fetchBeehiivPosts();

    expect(result.data).toEqual([]);
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });
});
