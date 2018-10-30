import reducer from './reducer';
import {generateAuralStatus, restartGame, makeGuess, generateAuralUpdate} from './actions';

describe('reducer', () => {

   const initialState = {
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: ''
    }

    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '',
        correctAnswer: state.correctAnswer
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('generateAuralUpdate', () => {
        it('Should generate aural update', () => {
            let state;
            let guess;
            let auralStatus= "Here's the status of the game right now: Make your guess! You've made 0 guesses.";
            let feedback= 'Make your guess!';
            state = reducer(state, generateAuralUpdate(guess, feedback));
            expect(state.auralStatus).toEqual(auralStatus);
        });
    });

    describe('restart game', () => {
        it('Should restart game', () => {
            let state = initialState;
            state = reducer(state, restartGame());
            expect(state).toEqual({
                guesses: [],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer: state.correctAnswer
            });
        });
    });

    describe('make guess', () => {
        it('Should make guess', () => {
            let state ={correctAnswer: 75};
            let guess = 51;
            let feedback = "You're Warm.";
           
            
            state = reducer(state, makeGuess(guess));
            expect(state.feedback).toEqual(feedback);
            expect(state.guess).toEqual(guess);
        });
    });




})    
