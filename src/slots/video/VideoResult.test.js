import renderer from 'react-test-renderer';
import VideoResult from './VideoResult.jsx';

it('renders correctly', () => {
    const component = renderer.create(
        <VideoResult/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
