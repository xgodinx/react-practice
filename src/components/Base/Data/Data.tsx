export const lorem = [
  {
    title: 'Welcome to my app',
    description:
      'You can also follow this tutorial using your local development environment. To do this, you need to:',
  },
  {
    title: 'Writing markup with JSX',
    description:
      'In the live code editor below, click Fork in the top-right corner to open the editor in a new tab using the website CodeSandbox...',
  },
  {
    title: 'Adding styles',
    description:
      'If you get stuck, don’t let this stop you! Follow along online instead and try a local setup again later.',
  },
  {
    title: 'Displaying data ',
    description:
      'JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. For example, this will display user.name:',
  },
];

export const differences = {
  way: 'Notice that <MyButton /> starts with a capital letter. That’s how you know it’s a React component. React component names must always start with a capital letter, while HTML tags must be lowercase.',
  programm:
    'The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box.',
  form: 'JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:',
};
