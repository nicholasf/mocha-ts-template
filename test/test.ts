import { expect } from 'chai';
import { parseJSON } from '../src/index';

describe('hello', () => {
    it("adds things", () => {
        expect(true).to.be.true;
    });
})

describe('it parses JSON', async () => {
    it('should parse a valid JSON file', async () => {
        const filePath = './test/fixtures/messages.json';
        const result = await parseJSON(filePath);
        expect(result).to.be.an('object');
        expect(result).to.have.property('messages');
        expect(result.messages).to.be.an('array');
    });

    it('should throw an error for an invalid JSON file', async () => {
        const filePath = './test/fixtures/invalid.json';
        try {
            await parseJSON(filePath);
            throw new Error('Expected an error to be thrown');
        } catch (err) {
            expect(err).to.be.an('error');
            expect((err as Error).message).to.include('Unexpected token');
        }
    });
})
