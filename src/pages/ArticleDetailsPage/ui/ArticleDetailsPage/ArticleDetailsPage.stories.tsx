import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'page/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

const article: Article = {
  id: '1',
  title: 'JavaScipt news',
  subtitle: "What's new in JavaScipt in 2024",
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1005,
  createdAt: '10.01.2024',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Block title',
      paragraphs: [
        'Hghjf fds df dfsfdsf dfsdfdf fdf ds4ywy ytr',
        'Hghjf fds df dfsfdsf ',
        "Hghjf fds df dfsfdsf dfsdfdf fdf ds4ywy ytr fds a gfghhfdgs 'gdfgdfsfs' dgsgsgdsf dd",
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.CODE,
      code: '<dialog>\n          <h2>Закрой меня!</h2>\n          <form method="dialog">\n             <button>Закрыть</button>\n          </form>\n        </dialog>',
    },
    {
      id: '3',
      type: ArticleBlockType.TEXT,
      title: 'Block title title 2',
      paragraphs: [
        'Hghjf fds df dfsfdsf fsdjkf fds fdsfsdakf fd dfsd dfsdfdf fdf ds4ywy ytr',
        'Hghjf fds df dfsfdsf fsdjkf fds fdsfsdakf fd dfsd  fdsf dfdsf dfsdfdf fdf ds4ywy ytr',
        'Hghjf fds df dfsfdsf asasa ase ',
        "Hghjf fds df dfsfdsf dfsdfdf fd fds a gfghhfdgs 'gdfgdfsfs' dgsgsgdsf dd",
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.IMAGE,
      title: 'Image 1',
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/27/QEMU_6.2_screenshot_%28cropped%29.png',
    },
    {
      id: '5',
      type: ArticleBlockType.CODE,
      code: 'function myFunction() {\n            console.log(this === window)\n          }\n          \n          let functionalExpression = function () {\n            console.log(this === window)\n          }\n          \n          myFunction()\n          functionalExpression()',
    },
  ],
};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article,
    },
  }),
];
