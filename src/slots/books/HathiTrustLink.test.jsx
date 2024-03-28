import renderer from 'react-test-renderer';
import HathiTrustLink from "./HathiTrustLink";

it('renders correctly', () => {
    const component = renderer.create(
        <HathiTrustLink url={'https://library.bc.edu'}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
