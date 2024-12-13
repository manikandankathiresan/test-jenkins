// app.test.js

const request = require('supertest');
const express = require('express');
const app = require('../index');  // Import your express app (assuming the file name is app.js)

describe('GET /', () => {
  it('should respond with a Hello World message', async () => {
    const response = await request(app).get('/');
    
    // Assert that the response status is 200
    expect(response.status).toBe(200);
    
    // Assert that the response body contains the expected message
    expect(response.text).toBe('Hello, World! This is a Node.js app inside Docker.');
  });
});
