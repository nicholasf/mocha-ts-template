import { expect } from 'chai';
import { parseJSON } from '../src/index.js';
import kv from './fixtures/key-val.json' with { type: 'json' };


describe('hello', () => {
    it("adds things", () => {
        expect(true).to.be.true;
    });
})

type messages = {
    one: boolean;
    two: {
        three: boolean;
        four: number;
    }
    three: string
}

describe('it parses JSON using fs.readFileSync', async () => {
    it('should parse a valid JSON file using a matching type', async () => {
        const filePath = './test/fixtures/messages.json';
        const result: messages = (parseJSON(filePath) as messages)!;
        console.log(result)
        expect(result).to.be.an('object');
        expect(result.one).to.be.true;       
        expect(result.two.four).to.equal(42);       
    });

    it('should throw an error for an invalid JSON file', async () => {
        const filePath = './test/fixtures/invalid.json';
        try {
            parseJSON(filePath);
        } catch (err) {
            expect(err).to.be.an('error');
            expect((err as Error).message).to.include('Failed to parse JSON');
        }
    });
})

describe('it uses Record<t.v>', () => {})

describe.only('it imports JSON as a module with import attribute json', () => {
    console.log(kv);
    expect(kv.one).to.equal(1)
})

