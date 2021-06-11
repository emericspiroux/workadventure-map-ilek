/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

console.log('Script started successfully');
WA.sendChatMessage('Hello world', 'Mr Robot');

WA.onEnterZone('myZone', () => {
  WA.sendChatMessage('You enter inside my zone!', 'Mr Robot');
});
