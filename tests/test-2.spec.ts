import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Damazon%26oq%3Damazon%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDQzNzlqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DN4CXZ_fKLpvh4-EPy72RiQc&q=EgR6pFYeGLiA3rwGIjDd8x1TJR4yHDUJU85acL6ZGrcG-jTrrnQ6903Qaw5A9ORUODd9b4qaXpj2iPyskxYyAXJaAUM');
});