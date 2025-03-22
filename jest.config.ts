import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	dir: './'
});

const config: Config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/__snapshots__/'],
	passWithNoTests: true
};

export default createJestConfig(config);
