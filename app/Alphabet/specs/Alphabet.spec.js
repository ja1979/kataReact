import React from 'react';
import {shallow} from 'enzyme';
import Alphabet from '../Alphabet';

describe('Alphabet', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = shallow(<Alphabet/>);
    instance = component.instance();
  });

  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({abc: ['a', 'b',
        'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']});
    });
  });

  describe('on view', () => {
    it('should find the first line', () => {
      expect(component.find('p').first().text()).toBe('1: BCDEFGHIJKLMNOPQRSTUVWXYZA');
    });
    it('should find the second line', () => {
      expect(component.find('p').at(1).text()).toBe('2: CDEFGHIJKLMNOPQRSTUVWXYZAB');
    });
    it('should find the third line', () => {
      expect(component.find('p').at(2).text()).toBe('3: DEFGHIJKLMNOPQRSTUVWXYZABC');
    });
  });

  describe('on rotate', () => {
    it('should rotate one element 1', () => {
      let original = ['a', 'b', 'c'];
      let altered = ['b', 'c', 'a'];
      expect(instance.rotate(original, 1)).toEqual(altered);
    });
    it('should rotate one element 2', () => {
      let original = ['b', 'c', 'a'];
      let altered = ['c', 'a', 'b'];
      expect(instance.rotate(original, 1)).toEqual(altered);
    });

    it('should rotate one element an array of 5', () => {
      let original = ['1', '2', '3', '4', '5'];
      let altered = ['2', '3', '4', '5', '1'];
      expect(instance.rotate(original, 1)).toEqual(altered);
    });
    it('should rotate two elements an array of 5', () => {
      let original = ['1', '2', '3', '4', '5'];
      let altered = ['3', '4', '5', '1', '2'];
      expect(instance.rotate(original, 2)).toEqual(altered);
    });

  });

});
