import Article from "../pages/index";

const articleMock = {
   id: 1,
   author: "Andrea Vassallo",
   company: "Nebulab",
   image_url: "http://placekitten.com/200/200",
   content: "The cat is a domestic species of small carnivorous mammal.",
};

const Story = (props) => <Article {...props} />;

// Here we export a variant of the default template passing props
export const ArticleStory = Story.bind( {} )
ArticleStory.args = {
   article: articleMock,
};

// Here we export a variant of the default template passing props
export const EmptyArticleStory = Story.bind( {} )
EmptyArticleStory.args = {
   article: null,
};

// ff
export const ArticleStoryWithFooter = Story.bind( {} )
ArticleStoryWithFooter.args = {
   article: {...articleMock,author:'name'}
}

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
   title: "Article",
   component: Article,
   argTypes: {
      showImage: { control: "boolean" },
      article:{}
   },
};
