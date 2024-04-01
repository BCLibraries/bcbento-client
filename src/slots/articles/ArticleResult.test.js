import renderer from 'react-test-renderer';
import ArticleResult from "./ArticleResult";

it('renders correctly', () => {
    const article = {
        id: "TN_cdi_proquest_journals_1656063155",
        title: "Otters",
        date: null,
        type: "article",
        dOI: null,
        creator: "Hart, Mark D",
        contributors: [],
        coverImages: [
            {
                url: "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.aspx?issn=0026-3451/MC.JPG&client=primo",
            },
            {
                url: "https://proxy-na.hosted.exlibrisgroup.com/exl_rewrite/syndetics.com/index.aspx?issn=0026-3451/MC.JPG&client=primo",
            }
        ],
        isPartOf: [
            "The Midwest quarterly (Pittsburg), 2014-06, Vol.55 (4), p.40"
        ],
        isPeerReviewed: true,
        isOpenAccess: false,
        journalTitle: [
            "The Midwest quarterly (Pittsburg)"
        ],
        libkeyAvailability: null,
    };

    const component = renderer.create(
        <ArticleResult article={article}/>
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
