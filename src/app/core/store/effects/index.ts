import { CoreEffectsService } from './core.effects';
import { RouterEffectsService } from './router.effects';

export const effects = [CoreEffectsService, RouterEffectsService];

export * from './core.effects';
export * from './router.effects';
