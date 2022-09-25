import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita atque repellat delectus ipsum, excepturi, incidunt aliquam possimus pariatur quaerat tempora consectetur officiis maxime doloremque dolores optio fuga quam exercitationem culpa.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
