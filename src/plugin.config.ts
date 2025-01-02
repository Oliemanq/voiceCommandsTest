import { createId } from "@paralleldrive/cuid2"

/**
 * Plugin configuration.
 */
export default {
    ce_prefix: createId(),
    identifier: 'dev.oliemanq.voice-features-test',
    name: 'Voice features test',
    description: 'a plugin to test voice features',
    version: '0.0.1',
    author: 'Oliemanq',
    repo: 'https://github.com/Oliemanq/voiceFeaturesTest',
    entry: {
        'plugin.js': {
            type: 'main',
        }
    }
}