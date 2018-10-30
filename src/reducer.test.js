import reducer from './reducer';
import {
    restartGame,
    makeGuess,
    generateAuralUpdate
} from './actions';

describe('reducer', () => {

   const initialState = {
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '', 
        correctAnswer: 20
    }

    it('Should set the initial state when nothing is passed in', () => {
        

        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.auralStatus).toEqual('');
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('generateAuralUpdate', () => {
        it('Should generate aural update', () => {
            let state = initialState;
            let auralStatus= "Here's the status of the game right now: Make your guess! You've made 0 guesses.";
            state = reducer(state, generateAuralUpdate());
            expect(state.auralStatus).toEqual(auralStatus);
        });
    });

    describe('restart game', () => {
        it('Should restart game', () => {
            let state = initialState;
            const correctAnswer = 10;
            state = reducer(state, restartGame(correctAnswer));
            expect(state).toEqual({
                guesses: [],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer: correctAnswer
            });
        });
    });

    describe('make guess', () => {
        it('Should make guess', () => {
            let state =initialState;
            
            state = reducer(state, makeGuess(25));
            expect(state.guesses).toEqual([25]);
            expect(state.feedback).toEqual("You're Hot!");

            state = reducer(state, makeGuess(60));
            expect(state.guesses).toEqual([25, 60]);
            expect(state.feedback).toEqual("You're Cold...");

            state = reducer(state, makeGuess(10));
            expect(state.guesses).toEqual([25, 60, 10]);
            expect(state.feedback).toEqual("You're Warm.");

            state = reducer(state, makeGuess(20));
            expect(state.guesses).toEqual([25, 60, 10, 20]);
            expect(state.feedback).toEqual("You got it!");
            
        });
    });




})    
