import renderer from 'react-test-renderer';
import FindingAidLink from "./FindingAidLink";

it('renders correctly', () => {
    const component = renderer.create(
        <FindingAidLink url={'https://library.bc.edu'} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
