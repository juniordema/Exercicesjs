import { expect, test } from 'vitest'

import { average } from './average.js'

import { calculateArea } from './calculateArea.js';

import { car } from './car.js';

import { chaineLongue } from './chaineLongue.js';

import { chrismax } from './christmas.js';

import { clock } from './clock.js';

import { combineArr } from './combineArr.js';

import { cylinder } from './cylinder.js'

import { supprimerDoublons } from './delete.js';

import { students } from './deleteroll.js'

import { extract } from './extract.js'

import { fectData } from './fetchData.js';

import { books } from './filter.js'

import { filter } from './filtre.js'

import { findMax } from './findMAx.js'

import { num } from './index.js'

import { toLowerCaseString } from './lower_case.js'

import { map } from './map.js'

import{euler} from './eulers.js'

import{num1,num2} from './multiplie.js'

import{even} from './numberpaire.js' 

import{object} from './object.js'

import{add} from './promise.js'

import{sum} from './sum.js'

import{produit,prix,quantite} from './template.js'

test('produit,prix, quantite',()=>{
        expect(produit,prix,quantite).toBe()
})
test('sum',()=>{
        expect(sum).toEqual();
})

test('add',()=>{
        expect(add).toEqual();
})

test('object',()=>{
        expect(object).toEqual()
})

 test('even',()=>{
        expect(even).toEqual();
 })
test('num1, num2',()=>{
        expect(num1,num2).toEqual();
})

test('eulers',()=>{
        expect(euler).toEqual();
})
test('arr', () => {
        expect(map).toEqual();
})

test('toLowerCaseString', () => {
        expect(toLowerCaseString).toEqual();
})

test('num', () => {
        expect(num).toEqual();
})
test('findMAx', () => {
        expect(findMax).toEqual();
})
test('filter', () => {
        expect(filter).toEqual();
})

test('books', () => {
        expect(books).toEqual();
})
test('fectData', () => {
        expect(fectData).toEqual();
})

test('extract', () => {
        expect(extract).toEqual()
})
test('students', () => {
        expect(students).toEqual();
})
test('supprimerDoublons', () => {
        expect(supprimerDoublons).toEqual()
})

test('cylinder', () => {
        expect(cylinder).toEqual()
})

test('combineArr', () => {
        expect(combineArr).toEqual()
})

test('clock', () => {
        expect(clock).toEqual()
})

test('chrismax', () => {
        expect(chrismax).toEqual()
})

test('chaineLongue', () => {
        expect(chaineLongue).toEqual()
})

test('car', () => {
        expect(car).toEqual()
})

test('calculateArea', () => {
        expect(calculateArea(5)).toBe(78.53981633974483);
});

test('average', () => {
        expect(average(89, 85, 78, 92)).toEqual(86);

}); 