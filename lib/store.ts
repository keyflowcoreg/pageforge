// In-memory store for generation records when Supabase is not configured
import type { GenerationRecord } from './types';

// Module-level map persists across requests in the same Node.js process
const store = new Map<string, GenerationRecord>();

export function saveRecord(record: GenerationRecord): void {
  store.set(record.id, record);
}

export function getRecord(id: string): GenerationRecord | undefined {
  return store.get(id);
}

export function markPaid(id: string): boolean {
  const record = store.get(id);
  if (!record) return false;
  store.set(id, { ...record, isPaid: true });
  return true;
}
