import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
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
      <SectionContainer {...args} />
    </div>
  );
};
