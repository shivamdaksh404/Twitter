import {atom } from 'recoil';

export const isUserLoggedIn = atom({
    key : 'isUserLoggedIn',
    default: true
})



export const Tweet = atom({
    key : 'tweet',
    default:false
})

export const atomTweetCount = atom({
    key: 'atomTweetCount',
    default:0
})

