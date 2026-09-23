import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');

test('publishes the bakery offer and recurring bread club details', () => {
  assert.match(html, /SaraDough Bakery/);
  assert.match(html, /\$49\.99/);
  assert.match(html, /\$79\.99/);
  assert.match(html, /2 regular loaves/);
  assert.match(html, /1 regular \+ 1 specialty loaf/);
  assert.match(html, /Delivered every two weeks/);
  assert.match(html, /4 artisan loaves/);
});

test('keeps ordering connected to the bakery Instagram account', () => {
  assert.match(html, /https:\/\/www\.instagram\.com\/saradough\.bakery\//);
});

test('emits metadata and an accessible hero image', () => {
  assert.match(html, /Small-batch, naturally leavened sourdough/);
  assert.match(html, /alt="A sliced almond-topped sourdough loaf/);
});
