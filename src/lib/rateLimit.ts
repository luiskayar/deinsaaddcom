type RateLimitOptions = {
  key: string;
  limit: number;
  windowMs: number;
};

type RateLimitResult = {
  ok: boolean;
  remaining: number;
  reset: number;
};

// In-memory store (suficiente para desarrollo y entornos serverful)
// En serverless, considera usar Redis/KV para persistencia entre invocaciones
const getStore = (): Map<string, { count: number; resetAt: number }> => {
  const g = globalThis as unknown as { __rateLimitStore?: Map<string, { count: number; resetAt: number }> };
  if (!g.__rateLimitStore) {
    g.__rateLimitStore = new Map();
  }
  return g.__rateLimitStore;
};

export async function rateLimit(opts: RateLimitOptions): Promise<RateLimitResult> {
  const store = getStore();
  const now = Date.now();
  const entry = store.get(opts.key);

  if (!entry || now > entry.resetAt) {
    store.set(opts.key, { count: 1, resetAt: now + opts.windowMs });
    return { ok: true, remaining: opts.limit - 1, reset: now + opts.windowMs };
  }

  if (entry.count >= opts.limit) {
    return { ok: false, remaining: 0, reset: entry.resetAt };
  }

  entry.count += 1;
  store.set(opts.key, entry);
  return { ok: true, remaining: opts.limit - entry.count, reset: entry.resetAt };
}


