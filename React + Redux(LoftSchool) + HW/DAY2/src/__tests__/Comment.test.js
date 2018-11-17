import React from 'react';
import Comment from '../Comment';
import {shallow} from 'enzyme';

describe('Comment component', () => {
  const onDeleteMock = jest.fn();
  const wrapper = shallow(
    <Comment id={1} onDelete={onDeleteMock} text={'test'} />
  );

  describe('test render', () => {
    it('contain p', () => {
      expect(wrapper.find('p')).toHaveLength(1);
    });
    it('contain span with class delete', () => {
      expect(wrapper.find('span.delete')).toHaveLength(1);
    });
    it('contain p with text from props', () => {
      expect(wrapper.find('p').contains('test')).toBeTruthy();
    });
  });

  describe('test callbacks', () => {
    it('call callback handleDelete on click', () => {
      wrapper.find('span.delete').simulate('click');
      expect(onDeleteMock).toHaveBeenCalledTimes(1);
    });

    it('have correct arguments', () => {
      wrapper.find('span.delete').simulate('click');
      expect(onDeleteMock).toBeCalledWith(1);
    });
  });

  describe('check presence of instance methods', () => {
    it('have onDelete method', () => {
      expect(wrapper.instance().handleDelete).toBeDefined();
    });
  });
});
