import * as api from '../api';
import {createPostObject, } from '../api/index';

beforeEach(() =>{
  localStorage.clear();
});

afterEach(() =>{
  localStorage.clear();
});

test('should get user from localStorage', () => {
  const persona = 'Steffe';
  api.storeCurrentPersona(persona);
  expect(api.fetchCurrentPersona()).toMatch(persona);
});


test('Should create Post', () => {
  const title = 'My title';
  const content = 'My content';
  const author = 'Marcus';
  const postObject = createPostObject(title, content, author);
  expect(postObject).toBeInstanceOf(Object);
  expect(postObject).toHaveProperty('date');
  expect(postObject).toHaveProperty('title', title);
})

test('Should fetch all posts', () => {
  const posts = "post"
})


export function fetchAllPosts(){
  const posts = localStorage.getItem('posts');
  return posts ? JSON.parse(posts) : [];
}