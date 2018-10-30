import {GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess } from './actions';

describe('generateAuralUpdate', () => {
    it('Should return the action', () => {
        const guesses= [1, 25, 45];
        const feedback = "You are hot";
        let auralStatus= '';
        
        const action = generateAuralUpdate(guesses, feedback);
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
        // expect(action.guesses).toEqual(guesses);
        // expect(action.feedback).toEqual(feedback);
    });
});

describe('restatGame', () => {
    it('Should return the action', () => {
        const action = restartGame();
        expect(action.type).toEqual(RESTART_GAME);
        
    });
});

describe('makeGuess', () => {
    it('Should return the action', () => {
        const guess=  '45';
        // const feedback = "You are hot";
        
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
        // expect(action.feedback).toEqual('Please enter a valid number.');
    });
});

