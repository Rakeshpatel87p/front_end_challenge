import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {should} from 'chai';
import ShowCard from '../components/ShowCard';

describe('ShowCard component', function() {
    it('Renders ShowTitle, ShowEpisodes, and ShowImage', function() {
        const renderer = TestUtils.createRenderer();
        renderer.render( <ShowCard / > )
        var result = renderer.getRenderOutput();
        console.log(result);
        result.props.className.should.equal('gallery-image');
    });
});
