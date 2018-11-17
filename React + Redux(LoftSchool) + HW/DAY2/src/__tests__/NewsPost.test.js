import React from 'react';
import NewsPost from '../NewsPost';
import Comment from '../Comment';
import {shallow} from 'enzyme';

describe('NewsPost component', () => {
  describe('test render', () => {
    const wrapper = shallow(<NewsPost id={1} text={'test'} />);
    it('contain input', () => {
      expect(wrapper.find('input')).toHaveLength(1);
    });

    it('contain input', () => {
      expect(wrapper.find('input')).toHaveLength(1);
    });
    it('contain p with text', () => {
      expect(wrapper.find('p')).toHaveLength(1);
      expect(wrapper.find('p').contains('test')).toBeTruthy();
    });
  });

  describe('check presence of instance methods', () => {
    const wrapper = shallow(<NewsPost id={1} text={'test'} />);
    it('contain instance method handleChange', () => {
      expect(wrapper.instance().handleChange).toBeDefined();
    });

    it('contain instance method handleKeyDown', () => {
      expect(wrapper.instance().handleKeyDown).toBeDefined();
    });

    it('contain instance method handleDelete', () => {
      expect(wrapper.instance().handleDelete).toBeDefined();
    });
  });

  describe('check state content', () => {
    const wrapper = shallow(<NewsPost id={1} text={'test'} />);
    it('contain comments array', () => {
      expect(wrapper.state().comments).toEqual([]);
    });
    it('contain commentInput with empty string', () => {
      expect(wrapper.state().commentInput).toEqual('');
    });
  });

  describe('check callbacks', () => {
    it('save from input to state.commentInput', () => {
      const wrapper = shallow(<NewsPost id={1} text={'test'} />);
      wrapper.find('input').simulate('change', {target: {value: 10}});
      wrapper.update();
      expect(wrapper.state().commentInput).toEqual(10);
    });
    it('create new comment from value state.commentInput on press enter', () => {
      const wrapper = shallow(<NewsPost id={1} text={'test'} />);
      wrapper.find('input').simulate('change', {target: {value: 10}});
      wrapper.update();
      wrapper.find('input').simulate('keyDown', {keyCode: 13});
      expect(wrapper.state().commentInput).toEqual('');
      expect(wrapper.state().comments).toEqual([{id: 1, text: 10}]);
    });
    it('delete comment on call handleDelete', () => {
      const wrapper = shallow(<NewsPost id={1} text={'test'} />);
      wrapper.find('input').simulate('change', {target: {value: 10}});
      wrapper.update();
      wrapper.find('input').simulate('keyDown', {keyCode: 13});
      wrapper.instance().handleDelete(wrapper.state().comments[0].id);
      wrapper.update();
      expect(wrapper.state().comments).toEqual([]);
    });
  });

  describe('check Comments rendering', () => {
    it('render Comment component on create new comment', () => {
      const wrapper = shallow(<NewsPost id={1} text={'test'} />);
      wrapper.find('input').simulate('change', {target: {value: 10}});
      wrapper.update();
      wrapper.find('input').simulate('keyDown', {keyCode: 13});
      wrapper.update();
      const commentFromState = wrapper.state().comments[0];
      expect(
        wrapper.contains(
          <Comment
            key={commentFromState.id}
            id={commentFromState.id}
            text={commentFromState.text}
            onDelete={wrapper.instance().handleDelete}
          />
        )
      ).toBeTruthy();
    });
  });
});
