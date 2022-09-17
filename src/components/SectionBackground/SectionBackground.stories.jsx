import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          repellendus, laborum excepturi dignissimos reprehenderit dolorum vero
          incidunt! Aspernatur dolor vel, quaerat quae suscipit iste earum
          corrupti consequuntur dolorem debitis quisquam.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
