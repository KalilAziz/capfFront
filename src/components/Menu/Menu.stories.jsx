import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from '.';

export default {
  title: 'Menu',
  component: Menu,
  args: {},
};

export const template = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};
