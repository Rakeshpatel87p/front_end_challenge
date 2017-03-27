const React = require('react');
const TestUtils = require('react-addons-test-utils');
const should = require('chai').should();
import ShowCard from '../app/components/ShowCard';

describe('ShowCard component', function() {
    it('Renders ShowTitle, ShowEpisodes, and ShowImage', function() {
        const renderer = TestUtils.createRenderer();
        renderer.render( <ShowCard / > )
        var result = renderer.getRenderOutput();
        console.log(result);
        result.props.className.should.equal('gallery-image');
    });
});
