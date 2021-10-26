const assert = require('assert');
const sinon = require("sinon");
const chai = require('chai');
chai.use(require('sinon-chai'));

const { expect } = require('chai');
const { validate, validateAsync, validateWithThrow, validateWithLog, app } = require('../js/email-validator.js');

describe('Validate email', () => {
    describe('#validate()', () => {
        it('should return false if empty', () => {
            assert.strictEqual(validate(''), false);
            assert.strictEqual(validate('     '), false);
        })

        it('should return false if invalid email', () => {
            assert.strictEqual(validate('111'), false);
            assert.strictEqual(validate('abc'), false);
            assert.strictEqual(validate('111abs'), false);
        })

        it('should return false if invalid ending', () => {
            assert.strictEqual(validate('test@inbox.com'), false);
            assert.strictEqual(validate('test@test.com'), false);
            assert.strictEqual(validate('test@yandex.com'), false);
        })

        it('should return true if valid email ending', () => {
            assert.strictEqual(validate('test@gmail.com'), true);
            assert.strictEqual(validate('test@outlook.com'), true);
            assert.strictEqual(validate('test@yandex.ru'), true);
        })
    });

    describe('#validateAsync()', () => {
        it('handles Promise reject', async () => {
            assert.strictEqual(await validateAsync('test@gmail.com'), true);
            assert.strictEqual(await validateAsync('test@outlook.com'), true);
            assert.strictEqual(await validateAsync('test@yandex.ru'), true);
        })
        it('handles Promise resolve', async () => {
            assert.strictEqual(await validateAsync('test@gmail1.com'), false);
            assert.strictEqual(await validateAsync(''), false);
            assert.strictEqual(await validateAsync('     '), false);
        })
    });

    describe('#validateWithThrow()', () => {
        it('Validate Throw Error return true', () => {
            assert.strictEqual(validateWithThrow('test@gmail.com'), true);
            assert.strictEqual(validateWithThrow('test@outlook.com'), true);
            assert.strictEqual(validateWithThrow('test@yandex.ru'), true);
        });
        it('Validate Throw Error return "email is invalid"', () => {
            assert.strictEqual(validateWithThrow('test@gmail1.com'), 'email is invalid');
            assert.strictEqual(validateWithThrow(''), 'email is invalid');
            assert.strictEqual(validateWithThrow('     '), 'email is invalid');
            assert.strictEqual(validateWithThrow('test@inbox.com'), 'email is invalid');
            assert.strictEqual(validateWithThrow('test@test.com'), 'email is invalid');
            assert.strictEqual(validateWithThrow('test@yandex.com'), 'email is invalid');
        });
    });


    let sandbox;
    before(() => sandbox = sinon.createSandbox());
    beforeEach(() => sandbox.restore());

    describe('#validateWithLog()', () => {
        it('Validate With Log with throw Error return true', () => {
            const log = sandbox.spy(console, 'log')
            validateWithLog('test@gmail.com');
            if (!log.calledOnceWith(true)) {
                throw new Error('Email is valid')
            }
        });

        it('Validate With Log false', () => {
            const log = sandbox.spy(console, 'log')
            validateWithLog('test@gmail1.com');
            require('sinon').assert.calledWith(log, false)
        })

        it('Validate With Log', () => {
            const log = sandbox.spy(console, 'log')
            validateWithLog('test@yandex.ru');
            expect(log).to.have.been.calledOnceWith(true);
        })
    });
});
