import type { InferPageType } from 'fumadocs-core/source';
import type { documentation, academy, blog, integration } from '@/lib/source';

// Create a union type for all possible page types
type AnyPage = InferPageType<typeof documentation> | InferPageType<typeof academy> | InferPageType<typeof blog> | InferPageType<typeof integration>;

/**
 * Generate LLM-friendly text from page using fumadocs v16 getText API
 */
export async function getLLMText(page: AnyPage) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title}
URL: ${page.url}

${processed}`;
}