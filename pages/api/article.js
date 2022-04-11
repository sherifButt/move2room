const Article = ( _, res ) => {
  const article = getArticle();
   res.statusCode = 200;
   res.json(article);
};

export const getArticle = () => {
  const article = {
     id: 1,
     author: "Andrea Vassallo",
     company: "Nebulab",
     image_url: "http://placekitten.com/200/200",
     content: "The cat is a domestic species of small carnivorous mammal.",
  };

  return article
}

export default Article;
